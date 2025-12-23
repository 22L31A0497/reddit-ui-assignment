"use client";

import { useState } from "react";

const INITIAL_COMMUNITIES = [
  { name: "r/AskMen", members: "7,108,316" },
  { name: "r/AskWomen", members: "5,593,014" },
  { name: "r/PS4", members: "5,510,556" },
  { name: "r/apple", members: "6,294,974" },
  { name: "r/NBA2k", members: "742,458" },
];

const MORE_COMMUNITIES = [
  { name: "r/reactjs", members: "4,100,000" },
  { name: "r/frontend", members: "1,200,000" },
  { name: "r/webdev", members: "2,300,000" },
  { name: "r/technology", members: "14,800,000" },
];

export default function RightSidebar() {
  const [showMore, setShowMore] = useState(false);

  const communities = showMore
    ? [...INITIAL_COMMUNITIES, ...MORE_COMMUNITIES]
    : INITIAL_COMMUNITIES;

  return (
    <aside className="right-sidebar">
      <div className="right-sidebar-content">
        <div className="right-card">
          <h3 className="right-card-title">Popular Communities</h3>

          {communities.map((community) => (
            <div key={community.name} className="community-item">
              <div className="community-avatar">
                {community.name.charAt(2).toUpperCase()}
              </div>

              <div className="community-meta">
                <span className="community-name">{community.name}</span>
                <span className="community-count">
                  {community.members} members
                </span>
              </div>
            </div>
          ))}

          {!showMore && (
            <button
              className="see-more-btn"
              onClick={() => setShowMore(true)}
            >
              See more
            </button>
          )}
        </div>
      </div>

      <div className="right-footer">
        <span>Reddit Rules</span>
        <span>Privacy Policy</span>
        <span>User Agreement</span>
        <span>Accessibility</span>
        <span className="copyright">
          Reddit, Inc. © 2025. All rights reserved.
        </span>
      </div>
    </aside>
  );
}
