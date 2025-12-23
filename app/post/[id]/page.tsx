import { posts } from "@/src/data/posts";
import Image from "next/image";
import CommentSection from "@/src/components/comments/CommentSection";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <h2>Post not found</h2>
        <p style={{ color: "#9ca3af" }}>
          The post you are looking for does not exist.
        </p>
      </div>
    );
  }

  const normalizedComments = post.comments.map((c) => ({
    ...c,
    replies: [],
  }));

  return (
    <>
      {/* Back */}
     <Link
  href="/"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "16px",
    fontSize: "17px",
    fontWeight: 500,
    color: "#ffffffff",
    textDecoration: "none",
  }}
>
  ← Back to feed
</Link>
      <article
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid #1f2937",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <div style={{ fontSize: "13px", color: "#9ca3af" }}>
          r/{post.subreddit} • u/{post.author} • {post.createdAt}
        </div>

        <h1 style={{ margin: "12px 0" }}>{post.title}</h1>
        {post.image && (
          <div className="post-image">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="post-img"
            />
          </div>
        )}
        <CommentSection
          postId={post.id}
          initialComments={normalizedComments}
        />
      </article>
    </>
  );
}
