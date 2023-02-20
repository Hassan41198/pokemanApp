import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
