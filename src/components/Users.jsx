import { useEffect, useState } from "react";
import { getUsers } from "../utils/api.js";

import UserCard from "./UserCard.jsx";

export default function Users({setLoggedIn}) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersData) => {
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
    <>
      <h3>NC News Registered Users</h3>
      <div className="users-block">
        {users.map((user) => {
          return <UserCard key={user.username} {...user} setLoggedIn={setLoggedIn} />;
        })}
      </div>
    </>
  );
}
