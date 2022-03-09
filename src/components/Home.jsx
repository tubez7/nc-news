import { useState } from "react";

import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);

  return (
    <main>
      <SearchBar articles={articles} setArticles={setArticles} topics={topics} setTopics={setTopics} />
      <ArticleList articles={articles} setArticles={setArticles} topics={topics} setTopics={setTopics}/>
    </main>
  );
}
