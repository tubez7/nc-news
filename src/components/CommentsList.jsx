import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentsList({
  articleId,
  setComments,
  comments,
  setComNum,
  comNum,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(articleId).then((commentsData) => {
      setComments(commentsData.sort((a, b) => b.comment_id - a.comment_id));
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <>
        <p>{comNum} comments loading ....</p>
      </>
    );

  return (
    <div>
      {comments.map((comment, i) => {
        return (
          <CommentCard
            key={comment.comment_id ?? i}
            {...comment}
            setComments={setComments}
            setComNum={setComNum}
          />
        );
      })}
    </div>
  );
}
