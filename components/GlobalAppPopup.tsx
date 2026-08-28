"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, QrCode, Smartphone, X } from "lucide-react";

export default function GlobalAppPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On mobile, keep it collapsed by default so it doesn't block the screen
      // On laptop/desktop, show open by default
      const savedState = sessionStorage.getItem("it_fixer_app_qr_open");
      if (savedState !== null) {
        setIsOpen(savedState === "true");
      } else {
        setIsOpen(!mobile);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleOpen = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    sessionStorage.setItem("it_fixer_app_qr_open", String(newState));
  };

  if (!mounted) return null;

  const playStoreUrl = "https://play.google.com/store/apps/details?id=in.itfixer.app&hl=en_IN";

  return (
    <div
      className="fixed z-[9995] transition-all duration-300 ease-in-out left-0"
      style={{
        position: "fixed",
        zIndex: 9995,
        left: 0,
        top: isMobile ? "120px" : "140px",
        bottom: "auto",
        transform: "none",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="flex items-center">
        {/* Collapsed State Tab (Visible when closed) */}
        {!isOpen && (
          <button
            onClick={toggleOpen}
            className="group flex items-center gap-1.5 bg-[#141622] hover:bg-[#1c2033] text-white border-2 border-l-0 border-[#a6d719] shadow-2xl py-2 px-2.5 rounded-r-xl cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#141622",
              color: "#ffffff",
              border: "1.5px solid #a6d719",
              borderLeft: "none",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
              padding: "8px 10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              boxShadow: "4px 4px 15px rgba(0,0,0,0.35), 0 0 10px rgba(166, 215, 25, 0.2)",
            }}
            title="Open App QR"
            aria-label="Open App QR"
          >
            <div
              style={{
                writingMode: isMobile ? "horizontal-tb" : "vertical-rl",
                textOrientation: "mixed",
                transform: isMobile ? "none" : "rotate(180deg)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <QrCode size={14} style={{ color: "#a6d719", transform: isMobile ? "none" : "rotate(90deg)" }} />
              <span>APP QR</span>
            </div>
            <ChevronRight
              size={18}
              className="text-[#a6d719] animate-pulse"
              style={{ color: "#a6d719" }}
            />
          </button>
        )}

        {/* Expanded State Card (Visible when open) */}
        {isOpen && (
          <div
            className="flex items-stretch bg-white text-gray-900 rounded-r-2xl shadow-2xl overflow-hidden border border-l-0 border-gray-200"
            style={{
              display: "flex",
              alignItems: "stretch",
              backgroundColor: "#ffffff",
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
              border: "1px solid #e5e7eb",
              borderLeft: "none",
              boxShadow: "8px 8px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(166, 215, 25, 0.15)",
              animation: "slideInLeft 0.3s ease-out",
            }}
          >
            {/* QR Content Area */}
            <div
              style={{
                padding: "12px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minWidth: isMobile ? "145px" : "165px",
                maxWidth: "185px",
              }}
            >
              {/* Header Label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  marginBottom: "8px",
                }}
              >
                <Smartphone size={15} style={{ color: "#141622" }} />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#141622",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  App QR
                </span>
              </div>

              {/* QR Image Box */}
              <Link
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to download IT Fixer App"
                style={{
                  display: "block",
                  position: "relative",
                  width: isMobile ? "115px" : "135px",
                  height: isMobile ? "115px" : "135px",
                  backgroundColor: "#ffffff",
                  padding: "4px",
                  borderRadius: "10px",
                  border: "1.5px solid #f0f2f5",
                  boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src="/assets/img/it_fixer_google_play_qr.png"
                  alt="IT Fixer App QR Code"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Link>

              {/* Download App CTA */}
              <Link
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "8px",
                  fontSize: "10px",
                  fontWeight: 800,
                  color: "#141622",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "#f4f6f8",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#a6d719";
                  e.currentTarget.style.color = "#000000";
                  e.currentTarget.style.borderColor = "#a6d719";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f4f6f8";
                  e.currentTarget.style.color = "#141622";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <span>DOWNLOAD APP</span>
              </Link>
            </div>

            {/* Collapse Arrow Button (Right edge tab inside the card) */}
            <button
              onClick={toggleOpen}
              style={{
                backgroundColor: "#f4f5f7",
                border: "none",
                borderLeft: "1px solid #e5e7eb",
                color: "#4b5563",
                cursor: "pointer",
                padding: "0 6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e5e7eb";
                e.currentTarget.style.color = "#111827";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f4f5f7";
                e.currentTarget.style.color = "#4b5563";
              }}
              title="Close QR tab"
              aria-label="Close QR tab"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
              <div
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "#6b7280",
                  textTransform: "uppercase",
                }}
              >
                CLOSE
              </div>
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
