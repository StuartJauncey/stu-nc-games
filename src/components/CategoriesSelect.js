import "./CategoriesSelect.css";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/apiCalls";
import { Link } from "react-router-dom";
import categoryNameModifier from "../utils/functions/categoryNameModifier";

const CategoriesSelect = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
    .then((categoriesReceived) => {
      setCategories(categoriesReceived);
    })
  }, []);

  return (
    <nav className="navbar">
       <div className="categories-header">
       <h2>Select a Category</h2>
       <button className="all-category-button">
            <Link className="link" to={`/category/all`}>
              All
            </Link>
       </button>
       </div>
       <ul className="categories">
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