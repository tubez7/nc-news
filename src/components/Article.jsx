import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";

export default function Article({loggedIn}) {
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

  if (isLoading) return <h4 className="user-msg">PLEASE WAIT. ARTICLE LOADING....</h4>;

  if (error === 400)
    return (
      <>
        <h4 className="user-msg">HMMM...I'M AFRAID YOU'VE MADE A BAD REQUEST PAL!</h4>
        <Link className="user-msg" to="/">Return to Homepage</Link>
      </>
    );

  if (error === 404)
    return (
      <>
        <h4 className="user-msg">TERRIBLY SORRY!! WE COULD NOT FIND THAT ARTICLE!!</h4>
        <Link className="user-msg" to="/">Return to Homepage</Link>
      </>
    );

  if (error)
    return (
      <>
        <h4 className="user-msg">OH DEAR! SOMETHING'S GONE WRONG!</h4>
        <Link className="user-msg" to="/">Return to Homepage</Link>
      </>
    );

  return <SingleArticle {...article} loggedIn={loggedIn} />;
}

