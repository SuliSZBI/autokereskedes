import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Autok from './pages/Autok/Autok';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/autok"
                    element={<Autok />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
