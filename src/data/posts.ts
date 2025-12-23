export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  author: string;
  subreddit: string;
  createdAt: string;
  image?: string;
  upvotes: number;
  comments: Comment[];
}

export const posts: Post[] = [
 
  {
    id: "1",
    title: "US carries out 'massive' strike against IS targets in Syria",
    author: "worldnews_bot",
    subreddit: "worldnews",
    createdAt: "2 hours ago",
    image: "/images/posts/post1.jpg",
    upvotes: 1843,
    comments: [
      {
        id: "c1",
        author: "global_observer",
        content: "This situation keeps escalating every year.",
        createdAt: "1 hour ago",
      },
    ],
  },
  {
    id: "2",
    title: "UN calls for immediate ceasefire talks in Middle East",
    author: "intl_reporter",
    subreddit: "worldnews",
    createdAt: "6 hours ago",
    upvotes: 932,
    comments: [],
  },

  {
    id: "3",
    title: "[OC] Homeless man rocking Tesla employee merch in San Francisco",
    author: "street_clicks",
    subreddit: "pics",
    createdAt: "5 hours ago",
    image: "/images/posts/post2.jpg",
    upvotes: 9621,
    comments: [
      {
        id: "c2",
        author: "bayarea_user",
        content: "SF never fails to surprise.",
        createdAt: "3 hours ago",
      },
    ],
  },
  {
    id: "4",
    title: "Sunset over Golden Gate Bridge (Shot on iPhone)",
    author: "photo_walk",
    subreddit: "pics",
    createdAt: "10 hours ago",
    image: "/images/posts/post3.jpg",
    upvotes: 3412,
    comments: [],
  },

  {
    id: "5",
    title: "Why preventive healthcare matters more than ever",
    author: "med_insights",
    subreddit: "healthcare",
    createdAt: "1 day ago",
    upvotes: 412,
    comments: [],
  },
  {
    id: "6",
    title: "Doctors warn against misinformation spreading online",
    author: "health_watch",
    subreddit: "healthcare",
    createdAt: "2 days ago",
    upvotes: 287,
    comments: [],
  },
  {
    id: "7",
    title: "My dog realized he’s afraid of his own reflection",
    author: "pet_life",
    subreddit: "funny",
    createdAt: "3 hours ago",
    upvotes: 7892,
    comments: [],
  },
  {
    id: "8",
    title: "Tried cooking without a recipe — regret everything",
    author: "kitchen_fail",
    subreddit: "funny",
    createdAt: "8 hours ago",
    upvotes: 5231,
    comments: [],
  },
  {
    id: "9",
    title: "Some days you win, some days you learn — just keep showing up",
    author: "daily_thoughts",
    subreddit: "quotes",
    createdAt: "1 day ago",
    upvotes: 421,
    comments: [],
  },
  {
    id: "10",
    title: "Discipline beats motivation when motivation fades",
    author: "mindset_builder",
    subreddit: "quotes",
    createdAt: "2 days ago",
    upvotes: 812,
    comments: [],
  },
];
