import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAndRegView from './views/LoginAndRegView';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/candyshop" element={<LoginAndRegView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;