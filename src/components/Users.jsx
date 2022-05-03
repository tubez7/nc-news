import { useEffect, useState } from "react";
import { getUsers } from "../utils/api.js";
import CircularProgress from "@mui/material/CircularProgress";

import UserCard from "./UserCard.jsx";

export default function Users({ setLoggedIn }) {
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
      <div className="load-block">
        <p className="profile-load">Please wait...User Profiles loading</p>
        <CircularProgress sx={{ color: "#97D4BF" }} />
      </div>
    );

  return (
    <>
      <h3 className="users-head">NC News Registered Users</h3>
      <div className="users-block">
        {users.map((user) => {
          return (
            <UserCard key={user.username} {...user} setLoggedIn={setLoggedIn} />
          );
        })}
      </div>
    </>
  );
}