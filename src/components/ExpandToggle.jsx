import { useState } from "react";
import CommentAdder from "./CommentAdder";

export default function ExpandToggle({ children, articleId, setComments }) {
  const [visible, setVisible] = useState(false);
  console.log(children);

  const toggleVisible = () => {
    setVisible((currentVisible) => !currentVisible);
  };

  return (
    <div>
      <button className="comment-toggle" onClick={toggleVisible}>
        {visible ? "Hide comments" : `${children.length} Comments`}
      </button>
      {visible && (
        <CommentAdder setComments={setComments} articleId={articleId} />
      )}
      {visible && children}
    </div>
  );
}
