import { useState } from "react";

export default function ExpandToggle({ children, comNum }) {
  
  const [visible, setVisible] = useState(false);
  
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


     
