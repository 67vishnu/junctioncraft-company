// FILE: api.js — All backend API calls in one place.
// EDIT HERE TO: change API endpoints, add new backend calls.
// createEnquiry -> saves contact/quote forms. COMPANY_PROFILE_PDF -> PDF download URL.

import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const createEnquiry = (data) => axios.post(`${API}/enquiries`, data);

export const COMPANY_PROFILE_PDF = `${API}/company-profile.pdf`;
