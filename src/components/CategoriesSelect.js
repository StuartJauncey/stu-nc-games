import "./CategoriesSelect.css";
import { useEffect, useState } from "react";
import { getCategories } from "../utils";
import { Link } from "react-router-dom";

const CategoriesSelect = ({ setCategorySelected }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesReceived) => {
      setCategories(categoriesReceived);
    })
  }, []);

  const categoryNameModifier = (category) => {
    const name = category;
    const nameArr = name.split("-");
    const capitalizedArr = nameArr.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return capitalizedArr.join(" ");
  }

  return (
    <nav className="navbar">
       <h2>Select a Category</h2>
       <ul className="categories">
        {categories.map(category => {
          return (
            <li key={category.slug}>
              <button className="category-button">
                <Link to={`/category/${category.slug}`}
                  onClick={() => {
                    setCategorySelected(category.slug);
                  }}>
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