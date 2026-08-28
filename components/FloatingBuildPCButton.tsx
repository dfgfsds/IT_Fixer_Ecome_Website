"use client";

import React from 'react';
import Link from 'next/link';
import { Cpu } from 'lucide-react';

export default function FloatingBuildPCButton() {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      right: '0',
      transform: 'translateY(-50%)',
      zIndex: 1040,
      display: 'flex',
      alignItems: 'center'
    }}>
      <Link href="/build-your-pc" style={{ textDecoration: 'none' }}>
        <div className="d-flex align-items-center justify-content-center shadow-lg" style={{
          backgroundColor: '#CBFE1C',
          color: '#000',
          padding: '20px 10px',
          borderTopRightRadius: '12px',
          borderBottomRightRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontWeight: 'bold',
          border: '1px solid #111',
          borderLeft: 'none',
          boxShadow: '4px 0 15px rgba(203, 254, 28, 0.2)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          gap: '12px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'rotate(180deg) translateX(-4px)';
          e.currentTarget.style.backgroundColor = '#d6ff36';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'rotate(180deg) translateX(0)';
          e.currentTarget.style.backgroundColor = '#CBFE1C';
        }}
        >
          <Cpu size={22} style={{ transform: 'rotate(90deg)' }} />
          <span className="d-none d-md-inline text-uppercase" style={{ letterSpacing: '1px' }}>Build PC</span>
          <span className="d-inline d-md-none text-uppercase" style={{ letterSpacing: '1px' }}>Build</span>
        </div>
      </Link>
    </div>
  );
}
