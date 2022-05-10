import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import Suspenser from './components/Suspenser';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import defaultTheme from './themes/defaultTheme';

function App() {
    return (
        <ThemeProvider theme={defaultTheme} >
            <CssBaseline />
            <BrowserRouter>
                <React.Suspense fallback={<Suspenser />}>
                    <Switch>
                        <Route path='/console'>
                            <DashboardPage theme={defaultTheme} />
                        </Route>
                        <Route path='/' component={HomePage} />
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App