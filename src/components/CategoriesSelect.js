import "./CategoriesSelect.css";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/apiCalls";
import { Link } from "react-router-dom";
import categoryNameModifier from "../utils/functions/categoryNameModifier";

const CategoriesSelect = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesReceived) => {
      setCategories(categoriesReceived);
    })
  }, []);

  return (
    <nav className="navbar">
       <h2>Select a Category</h2>
       <ul className="categories">
          <button className="category-button">
            <Link to={`/category/all`}>
              All
            </Link>
          </button>
          {categories.map(category => {
            return (
            <li key={category.slug}>
              <button className="category-button">
                <Link to={`/category/${category.slug}`}>
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