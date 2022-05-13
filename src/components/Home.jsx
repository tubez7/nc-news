import { useState } from "react";

import SearchBar from "./SearchBar";
import TopicsBar from "./TopicsBar";
import ArticleList from "./ArticleList";

export default function Home({ topics, setTopics }) {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  return (
    <main>
      <SearchBar order={order} setSortBy={setSortBy} setOrder={setOrder} />
      <TopicsBar topics={topics} setTopics={setTopics} />
      <ArticleList order={order} sortBy={sortBy} />
    </main>
  );
}