// FILE: components/WhatsAppButton.jsx — Floating WhatsApp chat button (bottom-right).
// EDIT HERE TO: change button position/colour. Phone/message come from mock.js (COMPANY.whatsapp).

import React from "react";
import { COMPANY } from "../mock";

const WhatsAppButton = () => {
  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-900/20 hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16.003 3C9.383 3 4 8.383 4 15c0 2.117.555 4.184 1.61 6.008L4 29l8.2-1.57A11.94 11.94 0 0 0 16 27c6.62 0 12-5.383 12-12S22.62 3 16.003 3zm0 21.82a9.8 9.8 0 0 1-4.99-1.366l-.358-.213-4.868.933.926-4.746-.233-.377A9.77 9.77 0 0 1 6.2 15c0-5.41 4.4-9.8 9.803-9.8 5.41 0 9.797 4.39 9.797 9.8s-4.387 9.82-9.797 9.82zm5.38-7.34c-.293-.147-1.735-.856-2.003-.953-.268-.098-.464-.147-.66.147-.195.293-.756.953-.927 1.148-.17.196-.342.22-.635.073-.293-.146-1.238-.456-2.36-1.454-.872-.777-1.46-1.737-1.632-2.03-.17-.293-.018-.452.128-.598.132-.132.293-.342.44-.513.146-.171.195-.293.293-.489.098-.196.049-.366-.025-.513-.073-.146-.66-1.59-.905-2.178-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.513.073-.782.366-.268.293-1.025 1.002-1.025 2.446s1.05 2.836 1.196 3.032c.146.196 2.066 3.156 5.006 4.425.7.302 1.245.483 1.67.618.702.223 1.34.192 1.845.117.563-.084 1.735-.71 1.98-1.394.244-.685.244-1.27.17-1.394-.072-.122-.268-.196-.561-.343z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
