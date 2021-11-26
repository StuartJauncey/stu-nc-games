import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import HomePage from './components/HomePage';
import Reviews from "./components/Reviews";
import CategoriesSelect from './components/CategoriesSelect';
import SingleReview from './components/SingleReview';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={`reviews`} element={<><Title /><CategoriesSelect /><Reviews /></>} />
          <Route path={`reviews/category/:category/`} element={<><Title /><CategoriesSelect /><Reviews /></>} />
          <Route path={`reviews/category/undefined/:sort_by`} element={<><Title /><CategoriesSelect /><Reviews /></>} />
          <Route path={`reviews/category/:category/:sort_by`} element={<><Title /><CategoriesSelect /><Reviews /></>} />
          <Route path={`/reviews/:review_id`} element={<><Title /><SingleReview /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
