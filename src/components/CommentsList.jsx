import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";


export default function CommentsList({ comment_count, article_id: articleId, setComments, comments }) {
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    getComments(articleId).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <>
        <p>{comment_count} comments loading ....</p>
      </>
    );

  return (
    <div>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </div>
  );
}
