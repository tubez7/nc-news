import { useState } from "react";
import { postComment } from "../utils/api";

export default function CommentAdder({ setComments, articleId }) {
  const [newBody, setNewBody] = useState("");
  const [isErr, setIsErr] = useState(false); //what are we doing with this variable?

  const handleChange = (e) => {
    console.log("handlechange", e.target.value);
    setNewBody(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("handle submit triggered");
    e.preventDefault(); //what is this preventing?
    const newComment = {
      username: "weegembump",
      body: newBody,
    };
    setIsErr(false);
    setNewBody("");
    setComments((currentComments) => {
      return [newComment, ...currentComments];
    });
    postComment(articleId, newComment).catch((err) => {
      setIsErr(true);
      alert("There was a problem posting your comment");
      setComments((currentComments) => {
        return currentComments.slice(1);
      });
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
      ></textarea>
      <button onClick={handleSubmit}>Post comment</button>
    </div>
  );
}
