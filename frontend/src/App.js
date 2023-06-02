import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Header from './components/Header'
// pages
import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className="pages">
        <Routes>
            {/* <Route path='/' element={<LandingPage/>}/> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
