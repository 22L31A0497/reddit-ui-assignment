"use client";

import { useEffect, useState } from "react";
import { useCommentStore } from "@/src/store/commentStore";

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  replies: Comment[];
}

interface Props {
  postId: string;
  initialComments: Comment[];
}

export default function CommentSection({ postId, initialComments }: Props) {
  const { getComments, addComment, addReply } = useCommentStore();

  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);

  // controls + / − per comment
  const [openComments, setOpenComments] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const baseComments: Comment[] = initialComments.map((c) => ({
    ...c,
    replies: c.replies ?? [],
  }));

  const storedComments = getComments(postId);

  const commentMap = new Map<string, Comment>();
  baseComments.forEach((c) => commentMap.set(c.id, c));
  storedComments.forEach((c) => commentMap.set(c.id, c));

  const comments = Array.from(commentMap.values());

  const handleAddComment = () => {
    if (!text.trim()) return;

    addComment(postId, {
      id: crypto.randomUUID(),
      author: "you",
      content: text,
      createdAt: new Date().toISOString(),
      replies: [],
    });

    setText("");
  };

  const handleAddReply = (comment: Comment) => {
    if (!replyText.trim()) return;

    const exists = storedComments.some((c) => c.id === comment.id);

    if (!exists) {
      addComment(postId, { ...comment, replies: [] });
    }

    addReply(postId, comment.id, {
      id: crypto.randomUUID(),
      author: "you",
      content: replyText,
      createdAt: new Date().toISOString(),
      replies: [],
    });

    setReplyText("");
    setReplyTo(null);
  };

  const toggleComment = (id: string) => {
    setOpenComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  function formatTime(iso: string) {
    const diff = Date.now() - new Date(iso).getTime();
    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  }

  return (
    <div style={{ marginTop: "16px" }}>
      {/* Add comment */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment…"
          className="comment-input"
        />
        <button className="comment-post-btn" onClick={handleAddComment}>
          Post
        </button>
      </div>

      {/* Comment list */}
      {comments.map((comment) => {
        const isOpen = openComments[comment.id];

        return (
          <div
            key={`${postId}-${comment.id}`}
            className="comment-item"
          >
            <div className="comment-header">
              <button
                onClick={() => toggleComment(comment.id)}
                className="comment-toggle-btn"
              >
                {isOpen ? "−" : "+"}
              </button>

              <strong>u/{comment.author}</strong>
              <span className="comment-time">
                {formatTime(comment.createdAt)}
              </span>
            </div>

            {isOpen && (
              <>
                <p
  style={{
    marginTop: "6px",
    marginLeft: "30px",
    color: "#e5e7eb",   // light gray, readable in dark mode
    lineHeight: "1.5",
  }}
>
  {comment.content}
</p>


                <button
                  className="reply-btn"
                  onClick={() =>
                    setReplyTo(replyTo === comment.id ? null : comment.id)
                  }
                >
                  Reply
                </button>

                {replyTo === comment.id && (
                  <div className="reply-box">
                    <input
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write a reply…"
                      className="comment-input"
                    />
                    <button
                      className="comment-post-btn"
                      onClick={() => handleAddReply(comment)}
                    >
                      Reply
                    </button>
                  </div>
                )}

                {comment.replies.length > 0 && (
                  <div className="comment-replies">
                    {comment.replies.map((r) => (
                      <div
                        key={`${comment.id}-reply-${r.id}`}
                        className="comment-reply"
                      >
                        <strong>u/{r.author}</strong>
                        <span className="comment-time">
                          {formatTime(r.createdAt)}
                        </span>
                        <p>{r.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
