import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Reviews from "./components/Reviews";
import CategoriesSelect from './components/CategoriesSelect';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" element={<div><CategoriesSelect /><Reviews /></div>} />
          <Route path="/categories/:category/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
