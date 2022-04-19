import { Link } from "react-router-dom";

const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  votes,
  created_at,
  comment_count,
}) => {
  const creationDate =
    created_at.slice(11, 16) +
    " - " +
    created_at.slice(8, 10) +
    "-" +
    created_at.slice(5, 7) +
    "-" +
    created_at.slice(0, 4);

  return (
    <article className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h3 className="article-title">{title}</h3>
      </Link>
      <Link to={`/topics/${topic}`}>
        <h4 className="article-topic">
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </h4>
      </Link>
      <h5 className="article-created">
        Posted by <Link to={`/api/users/${author}`}>{author}</Link> @:{" "}
        {creationDate}
      </h5>
      <h5 className="article-comcount">
        {comment_count} {comment_count === 1 ? "Comment " : "Comments "}||{" "}
        {votes} {votes === 1 || votes === -1 ? "Vote" : "Votes"}
      </h5>
    </article>
  );
};

export default ArticleCard;
