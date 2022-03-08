import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import SingleArticle from "./SingleArticle";

export default function Article() {
  const [isLoading, setIsLoading] = useState(true);

  const { article_id: articleId } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    return getArticleById(articleId).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [articleId]);

  if (isLoading) return <h4>PLEASE WAIT. ARTICLE LOADING....</h4>;

  return <SingleArticle {...article} />;
}
