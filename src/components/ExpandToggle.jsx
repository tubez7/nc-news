import { useState } from "react";

export default function ExpandToggle({ children }) {
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
      {visible && children}
    </div>
  );
}
