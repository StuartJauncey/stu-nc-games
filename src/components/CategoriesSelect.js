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

  return (
    <nav className="navbar">
       <h2>Select a Category</h2>
       <ul className="categories">
        {categories.map(category => {
          return (
            <li key={category.slug} className="category">
              <Link to={`/category/${category.slug}`} className="category-button"
                    onClick={() => {
                      setCategorySelected(category.slug);
                    }}>
                {category.slug}
              </Link>
            </li>
          )
        })}
       </ul>
    </nav>
  )
}

export default CategoriesSelect;