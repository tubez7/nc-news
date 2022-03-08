import { useState } from "react";

import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";

export default function Home() {
  const [articles, setArticles] = useState([]);

  return (
    <main>
      <SearchBar articles={articles} setArticles={setArticles} />
      <ArticleList articles={articles} setArticles={setArticles} />
    </main>
  );
}
