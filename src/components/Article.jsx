import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";

export default function Article() {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id: articleId } = useParams();
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    return getArticleById(articleId)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err.response.status, "err in article catch block");
        setError(err.response.status);
        console.log(error, "error state in catch");
        setIsLoading(false);
        console.log(error, "error state in catch");
      });
  }, [articleId]);

  if (isLoading) return <h4>PLEASE WAIT. ARTICLE LOADING....</h4>;

  if (error === 400)
    return (
      <>
        <h4>HMMM...I'M AFRAID YOU'VE MADE A BAD REQUEST PAL!</h4>
        <Link to="/">Return to Homepage</Link>
      </>
    );

  if (error === 404)
    return (
      <>
        <h4>TERRIBLY SORRY!! WE COULD NOT FIND THAT ARTICLE!!</h4>
        <Link to="/">Return to Homepage</Link>
      </>
    );

    if (error)
    return (
      <>
        <h4>
          OH DEAR! SOMETHING'S GONE WRONG!
        </h4>
        <Link to="/">Return to Homepage</Link>
      </>
    );

  return <SingleArticle {...article} />;
}
