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

  if (isLoading) return <h4 className="user-msg">PLEASE WAIT. TOPICS LOADING....</h4>;

  return (
    <div className="Topic-selector">
      {topics.map((topic) => {
        return <TopicSelect key={topic.slug} {...topic} />;
      })}
    </div>
  );
}
