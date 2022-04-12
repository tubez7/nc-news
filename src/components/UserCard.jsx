import { useContext } from "react";
import { UserContext } from "../contexts/user-context";

export default function UserCard({
  username,
  avatar_url: avatarUrl,
  setLoggedIn,
}) {
  const { setLoggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser({ username, avatarUrl });
    setLoggedIn(true);
  };
  
  return (
    <div className="user-card">
      <p className="login-user" onClick={handleClick}>
        Login as<br/>{username}
      </p>
      <img
        src={avatarUrl}
        alt="the avatar for the user"
        className="user-avatar"
      />
    </div>
  );
}
