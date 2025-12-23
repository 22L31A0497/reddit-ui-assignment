import { create } from "zustand";
import { persist } from "zustand/middleware";

// Comment model with nested replies
export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  replies: Comment[];
}

interface CommentState {
  commentsByPost: Record<string, Comment[]>;

  getComments: (postId: string) => Comment[];
  addComment: (postId: string, comment: Comment) => void;
  addReply: (postId: string, parentId: string, reply: Comment) => void;
}

export const useCommentStore = create<CommentState>()(
  persist(
    (set, get) => ({
      commentsByPost: {},

      
      getComments: (postId) => {
        return get().commentsByPost[postId] ?? [];
      },

      
      addComment: (postId, comment) =>
        set((state) => ({
          commentsByPost: {
            ...state.commentsByPost,
            [postId]: [
              ...(state.commentsByPost[postId] ?? []),
              { ...comment, replies: [] },
            ],
          },
        })),

      
      addReply: (postId, parentId, reply) =>
        set((state) => ({
          commentsByPost: {
            ...state.commentsByPost,
            [postId]: (state.commentsByPost[postId] ?? []).map((c) =>
              c.id === parentId
                ? { ...c, replies: [...(c.replies ?? []), reply] }
                : c
            ),
          },
        })),
    }),
    {
     
      name: "reddit-comments-storage",
    }
  )
);
