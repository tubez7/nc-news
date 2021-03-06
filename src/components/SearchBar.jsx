export default function SearchBar({ setSortBy, setOrder, order }) {

  const selectSort = (e) => {
    setSortBy(e.target.value);
  };

  const selectOrder = (e) => {
    setOrder(e.target.value);
  };

  return (
    <nav className="Nav_Articles">
      <section className="Articles_sort">
        <label htmlFor="ArticleList">Sort by: </label>
        <select
          onChange={selectSort}
          className="select-by"
          id="article-categories"
          name="article-categories"
        >
          <option value="created_at">Date published</option>
          <option value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Total comments</option>
        </select>

        <div className="Radio-order">
          <label htmlFor="DESC">Desc</label>
          <input
            onChange={selectOrder}
            type="radio"
            name="sort"
            value="DESC"
            checked={order.includes("DESC")}
          ></input>
          <label htmlFor="ASC">Asc</label>
          <input
            onChange={selectOrder}
            type="radio"
            name="sort"
            value="ASC"
            checked={order.includes("ASC")}
          ></input>
        </div>
      </section>
    </nav>
  );
};


