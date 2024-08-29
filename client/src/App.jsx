import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAndRegView from './views/LoginAndRegView';
import HomePageView from './views/HomePageView';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/candyshop" element={<HomePageView />} />
        <Route path="/candyshop/auth" element={<LoginAndRegView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;