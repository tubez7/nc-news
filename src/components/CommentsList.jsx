import { useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import ExpandToggle from "./ExpandToggle";

export default function CommentsList({ comment_count, article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);


  const handleClick = () => {
    console.log(article_id, "inside handleClick");
    setIsLoading(true);
    return getComments(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  };

  if (isLoading)
    return (
      <>
        <p>{comment_count} comments loading ....</p>
      </>
    );

  return (
    <>
      <button className="comment-toggle" onClick={() => handleClick()}>
        {comment_count} Comments
      </button>
      <article>
        {comments.map((comment) => {
          return <CommentCard key={comment.id} {...comment} />;
        })}
      </article>
    </>
  );
}
