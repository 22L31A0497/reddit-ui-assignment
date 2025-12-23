"use client";

import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { useUIStore } from "@/src/store/uiStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useUIStore();
  const pathname = usePathname();
  const [expandedWidth, setExpandedWidth] = useState(260);
  useLayoutEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;

      if (w < 768) {
        setExpandedWidth(200); // mobile
      } else if (w < 1280) {
        setExpandedWidth(220); // tablet
      } else {
        setExpandedWidth(260); // desktop
      }
    };

    updateWidth(); // run BEFORE paint
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <motion.aside
  className="sidebar"
  initial={false}   
  animate={{ width: isSidebarOpen ? expandedWidth : 48 }}
  transition={{ duration: 0.25, ease: "easeOut" }}
>

     
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      {/* Content (only when open) */}
      {isSidebarOpen && (
        <div className="sidebar-content">
          {/* Primary Navigation */}
          <div className="sidebar-section">
            <Link
              href="/"
              className={`sidebar-item ${pathname === "/" ? "active" : ""}`}
            >
              🏠 Home
            </Link>

            <Link
              href="/popular"
              className={`sidebar-item ${
                pathname === "/popular" ? "active" : ""
              }`}
            >
              🔥 Popular
            </Link>

            <Link
              href="/explore"
              className={`sidebar-item ${
                pathname === "/explore" ? "active" : ""
              }`}
            >
              🧭 Explore
            </Link>
          </div>

          <div className="sidebar-divider" />

          {/* Recent */}
          <div className="sidebar-section">
            <div className="sidebar-title">RECENT</div>

            <Link
              href="/r/healthcare"
              className={`sidebar-item ${
                pathname === "/r/healthcare" ? "active" : ""
              }`}
            >
              🩺 r/healthcare
            </Link>

            <Link
              href="/r/funny"
              className={`sidebar-item ${
                pathname === "/r/funny" ? "active" : ""
              }`}
            >
              😂 r/funny
            </Link>
          </div>

          <div className="sidebar-divider" />

          {/* Resources */}
          <div className="sidebar-section">
            <div className="sidebar-title">RESOURCES</div>

            <Link href="/about" className="sidebar-item">
              ℹ️ About Reddit
            </Link>
            <Link href="/advertise" className="sidebar-item">
              📢 Advertise
            </Link>
            <Link href="/developer" className="sidebar-item">
              🧑‍💻 Developer Platform
            </Link>
            <Link href="/reddit-pro" className="sidebar-item">
              🚀 Reddit Pro
            </Link>
            <Link href="/help" className="sidebar-item">
              ❓ Help
            </Link>
            <Link href="/blog" className="sidebar-item">
              📰 Blog
            </Link>
            <Link href="/careers" className="sidebar-item">
              💼 Careers
            </Link>
            <Link href="/press" className="sidebar-item">
              🗞️ Press
            </Link>
          </div>
        </div>
      )}
    </motion.aside>
  );
}
