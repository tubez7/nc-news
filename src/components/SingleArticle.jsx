import { Link } from "react-router-dom";
import { useState } from "react";
import Vote from "./Vote";
import CommentsList from "./CommentsList";
import ExpandToggle from "./ExpandToggle";
import CommentAdder from "./CommentAdder";

export default function SingleArticle(article) {
  const [comments, setComments] = useState([]);

  const creationDate =
    article.created_at.slice(11, 16) +
    " - " +
    article.created_at.slice(8, 10) +
    "-" +
    article.created_at.slice(5, 7) +
    "-" +
    article.created_at.slice(0, 4);

  return (
    <article className="Article-page">
      <section className="Article-heading">
        <h2>{article.title}</h2>
        <div>
          <Link to={`/api/users/${article.author}`}>
            <h3>{article.author}</h3>
          </Link>
          <h4>Posted @: {creationDate}</h4>
          <Link to={`/topics/${article.topic}`}>
            <h4>
              {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
            </h4>
          </Link>
        </div>
      </section>
      <div className="Article-body">
        <p className="Article-text">{article.body}</p>
        <Vote {...article} />
        <ExpandToggle {...article} comments={comments}>
          <CommentAdder setComments={setComments} {...article} />
          <CommentsList
            setComments={setComments}
            comments={comments}
            {...article}
          />
        </ExpandToggle>
      </div>
    </article>
  );
}
