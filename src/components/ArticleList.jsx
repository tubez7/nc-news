import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";

import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

export default function ArticleList({ order, sortBy }) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [error, setError] = useState(null);

  const topicStr = topic ? topic.toUpperCase() : "THAT TOPIC";

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getArticles(topic, sortBy, order)
      .then((articlesData) => {
        if (articlesData.length === 0) {
          setError(404);
          setIsLoading(false);
        } else {
          setArticles(articlesData);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err.response.status);
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);

  if (isLoading)
    return <h4 className="user-msg">PLEASE WAIT. ARTICLES LOADING....</h4>;

  if (error) return <ErrorPage error={error} topicStr={topicStr} />;

  return (
    <>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </>
  );
}
