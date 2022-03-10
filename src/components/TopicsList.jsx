import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

export default function TopicsList({ setTopics, topics }) {
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
    <article>
      {topics.map((topic) => {
        return (
          <div key={topic.slug}>
            <h4>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</h4>
            <p>{topic.description}</p>
          </div>
        );
      })}
    </article>
  );
}