import axios from "axios";

const api = axios.create({
  baseURL: "https://richard-nc-news.herokuapp.com/api",
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
};

export function getArticleById(articleId) {
  return api
  .get(`/articles/${articleId}`)
  .then(({ data: { article } }) => {
    return article;
  });
};

export function getTopics() {
  return api
  .get("/topics")
  .then(({ data: { topics } }) => {
    return topics;
  });
};

export function updateVotes(articleId, voteChange) {
  return api
    .patch(`/articles/${articleId}`, { inc_votes: voteChange })
    .then(({ data: { article } }) => {
      return article;
    });
};

export function getComments(articleId, sort, order) {
  return api
    .get(`/articles/${articleId}/comments`, {
      params: {
        sort_by: sort,
        order: order,
      },
    })
    .then(({ data: { comments } }) => {
      return comments;
    });
};
      
export function postComment(articleId, newComment) {
  return api
    .post(`/articles/${articleId}/comments`, newComment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export function deleteComment(commentId) {
  return api
  .delete(`/comments/${commentId}`).then(() => {
    console.log(`comment ${commentId} deleted`);
  });
};
  

