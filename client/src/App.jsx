import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAndRegView from './views/LoginAndRegView';
import PlaceOrder from './components/PlaceOrder';
import CandyDetails from './components/CandyDetails';
import CheckOut from './components/Checkout';
import MenuPage from './components/Candies';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import './App.css';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/candyshop" element={<LoginAndRegView />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/candies" element={<MenuPage />} />
        <Route path="/candy/:id" element={<CandyDetails />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;