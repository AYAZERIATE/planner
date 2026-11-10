
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Story from "./pages/Story";
import About from "./pages/about";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/story" element={<Story />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
