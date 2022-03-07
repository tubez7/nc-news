import { useState } from "react";


import ArticlesSort from "./ArticleSort";
import ArticleList from "./ArticleList";


export default function Home() {
    const [articles, setArticles] = useState([]);

  return (

    <main>

    <ArticlesSort articles={articles} setArticles={setArticles}/>
    <ArticleList articles={articles} setArticles={setArticles}/>

    </main>
    
    
  );
}
