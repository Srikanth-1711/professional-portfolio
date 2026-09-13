"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { NAV_LINKS } from "@/constants";
import { getAssetPath } from "@/utils/path";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#about" aria-label="Lakshmi Srikanth Polavarapu home" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
        <img src={getAssetPath("/avatar-cisco-crop.png")} alt="Lakshmi Srikanth Avatar" style={{ width: "36px", height: "36px", borderRadius: "50%", boxShadow: "0 0 12px rgba(147, 51, 234, 0.6)" }} />
        <span>LSP<span>.</span></span>
      </a>
      <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <XMarkIcon /> : <Bars3Icon />}</button>
      <nav className={open ? "nav-open" : ""}>
        {NAV_LINKS.map((item) => <a key={item.title} href={item.link} onClick={() => setOpen(false)}>{item.title}</a>)}
        <a href={getAssetPath("/resume.pdf")} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} style={{ color: "#c084fc", fontWeight: 600 }}>Resume ↗</a>
      </nav>
    </header>
  );
};
