import { Link } from "react-router-dom";
import { useState } from "react";
import Vote from "./Vote";
import CommentsList from "./CommentsList";
import ExpandToggle from "./ExpandToggle";
import CommentAdder from "./CommentAdder";

export default function SingleArticle({
  comment_count,
  created_at,
  title,
  author,
  topic,
  body,
  votes,
  article_id,
  loggedIn,
}) {
  
  const [comments, setComments] = useState([]);
  const [comNum, setComNum] = useState(
    comments.length > comment_count ? comments.length : comment_count
  );

  const creationDate =
    created_at.slice(11, 16) +
    " - " +
    created_at.slice(8, 10) +
    "-" +
    created_at.slice(5, 7) +
    "-" +
    created_at.slice(0, 4);

  return (
    <article className="Article-page">
      <section className="Article-heading">
        <h2>{title}</h2>
        <div>
          <Link to={`/api/users/${author}`}>
            <h3>{author}</h3>
          </Link>
          <h4>Posted @: {creationDate}</h4>
          <Link to={`/topics/${topic}`}>
            <h4>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h4>
          </Link>
        </div>
      </section>
      <div className="Article-body">
        <p className="Article-text">{body}</p>
        <Vote articleId={article_id} votes={votes} />
        <ExpandToggle comments={comments} comNum={comNum}>
          <CommentAdder
            articleId={article_id}
            setComments={setComments}
            setComNum={setComNum}
            loggedIn={loggedIn}
          />
          <CommentsList
            articleId={article_id}
            setComments={setComments}
            comments={comments}
            setComNum={setComNum}
            comNum={comNum}
          />
        </ExpandToggle>
      </div>
    </article>
  );
}
