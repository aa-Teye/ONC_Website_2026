import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import LiveStream from "./pages/LiveStream";
import Giving from "./pages/Giving";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<LiveStream />} />
            <Route path="/give" element={<Giving />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
