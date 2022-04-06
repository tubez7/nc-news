export default function SearchBar() {
  return (
    <nav className="Nav_Articles">
      <section className="Articles_sort">
        <label for="ArticleList">Sort by: </label>
        <select className="select-by" id="article-categories" name="article-categories">
          <option value="created_at">Date created</option>
          <option value="article_id">Article ID</option>
          <option value="title">Title</option>
          <option value="body">Article contents</option>
          <option value="topic">Topic</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Number of comments</option>
        </select>
        
        <div className="Radio-order">
          <label for="DESC">Desc</label>
          <input type="radio" name="sort" value="DESC" checked></input>
          <label for="ASC">Asc</label>
          <input type="radio" name="sort" value="ASC"></input>
        </div>
      </section>
    </nav>
  );
}
