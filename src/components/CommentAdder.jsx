import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/user-context";

export default function CommentAdder({
  setComments,
  articleId,
  setComNum,
  loggedIn,
}) {
  const [newBody, setNewBody] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleChange = (e) => {
    setNewBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      username: loggedInUser.username,
      body: newBody,
    };
    setNewBody("");

    setComments((currentComments) => {
      return [newComment, ...currentComments];
    });
    setComNum((currentComNum) => currentComNum + 1);
    postComment(articleId, newComment)
      .then((comment) => {
        setComments((currentComments) => {
          return currentComments.slice(1);
        });
        setComments((currentComments) => {
          return [comment, ...currentComments];
        });
      })
      .catch(() => {
        alert("There was a problem posting your comment");
        setComments((currentComments) => {
          return currentComments.slice(1);
        });
        setComNum((currentComNum) => currentComNum - 1);
      });
  };

  if (!loggedIn) return <p>You must be logged in to post a comment</p>;

  return (
    <div>
      <textarea
        id="add_comment"
        name="add_comment"
        rows="6"
        placeholder="Leave a comment...."
        onChange={handleChange}
        value={newBody}
      ></textarea>
      <button disabled={newBody.length === 0} onClick={handleSubmit}>
        Post comment
      </button>
    </div>
  );
}
