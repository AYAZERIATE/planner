import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// pages dyal site (MainLayout)
import Home from "./pages/Home";
import About from "./pages/about";
import Story from "./pages/Story";
import NewArrivals from "./pages/NewArrivals";
import Contact from "./pages/Contact";
import Enterprise from "./pages/Enterprise";
import StartUp from "./pages/StartUp";

// pages dyal dashboard (DashboardLayout)
import Courses from "./pages/Courses";
import Notes from "./pages/Notes";
import Schedules from "./pages/Schedules";
import Goals from "./pages/Goals";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Setting";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* Site pages */}
                <Route element={<MainLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/new-arrivals" element={<NewArrivals />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/start-up" element={<StartUp />} />
                </Route>

                {/* Dashboard pages */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Navigate to="courses" replace />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="notes" element={<Notes />} />
                    <Route path="schedules" element={<Schedules />} />
                    <Route path="goals" element={<Goals />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
