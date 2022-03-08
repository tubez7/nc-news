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
        <Link to="/" className="Nav_Link">
          <button>Home</button>
        </Link>
        <Link to="/topics" className="Nav_Link">
          <button>Topics</button>
        </Link>
        <Link to="/user" className="Nav_Link">
          <button>User Profiles</button>
        </Link>
      </div>
    </nav>
  );
}

//conditional logic with user profile? IF LOGGED IN USERNAME IS NOT THE DEFAULT LINK TO USERPROFILE PAGE NOT THE LOGIN PAGE.
