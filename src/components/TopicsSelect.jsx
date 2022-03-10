export default function TopicSelect({ slug, selectedTopic, setSelectedTopic }) {
  return (
    <div className="Topic-buttons">
      <button className="Topic-button">
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </button>
    </div>
  );
}

//onClick setSelectedTopic
