import { Link, useNavigate } from "react-router-dom";

const ErrorPage = ({error, topicStr}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  let errorMsg = "";

  if (error === 404 && topicStr) {
    errorMsg = `OH DEAR! WE DON'T CURRENTLY HAVE ANY ARTICLES FOR ${topicStr}!`;
  } else if (error === 404) {
    errorMsg = "TERRIBLY SORRY!! WE COULD NOT FIND THAT ARTICLE!!";
  } else if (error === 400) {
    errorMsg = "HMMM...I'M AFRAID YOU'VE MADE A BAD REQUEST PAL!";
  } else if (error) {
    errorMsg = "OH DEAR! SOMETHING'S GONE WRONG!";
  } else {
    errorMsg = "Oh dear!! Look's like you've taken a wrong turn!";
  };

  return (
    <div className="Error-msg">
      <h4>{errorMsg}</h4>
      <Link to="/">Return to Homepage</Link>
      <p id="back-link" onClick={handleClick}>Return to previous page</p>
    </div>
  );
};

export default ErrorPage;
  
