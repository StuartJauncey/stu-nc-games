import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://stu-nc-games.herokuapp.com/api"
})

export const getCategories = () => {
  return gamesAPI
  .get("/categories")
  .then((res) => {
    return res.data.categories
  })
}

export const getReviews = (category) => {
  return gamesAPI
  .get("/reviews", {
    params: { category }
  })
  .then((res) => {
    return res.data.reviews
  })
}

export const getReviewsByCategory = (category) => {
  return gamesAPI
  .get(`/reviews/?category=${category}`)
  .then((res) => {
    return res.data.reviews
  })
}

export const getReviewById = (id) => {
  return gamesAPI
  .get(`/reviews/${id}`)
  .then((res) => {
    return res.data.review
  })
}

export const getCommentsByReviewId = (id) => {
  return gamesAPI
  .get(`/reviews/${id}/comments`)
  .then((res) => {
    return res.data.comments
  })
}

export const patchLikesByReviewId = (id, voteChange) => {
  return gamesAPI
  .patch(`/reviews/${id}`, { inc_votes: voteChange })
  .then((res) => {
    console.log(res);
    return res.data.review
  })
}
