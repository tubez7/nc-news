import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function TopicsList({ setTopics, topics }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    return getTopics().then((topicsData) => {
      setTopics(topicsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <div div className="load-block">
        <p className="user-msg">PLEASE WAIT. TOPICS LOADING....</p>
        <CircularProgress sx={{ color: "#97D4BF" }} />
      </div>
    );

  return (
    <div className="topics-block">
      {topics.map((topic) => {
        return (
          <ul>
            <li className={`${topic.slug}`} key={topic.slug}>
              <Link to={`/topics/${topic.slug}`}>
                <h4>
                  {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                </h4>
              </Link>
              <p>{topic.description}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
