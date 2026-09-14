# FILE: server.py — FastAPI backend (all routes prefixed /api).
# EDIT HERE TO:
#   - Enquiries API: POST/GET /api/enquiries  -> stores contact & quote forms in MongoDB
#     (collection `enquiries`). Email to jcpl@junctioncraft.in needs SMTP/API creds (see logger note).
#   - Company Profile PDF: GET /api/company-profile.pdf -> edit build_company_profile_pdf()
#     to change PDF content (about, stats, services, products, projects, contact).

from fastapi import FastAPI, APIRouter
from fastapi.responses import Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import io
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ===================== Enquiries =====================
class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = ""
    service: Optional[str] = ""
    message: str
    source: Optional[str] = "contact"  # contact | product | service
    item: Optional[str] = ""            # product/service name for quote forms
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class EnquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = ""
    service: Optional[str] = ""
    message: str
    source: Optional[str] = "contact"
    item: Optional[str] = ""


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(payload: EnquiryCreate):
    obj = Enquiry(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.enquiries.insert_one(doc)
    logger.info(f"New enquiry saved from {obj.email} (source={obj.source}, item={obj.item}). "
                f"Email delivery to jcpl@junctioncraft.in pending SMTP credentials.")
    return obj


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    rows = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


# ===================== Company Profile PDF =====================
def build_company_profile_pdf() -> bytes:
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.units import mm
    from reportlab.lib import colors
    from reportlab.platypus import (
        SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, ListFlowable, ListItem
    )
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

    GREEN = colors.HexColor("#14472F")
    LIGHT = colors.HexColor("#EDECE6")
    buf = io.BytesIO()
    doc = SimpleDocTemplate(buf, pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm,
                            topMargin=18 * mm, bottomMargin=18 * mm,
                            title="Junctioncraft Pvt. Ltd. — Company Profile")
    ss = getSampleStyleSheet()
    h1 = ParagraphStyle("h1", parent=ss["Title"], textColor=GREEN, fontSize=24, spaceAfter=4)
    sub = ParagraphStyle("sub", parent=ss["Normal"], textColor=colors.HexColor("#555555"),
                         fontSize=10, spaceAfter=12)
    h2 = ParagraphStyle("h2", parent=ss["Heading2"], textColor=GREEN, fontSize=14,
                        spaceBefore=14, spaceAfter=6)
    body = ParagraphStyle("body", parent=ss["Normal"], fontSize=10, leading=15, spaceAfter=6)

    story = []
    story.append(Paragraph("Junctioncraft Pvt. Ltd. (JCPL)", h1))
    story.append(Paragraph("Green Energy EPC · Karnataka Government-approved Electrical Contractor · Est. 2021", sub))

    story.append(Paragraph("About Us", h2))
    story.append(Paragraph(
        "Junctioncraft Private Limited was incorporated on March 12, 2021 and is registered with the "
        "Registrar of Companies, Bangalore. We manufacture, supply and execute electrical infrastructure "
        "for power utilities, government departments and renewable developers. As an end-to-end EPC partner, "
        "one accountable team owns each project from survey to final energisation.", body))

    # Key facts table
    facts = [
        ["Highest substation class", "765kV"],
        ["Highest transmission line", "220kV"],
        ["Classification", "Karnataka Government-approved Contractor"],
        ["Incorporated", "2021, ROC Bangalore"],
    ]
    t = Table(facts, colWidths=[70 * mm, 90 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), LIGHT),
        ("TEXTCOLOR", (0, 0), (0, -1), GREEN),
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#DDDDD5")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(Spacer(1, 6))
    story.append(t)

    services = [
        "Substations — 11kV to 765kV design, installation & commissioning",
        "Electrical Line Works — 11kV & 33kV overhead lines, reconductoring & strengthening",
        "Solar EPC & Evacuation — plant BOP, 33kV/11kV evacuation lines & pooling substations",
        "Wind Power Erection — windmill assembly, erection & electrical cabling",
        "Transformer Shifting & Relocation — safe de-installation, transport & re-commissioning",
        "Highway Lighting Works — NHAI-compliant lighting & line shifting",
    ]
    story.append(Paragraph("Our Services", h2))
    story.append(ListFlowable([ListItem(Paragraph(s, body)) for s in services], bulletType="bullet"))

    products = [
        "Lattice Towers (66kV–220kV)", "Insulators (disc/pin/polymer)",
        "Conductors & Cables (ACSR/AAAC/AAC, LT/HT)", "Transformers (distribution & power)",
        "Poles (PCC/PSC/steel tubular)", "Line Accessories & Hardware",
    ]
    story.append(Paragraph("Products & Solutions", h2))
    story.append(ListFlowable([ListItem(Paragraph(p, body)) for p in products], bulletType="bullet"))

    projects = [
        ["Client", "Work", "Location"],
        ["Rays Power Infra Ltd", "110kV Line, 3.8 km", "Honnati"],
        ["Marg Energy Pvt Ltd", "33kV Line, 12 km", "Bijjaragi"],
        ["Ravi Infra Projects Ltd", "11kV Line, 28 km", "Vijayapura"],
        ["Rays Power Infra Ltd", "110kV Line, 1 km", "Yellaburga"],
        ["KVGGN Synergy Pvt Ltd", "66kV MC Line, 4.8 km", "Aland"],
        ["KVGGN Synergy Pvt Ltd", "USS Works, 10 locations", "Vijayapura"],
        ["HESCOM", "11kV Link Line 121 km + 38 Ganga Kalyan", "Vijayapura region"],
        ["Risitha / Hexa Climate", "220kV Line, 17.6 km", "Gadag"],
    ]
    story.append(Paragraph("Selected Projects", h2))
    pt = Table(projects, colWidths=[55 * mm, 70 * mm, 35 * mm])
    pt.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), GREEN),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#DDDDD5")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, LIGHT]),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(pt)

    story.append(Paragraph("Contact", h2))
    story.append(Paragraph(
        "Email: jcpl@junctioncraft.in &nbsp;|&nbsp; Phone/WhatsApp: +91 74113 07097 "
        "&nbsp;|&nbsp; Vijayapura, Karnataka, India", body))

    doc.build(story)
    buf.seek(0)
    return buf.read()


@api_router.get("/company-profile.pdf")
async def company_profile_pdf():
    pdf_bytes = build_company_profile_pdf()
    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": 'attachment; filename="Junctioncraft-Company-Profile.pdf"'},
    )


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()