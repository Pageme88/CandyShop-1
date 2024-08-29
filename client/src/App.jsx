import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAndRegView from './views/LoginAndRegView';
import PlaceOrder from './components/PlaceOrder';
import CandyDetails from './components/CandyDetails';
import CheckOut from './components/Checkout';
import MenuPage from './components/Candies';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import HomePageView from './views/HomePageView';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/candyshop" element={<LoginAndRegView />} />
        <Route path="/candyshop/home" element={<HomePageView />} />
        <Route path="/candyshop/placeorder" element={<PlaceOrder />} />
        <Route path="/candyshop/candies" element={<MenuPage />} />
        <Route path="/candyshop/candy/:id" element={<CandyDetails />} />
        <Route path="/candyshop/recipes" element={<Recipes />} />
        <Route path="/candyshop/recipes/:id" element={<RecipeDetails />} />
        <Route path="/candyshop/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;