import { BrowserRouter, Routes, Route } from "react-router-dom";
import Story from "./pages/Story";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Footer from "./compenent/footer";
import Navbar from "./compenent/Navbar";
import Contact from "./pages/Contact";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/story" element={<Story />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Contact" element={<Contact />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;