import { Link } from "react-router-dom";

export default function TopicSelect({ slug }) {
  return (
    <Link to={`/topics/${slug}`}>
      <button className="Topic-button">
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </button>
    </Link>
  );
}
