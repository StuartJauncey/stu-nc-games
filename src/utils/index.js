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
  .catch((err) => {
    console.log(err);
  })
}

export const getReviews = () => {
  return gamesAPI
  .get("/reviews")
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