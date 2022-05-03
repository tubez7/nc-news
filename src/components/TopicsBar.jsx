import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import TopicSelect from "./TopicsSelect";

export default function TopicsBar({ topics, setTopics }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topicsData) => {
      setTopics(topicsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p className="user-msg">PLEASE WAIT. TOPICS LOADING....</p>;

  return (
    <div className="Topic-buttons">
      {topics.map((topic) => {
        return <TopicSelect key={topic.slug} {...topic} />;
      })}
    </div>
  );
}
