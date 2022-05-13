import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user-context";

export default function Nav({ loggedIn, setLoggedIn, defaultUser }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoggedInUser(defaultUser);
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="Nav_Bar">
      <div className="User_Icon">
        <img
          src={loggedInUser.avatarUrl}
          className="Avatar_Image"
          alt="Profile for the logged-in user"
        />
        {loggedIn && (
          <Link to={`/users/${loggedInUser.username}`}>
            <p className="user-link">{loggedInUser.username}</p>
          </Link>
        )}
        {!loggedIn && (
          <Link to="/users">
            <p className="user-link">{loggedInUser.username}</p>
          </Link>
        )}
      </div>
      {loggedIn && (
        <p className="logout" onClick={handleClick}>
          Logout
        </p>
      )}
      <div className="Nav-buttons">
        <Link to="/articles">
          <button className="Nav_Link">Articles</button>
        </Link>
        <Link to={"/users"}>
          <button className="Nav_Link">User Profiles</button>
        </Link>
        <Link to="/topics">
          <button className="Nav_Link">Topics</button>
        </Link>
      </div>
    </nav>
  );
}