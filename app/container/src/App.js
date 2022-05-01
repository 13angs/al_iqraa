import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App