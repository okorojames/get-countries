import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:name" element={<About />} />
          <Route path="/404" element={<Services />} />
          <Route path="/404:No-Page-Found" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
