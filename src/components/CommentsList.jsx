import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentsList({ comment_count, article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(article_id, "inside useEffect");
    setIsLoading(true);
    return getComments(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <>
        <h5>Comments: {comment_count}</h5>
        <p>COMMENTS LOADING....</p>
      </>
    );

  return (
    <>
      <h5>Comments: {comment_count}</h5>
      <article>
        {comments.map((comment) => {
          return <CommentCard key={comment.id} {...comment} />;
        })}
      </article>
    </>
  );
}
