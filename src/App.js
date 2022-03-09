import "./App.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/user-context";

import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage.jsx"
import Article from "./components/Article";
import TopicsList from "./components/TopicsList";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "Login To NC News",
    avatar_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/600px-Gull_portrait_ca_usa.jpg",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/topics" element={<TopicsList />} />
          {/* <Route path="/topics/:topic" element={<TopicsList />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
