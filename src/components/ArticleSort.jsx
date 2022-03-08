export default function ArticlesSort() {
  return (
    <nav className="Nav_Articles">
      <section className="Articles_sort">
        <label for="ArticleList">Select a category to sort by: </label>
        <select name="article_categories">
          <option value="created_at">Date created</option>
          <option value="article_id">Article ID</option>
          <option value="title">Title</option>
          <option value="body">Article contents</option>
          <option value="topic">Topic</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Number of comments</option>
        </select>
        <form>
          <input type="text" placeholder="Search topic..."></input>
        </form>
        <span>
          <text>Order By:</text>
          <input type="radio" name="sort" value="DESC" checked></input>
          <label for="sort1">Desc</label>
          <input type="radio" name="sort" value="ASC"></input>
          <label for="sort2">Asc</label>
        </span>
      </section>
    </nav>
  );
}
