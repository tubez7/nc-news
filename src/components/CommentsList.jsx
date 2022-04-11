import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentsList({
  article_id: articleId,
  setComments,
  comments,
  setComNum,
  comNum,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      {comments
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
        
  
