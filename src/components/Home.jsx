// import { useParams } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import TopicsBar from "./TopicsBar";
import ArticleList from "./ArticleList";

export default function Home({topics, setTopics}) {

  // const {topic} = useParams();
  // console.log(topic, "topic inside homepage")
 
  const [selectedTopic, setSelectedTopic] = useState();
  

  return (
    <main>
      <SearchBar />
      <TopicsBar selectedTopic={selectedTopic} topics={topics} setTopics={setTopics}/>
      <ArticleList selectedTopic={selectedTopic} />
    </main>
  );
}
