"use client";

import Link from "next/link";
import { useUIStore } from "@/src/store/uiStore";

export default function Header() {
  const { searchQuery, setSearchQuery } = useUIStore();

  return (
    <header className="header">
      <div className="header-left">
        <Link href="/" className="header-logo">
          reddit
        </Link>
      </div>

      {/* Center: Search */}
      <div className="header-center">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Reddit"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

    
      <div className="header-right">
    
        <a
          href="https://play.google.com/store/apps/details?id=com.reddit.frontpage&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="get-app-btn"
        >
          📱 Get App
        </a>
        <Link href="/login" className="header-btn login-btn">
          Log In
        </Link>

        <Link href="/signup" className="header-btn signup-btn">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
