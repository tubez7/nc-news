import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user-context";

export default function Nav() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <nav className="Nav_Bar">
      <div className="User_Icon">
        {loggedInUser.username}
        <img
          src={loggedInUser.avatar_url}
          className="Avatar_Image"
          alt="Profile for the logged-in user"
          />
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
      
    </nav>
  );
}
          

//conditional logic with user profile? IF LOGGED IN USERNAME IS NOT THE DEFAULT LINK TO USERPROFILE PAGE NOT THE LOGIN PAGE.