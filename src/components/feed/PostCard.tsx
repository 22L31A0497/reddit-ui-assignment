"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Post } from "@/src/data/posts";
import CommentSection from "@/src/components/comments/CommentSection";
import { useCommentStore } from "@/src/store/commentStore";


interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [votes, setVotes] = useState(post.upvotes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);
  const [mounted, setMounted] = useState(false);

   useEffect(() => {
    setMounted(true);
    }, []);

  const storedCount = useCommentStore(
    (s) => s.getComments(post.id).length
  );
  const totalComments = post.comments.length + storedCount;

  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (userVote === "up") return;

    setVotes((v) => (userVote === "down" ? v + 2 : v + 1));
    setUserVote("up");
  };

  const handleDownvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (userVote === "down") return;

    setVotes((v) => (userVote === "up" ? v - 2 : v - 1));
    setUserVote("down");
  };

  return (
    <motion.article
      className="post-card"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
  
      <div className="post-top-row">
        {/* User info */}
        <div className="post-user">
          <div className="avatar">
            {post.author.charAt(0).toUpperCase()}
          </div>

          <div className="post-user-meta">
            <span className="post-subreddit">r/{post.subreddit}</span>
            <span className="post-meta">
              u/{post.author} • {post.createdAt}
            </span>
          </div>
        </div>

      
        <div className="post-actions">
          <button className="join-btn">Join</button>
          <button className="more-btn">⋯</button>
        </div>
      </div>

    
      <Link href={`/post/${post.id}`} style={{ textDecoration: "none" }}>
        <div className="post-clickable">
          {/* Title */}
          <h3 className="post-title">{post.title}</h3>

          {/* Image */}
          {post.image && (
            <div className="post-image">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={320}
                className="post-img"
              />
            </div>
          )}
        </div>
      </Link>

      {/* ===== FOOTER (NON-NAVIGABLE) ===== */}
      <div className="post-footer">
        {/* Vote box */}
        <div className="vote-box">
          <button
            className={`vote-btn ${userVote === "up" ? "active" : ""}`}
            onClick={handleUpvote}
          >
            ⬆
          </button>

          <span className="vote-count">{votes}</span>

          <button
            className={`vote-btn ${userVote === "down" ? "active" : ""}`}
            onClick={handleDownvote}
          >
            ⬇
          </button>
        </div>

      <Link href={`/post/${post.id}`} className="comment-box">
        💬 {mounted ? totalComments : post.comments.length}
      </Link>
        <div className="post-share">➦</div>
      </div>

      
    </motion.article>
  );
}
