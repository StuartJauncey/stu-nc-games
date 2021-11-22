import "./CategoriesSelect.css";
import { useEffect, useState } from "react";
import { getCategories } from "../utils";

const CategoriesSelect = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesReceived) => {
      setCategories(categoriesReceived);
    })
  }, []);

  return (
    <nav>
       <h2>Select a Category</h2>
       <ul className="categories">
        {categories.map(category => {
          return (
            <li key={category.slug} className="category">
              <button className="category-button">
                {category.slug}
              </button>
            </li>
          )
        })}
       </ul>
    </nav>
  )
}

export default CategoriesSelect;