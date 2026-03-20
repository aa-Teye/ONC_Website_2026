import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import LiveStream from "./pages/LiveStream";
import Giving from "./pages/Giving";

function App() {
  return (
    /* The basename tells React to look for routes inside the /ONC_Website_2026/ folder */
    <Router basename="/ONC_Website_2026">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* This path="/" now correctly points to your landing page */}
            <Route path="/" element={<Home />} />
            <Route path="/live-stream" element={<LiveStream />} />
            <Route path="/giving" element={<Giving />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;