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

  console.log(categories);

  return (
    <main>
       <h2>Select a Category</h2>
       <ul className="categories">
        {categories.map(category => {
          return (
            <li key={category.slug} className="category">
              {category.slug}
            </li>
          )
        })}
       </ul>
    </main>
  )
}

export default CategoriesSelect;