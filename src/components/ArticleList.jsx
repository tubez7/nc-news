import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList({selectedTopic}) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    return getArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h4>PLEASE WAIT. ARTICLES LOADING....</h4>;

  return (
    <article>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </article>
  );
}

//invoke getArticles with selectedTopic which will run a query.