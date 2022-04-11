import { UserContext } from "../contexts/user-context.js";
import { useEffect, useState, useContext } from "react";
import { getUsers } from "../utils/api.js";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setLoggedInUser } = useContext(UserContext);

  console.log("user context", UserContext);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersData) => {
      console.log(usersData);
      setUsers(usersData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <>
        <p>Please wait...User Profiles loading</p>
      </>
    );

  return (
    <div className="user_card">
      {users.map((user) => {
        return <p key={user.username}>{user.username}</p>;
      })}
    </div>
  );
}
