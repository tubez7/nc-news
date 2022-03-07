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
  return (
    <article className="Article-card">
      <Link to={`/articles/${article_id}`}>
        <h3 className="Itemcard-title">{title}</h3>
      </Link>
      <Link to={`/topics/${topic}`}>
        <h4 className="Itemcard-topic">{topic.charAt(0).toUpperCase() + topic.slice(1)}</h4>
      </Link>
      <h4 className="Itemcard-author">Posted By: {author}</h4>
      <p className="Itemcard-body">{body}</p>
      <h6 className="Itemcard-votes">Votes: {votes}</h6>
      <h6 className="Itemcard-created-at">Date Posted: {created_at}</h6>
      <h6 className="Itemcard-co-count">Comments: {comment_count}</h6>
    </article>
  );
};

export default ArticleCard;


