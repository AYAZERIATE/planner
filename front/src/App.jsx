
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Story from "./pages/Story";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Pages with Navbar and Footer */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Navigate to="/Home" replace />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* Dashboard without Navbar and Footer */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Unknown routes */}
                <Route path="*" element={<Navigate to="/Home" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
