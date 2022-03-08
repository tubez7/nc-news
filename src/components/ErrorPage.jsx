import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="Error-msg">
      <h4>Oh dear!! Look's like you've taken a wrong turn!</h4>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

export default ErrorPage;
