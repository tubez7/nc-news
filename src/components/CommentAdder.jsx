import { useState } from "react";
import { postComment } from "../utils/api";

export default function CommentAdder({
  setComments,
  article_id: articleId,
  setComNum,
}) {
  const [newBody, setNewBody] = useState("");

  const handleChange = (e) => {
    setNewBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      username: "weegembump",
      body: newBody,
    };
    setNewBody("");

    setComments((currentComments) => {
      return [newComment, ...currentComments];
    });
    setComNum((currentComNum) => currentComNum + 1);
    postComment(articleId, newComment).catch(() => {
      alert("There was a problem posting your comment");
      setComments((currentComments) => {
        return currentComments.slice(1);
      });
      setComNum((currentComNum) => currentComNum - 1);
    });
  };

  return (
    <div>
      <textarea
        id="add_comment"
        name="add_comment"
        rows="10"
        placeholder="Please enter your comment here...."
        onChange={handleChange}
        value={newBody}
      ></textarea>
      <button disabled={newBody.length === 0} onClick={handleSubmit}>
        Post comment
      </button>
    </div>
  );
}
