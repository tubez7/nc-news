import "./App.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/user-context";

import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage.jsx";
import Article from "./components/Article";
import TopicsList from "./components/TopicsList";
import Users from "./components/Users";

function App() {

  const defaultUser = {
    username: "Login To NC News",
    avatarUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/600px-Gull_portrait_ca_usa.jpg"
  };

  const [loggedInUser, setLoggedInUser] = useState(defaultUser);
  const [loggedIn, setLoggedIn] = useState(false);

  const [topics, setTopics] = useState([]);
  

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Header />
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} defaultUser={defaultUser} />
        <Routes>
          <Route
            path="/"
            element={<Home topics={topics} setTopics={setTopics} />}
          />
         
          <Route
            path="/articles"
            element={<Home topics={topics} setTopics={setTopics} />}
          />
          <Route path="/articles/:article_id" element={<Article loggedIn={loggedIn} />} />
          <Route
            path="/topics"
            element={<TopicsList topics={topics} setTopics={setTopics} />}
          />
          <Route
            path="/topics/:topic"
            element={<Home topics={topics} setTopics={setTopics} />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/users" element={<Users setLoggedIn={setLoggedIn} />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
