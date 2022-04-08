import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentsList({
  comment_count,
  article_id: articleId,
  setComments,
  comments,
  setComNum,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(articleId).then((commentsData) => {
      setComments(commentsData.reverse());
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
      {comments
        .sort((a, b) => b.comment_id - a.comment_id)
        .map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              {...comment}
              setComments={setComments}
              setComNum={setComNum}
            />
          );
        })}
    </div>
  );
}
