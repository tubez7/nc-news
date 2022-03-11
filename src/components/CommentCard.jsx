import { Link } from "react-router-dom";


export default function CommentCard({
  comment_id,
  author,
  created_at,
  body,
  votes,
}) {
  console.log(comment_id, "needed for voting on later ticket");

  const creationDate =
    created_at.slice(11, 16) +
    " - " +
    created_at.slice(8, 10) +
    "-" +
    created_at.slice(5, 7) +
    "-" +
    created_at.slice(0, 4);

  return (
    <article className="comment-card">
      <section className="comment-header">
        <h5>
          <Link to={`/users/${author}`}>{author} </Link>@: {creationDate}
        </h5>
      </section>
      <p className="comment-body">{body}</p>
      
      <div className="comment-vote">
      <h5>{votes} Votes</h5>
      <button className="comment-up-vote">+</button>
      <button className="comment-down-vote">-</button>
      </div>
    </article>

  );
}
