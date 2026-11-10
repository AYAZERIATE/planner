import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Story from "./pages/Story";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Pages b Navbar w Footer */}
                <Route element={<MainLayout />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;