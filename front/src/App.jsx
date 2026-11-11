
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import About from "./pages/about";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Pages */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Navigate to="/Home" replace />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* Dashboard Pages */}
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                {/* Unknown URL */}
                <Route path="*" element={<Navigate to="/Home" replace />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
