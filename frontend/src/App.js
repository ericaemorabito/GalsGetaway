import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Header from './components/Header'
// pages
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import CreateTrip from "./pages/CreateTripPage";
import ViewTrip from './pages/ViewTripPage';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className="pages">
        <Routes>
            <Route path='/welcome' element={<LandingPage/>}/>
            <Route path="/" element={<HomePage />} />
            <Route path='/create' element={<CreateTrip />} />
            <Route path='/trip/:id' element={<ViewTrip />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
