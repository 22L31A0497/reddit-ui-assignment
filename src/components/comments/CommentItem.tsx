import { Comment } from "@/src/data/posts";

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="comment-item">
      <div className="comment-author">
        u/{comment.author} • {comment.createdAt}
      </div>
      <div className="comment-content">{comment.content}</div>
    </div>
  );
}
