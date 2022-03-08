import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user-context";

export default function Nav() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <nav className="Nav_Bar">
      <div className="Nav_Bar_Items">
        <div className="User_Icon">
          <img
            src={loggedInUser.avatar_url}
            className="Avatar_Image"
            alt="Profile for the logged-in user"
          />
          <p>{loggedInUser.username}</p>
        </div>
        <div className="Nav-buttons">
        <Link to="/">
          <button className="Nav_Link">Articles</button>
        </Link>
        <Link to={`/users/${loggedInUser.username}`}>
          <button className="Nav_Link">User Profile</button>
        </Link>
        <Link to="/topics">
          <button  className="Nav_Link">Topics</button>
        </Link>
        </div>
      </div>
    </nav>
  );
}

//conditional logic with user profile? IF LOGGED IN USERNAME IS NOT THE DEFAULT LINK TO USERPROFILE PAGE NOT THE LOGIN PAGE.
