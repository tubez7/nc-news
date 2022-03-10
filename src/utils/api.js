import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-seminar-3-1.herokuapp.com/api",
});

export function getArticles(topic) {
  if (topic !== undefined) {
    return api.get("/articles", {
      params: {
        topic: `${topic}`,
      }
    }).then(({data: {articles}}) => {
      return articles;
    })
  } else {
    return api.get("/articles").then(({data: {articles}}) => {
      return articles;
    })
  }
}


export function getArticleById(articleId) {
  console.log(articleId, "api triggered get article by ID");
  return api.get(`/articles/${articleId}`)
  .then(({ data: { article } }) => {
    console.log(article, "data in API response");
    return article;
  });
}

export function getTopics() {
  return api.get("/topics").then(({data: {topics}}) => {
    return topics;
  })
}




