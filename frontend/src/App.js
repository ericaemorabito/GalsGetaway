import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {

 

  return (
    <div className="App">
      Testing 
            <p className="title">Title</p>
            <p className="subtitle">Subtitle</p>
            <p className="text">text</p>
            <button className="button">Subtitle</button>
      <BrowserRouter>
        <div className="pages">
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
