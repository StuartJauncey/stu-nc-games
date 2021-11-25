import "./CategoriesSelect.css";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/apiCalls";
import { Link } from "react-router-dom";
import categoryNameModifier from "../utils/functions/categoryNameModifier";

const CategoriesSelect = () => {

  const [categories, setCategories] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
    .then((categoriesReceived) => {
      setError(false);
      setLoading(false);
      setCategories(categoriesReceived);
    })
    .catch((err) => {
      if (err.response.status === 400) {
        setError("Category does not exist!");
      } else {
        setError("Unknown failure.")
      }
    })
  }, []);

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>{isError}</h2>

  return (
    <nav className="navbar">
       <h2>Select a Category</h2>
       <ul className="categories">
       <button className="all-category-button">
            <Link className="link" to={`/category`}>
              All
            </Link>
       </button>
          {categories.map(category => {
            return (
            <li key={category.slug}>
              <button className="category-button">
                <Link className="link" to={`/category/${category.slug}`}>
                  {categoryNameModifier(category.slug)}
                </Link>
              </button>
            </li>
          )
        })}
       </ul>
    </nav>
  )
}

export default CategoriesSelect;