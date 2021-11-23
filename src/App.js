import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Reviews from "./components/Reviews";
import CategoriesSelect from './components/CategoriesSelect';
import SingleReview from './components/SingleReview';
import { useState } from 'react';


function App() {

  const [categorySelected, setCategorySelected] = useState("all");

  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" element={<CategoriesSelect setCategorySelected={setCategorySelected}/>} />
          <Route path={`category/${categorySelected}`} element={<><CategoriesSelect setCategorySelected={setCategorySelected}/><Reviews categorySelected={categorySelected}/></>} />
          <Route path={`/reviews/:review_id`} element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
