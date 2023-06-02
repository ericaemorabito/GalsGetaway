import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Header from './components/Header'
// pages
import HomePage from "./pages/HomePage";
// import LandingPage from "./pages/LandingPage";
import CreateTrip from "./pages/CreateTrip";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className="pages">
        <Routes>
            {/* <Route path='/' element={<LandingPage/>}/> */}
            <Route path="/" element={<HomePage />} />
            <Route path='/create' element={<CreateTrip />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
