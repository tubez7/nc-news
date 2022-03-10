import { useState } from "react";

import SearchBar from "./SearchBar";
import TopicsBar from "./TopicsBar";
import ArticleList from "./ArticleList";

export default function Home({topics, setTopics}) {
  const [articles, setArticles] = useState([]);
  

  return (
    <main>
      <SearchBar />
      <TopicsBar topics={topics} setTopics={setTopics}/>
      <ArticleList articles={articles} setArticles={setArticles} topics={topics} setTopics={setTopics}/>
    </main>
  );
}
