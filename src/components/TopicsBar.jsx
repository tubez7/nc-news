import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import TopicSelect from "./TopicsSelect";

export default function TopicsBar({ selectedTopic, setTopic, setTopics, topics}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    return getTopics().then((topicsData) => {
      setTopics(topicsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h4>PLEASE WAIT. TOPICS LOADING....</h4>;

  return (
    <article className="Topic-selector">
      {topics.map((topic) => {
        return (
          <TopicSelect key={topic.slug} {...topic} selectedTopic={selectedTopic} setSelectedTopic={setTopic} />
        );
      })}
    </article>
  );
}
