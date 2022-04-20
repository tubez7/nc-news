import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";

import SingleArticle from "./SingleArticle";
import ErrorPage from "./ErrorPage";

export default function Article({ loggedIn }) {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id: articleId } = useParams();
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(articleId)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.status);
        setIsLoading(false);
      });
  }, [articleId]);

  if (isLoading)
    return <h4 className="user-msg">PLEASE WAIT. ARTICLE LOADING....</h4>;

  if (error) return <ErrorPage error={error} />;

  return <SingleArticle {...article} loggedIn={loggedIn} />;
}