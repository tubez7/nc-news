import SearchBar from "./SearchBar";
import TopicsBar from "./TopicsBar";
import ArticleList from "./ArticleList";

export default function Home({ topics, setTopics }) {
  return (
    <main>
      <SearchBar />
      <TopicsBar topics={topics} setTopics={setTopics} />
      <ArticleList />
    </main>
  );
}
