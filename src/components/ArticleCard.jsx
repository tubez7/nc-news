import { Link } from "react-router-dom";

const ArticleCard = ({
  article_id,
  title,
  body,
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
    <article className="Article-card">
      <Link to={`/articles/${article_id}`}>
        <h3 className="Itemcard-title">{title}</h3>
      </Link>
      <Link to={`/topics/${topic}`}>
        <h4 className="Itemcard-topic">
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </h4>
      </Link>
      <Link to={`/api/users/${author}`}>
        <h4 className="Itemcard-author">{author}</h4>
      </Link>
      <h5 className="Itemcard-created-at">Posted: {creationDate}</h5>
      <p className="Itemcard-body">{body}</p>
      <h5 className="Itemcard-votes">{votes} Votes</h5>

      <h5 className="Itemcard-co-count">{comment_count} Comments </h5>
    </article>
  );
};

export default ArticleCard;
