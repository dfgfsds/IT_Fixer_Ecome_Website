"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function GlobalAppPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already seen and closed the popup (optional, but good practice)
      const hasSeenPopup = localStorage.getItem("hasSeenItFixerAppPopup");
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenItFixerAppPopup", "true");
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      padding: '20px'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#141622',
        borderRadius: '16px',
        padding: '30px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        border: '1px solid #2a2d3a'
      }}>
        <button
          onClick={closePopup}
          style={{
            position: 'absolute',
            right: '15px',
            top: '15px',
            background: 'transparent',
            border: 'none',
            color: '#a6d719',
            cursor: 'pointer',
            padding: '5px'
          }}
          aria-label="Close"
        >
          <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <img src="/assets/img/logo.png" alt="logo" style={{ height: '50px', width: 'auto' }} />
        </div>

        <h3 style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>
          Download Our App
        </h3>
        
        <p style={{ marginBottom: '25px', fontSize: '15px', color: '#9ca3af', lineHeight: '1.5' }}>
          Get the best deals on Gaming PCs, Editing Workstations, and High-Performance Laptops directly on your phone!
        </p>

        <Link
          href="https://play.google.com/store/apps/details?id=in.itfixer.app&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            // Optional: close on click
            closePopup();
          }}
          style={{ display: 'inline-block', transition: 'transform 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            style={{ height: '60px', width: 'auto', margin: '0 auto' }}
          />
        </Link>
      </div>
    </div>
  );
}
