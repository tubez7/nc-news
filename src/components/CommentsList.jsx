import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import ExpandToggle from "./ExpandToggle";

export default function CommentsList({ comment_count, article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((commentsData) => {
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
    <ExpandToggle>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </ExpandToggle>
  );
}
