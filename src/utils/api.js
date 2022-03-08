import axios from "axios"

const api = axios.create({
    baseURL: "https://nc-news-example-seminar-3-1.herokuapp.com/api"
})


export function getArticles() {
    console.log("api triggered")
    return api.get("/articles").then(({data : {articles}}) => {
        console.log(articles, "data inside the api")
        return articles;
    })
}