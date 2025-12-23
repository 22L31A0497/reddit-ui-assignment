"use client";

import { posts } from "@/src/data/posts";
import PostCard from "./PostCard";
import { useUIStore } from "@/src/store/uiStore";

interface FeedProps {
  subreddit?: string;
}

export default function Feed({ subreddit }: FeedProps) {
  const { searchQuery } = useUIStore();
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    const matchesSubreddit = subreddit
      ? post.subreddit === subreddit
      : true;
    const matchesSearch =
      normalizedQuery === "" ||
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.author.toLowerCase().includes(normalizedQuery);
    return matchesSubreddit && matchesSearch;
  });

  return (
    <section>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        {filteredPosts.length === 0 && (
          <p style={{ color: "#9ca3af", marginTop: "16px" }}>
            No results found for “{searchQuery}”
          </p>
        )}

        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
