import { useState } from "react";

export default function ExpandToggle({ children, comments, comment_count }) {
  const [visible, setVisible] = useState(false);

  const comNum = comments.length > comment_count ? comments.length : comment_count;

  const toggleVisible = () => {
    setVisible((currentVisible) => !currentVisible);
  };

  return (
    <div>
      <button className="comment-toggle" onClick={toggleVisible}>
        {visible ? "Hide comments" : `Show ${comNum} comments`}
      </button>
      {visible && children}
    </div>
  );
}
