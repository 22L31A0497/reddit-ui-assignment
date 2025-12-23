import Feed from "@/src/components/feed/Feed";

interface PageProps {
  params: Promise<{
    subreddit: string;
  }>;
}

export default async function SubredditPage({ params }: PageProps) {
  const { subreddit } = await params;

  return <Feed subreddit={subreddit} />;
}
