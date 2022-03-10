import { Link } from "react-router-dom";

export default function TopicSelect({ slug }) {
  return (
    <div className="Topic-buttons">
      <Link to={`topics/${slug}`}>
        <button className="Topic-button">
          {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </button>
      </Link>
    </div>
  );
}
