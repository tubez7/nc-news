import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/user-context";

import DeleteCom from "./DeleteCom";
import Vote from "./Vote";

export default function CommentCard({
  comment_id,
  author,
  created_at,
  body,
  votes = null,
  setComments,
  setComNum,
}) {
  const { loggedInUser } = useContext(UserContext);

  let creationDate = "";

  if (created_at) {
    creationDate =
      created_at.slice(11, 16) +
      " - " +
      created_at.slice(8, 10) +
      "-" +
      created_at.slice(5, 7) +
      "-" +
      created_at.slice(0, 4);
  } else {
    creationDate = new Date().toTimeString().slice(0, 9);
  }

  return (
    <div className="comment-card">
      <section className="comment-header">
        <h5>
          {author ? <Link to={`/users/${author}`}>{author} </Link> : "You"} @:
          {" " + creationDate}
        </h5>
      </section>
      <p className="comment-body">{body}</p>
      <div className="votedel-block">
        {typeof votes === "number" && (
          <Vote votes={votes} commentId={comment_id} />
        )}
        {author === loggedInUser.username && (
          <DeleteCom
            commentId={comment_id}
            setComments={setComments}
            setComNum={setComNum}
          />
        )}
      </div>
    </div>
  );
}
