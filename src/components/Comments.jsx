import { useEffect, useState } from "react";

export default function Comments({comment_count, article_id}) {
    const [isLoading, setIsLoading] = useState(false);
    const [comments, setComments] = useState([]);


    useEffect(() => {
        console.log(comment_count, article_id, "inside useEffect");
        setIsLoading(true);
        
    })


  return (
    <>
      <h5>Comments: {comment_count}</h5>
      <p>
        WILL RENDER AN EXPANDABLE COMMENTS LIST HERE. RENDER 1ST COMMENT - CLICK
        TO EXPAND.
      </p>
    </>
  );
}
