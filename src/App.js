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
        <Title />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={`category`} element={<><CategoriesSelect /><Reviews /></>} />
          <Route path={`category/:category/`} element={<><CategoriesSelect /><Reviews /></>} />
          <Route path={`category/undefined/:sort_by`} element={<><CategoriesSelect /><Reviews /></>} />
          <Route path={`category/:category/:sort_by`} element={<><CategoriesSelect /><Reviews /></>} />
          <Route path={`/reviews/:review_id`} element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
