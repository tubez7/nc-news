import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ArticleList({ order, sortBy }) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getArticles(topic, sortBy, order)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.status);
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);

  if (isLoading) return <h4>PLEASE WAIT. ARTICLES LOADING....</h4>;

  if (error === 404)
    return (
      <>
        <h4>
          OH DEAR! WE DON'T CURRENTLY HAVE ANY ARTICLES FOR{" "}
          {topic.toUpperCase()}
        </h4>
        <Link to="/">Return to Homepage</Link>
      </>
    );

  if (error)
    return (
      <>
        <h4>OH DEAR! SOMETHING'S GONE WRONG!</h4>
        <Link to="/">Return to Homepage</Link>
      </>
    );

  return (
    <article>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </article>
  );
}

