import React from 'react';

export default function Footer() {
  return (
    <footer className="py-1 border-t border-white/10 bg-card">
      <div className="container mx-auto px-6 text-center">
        <div className="text-1xl font-black mb-1 tracking-tighter text-primary">
          Koda Solutions
        </div>

        <p className="text-text/40 text-sm font-normal">
          © {new Date().getFullYear()} From a Shop... To an Empire
        </p>
      </div>
    </footer>
  );
}
