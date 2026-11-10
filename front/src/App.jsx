import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Story from "./pages/Story";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Footer from "./compenent/footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/story" element={<Story />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;