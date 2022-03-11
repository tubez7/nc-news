import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-seminar-3-1.herokuapp.com/api",
});

export function getArticles(topic, sort, order) {
  return api
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sort,
        order: order,
      },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
}

export function getArticleById(articleId) {
  console.log(articleId, "api triggered get article by ID");
  return api.get(`/articles/${articleId}`).then(({ data: { article } }) => {
    console.log(article, "data in API response");
    return article;
  });
}

export function getTopics() {
  return api.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
}

export function updateVotes(articleId, voteChange) {
  console.log(articleId, voteChange, "inside API patch");
  return api
    .patch(`/articles/${articleId}`, { vote_inc: voteChange })
    .then(({ data: { article } }) => {
      console.log(article);
    });
}

export function getComments(articleId, sort, order) {
  console.log("comments api triggered")
  return api
    .get(`/articles/${articleId}/comments`, {
      params: {
        sort_by: sort,
        order: order,
      },
    })
    .then(({data: {comments}}) => {
      console.log("comments in api data")
      return comments;
    });
}
