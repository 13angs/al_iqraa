import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Suspenser from './components/Suspenser';
import ProviderTheme from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';


// lazy import
import BlogPage from './pages/BlogPage';

function App({ theme }) {
    return (
        <ProviderTheme theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <React.Suspense fallback={<Suspenser />}>
                    <Switch>
                        <Route path='/dashboard'>
                            <DashboardPage>
                                <Route path="/dashboard/blogs" component={BlogPage} />
                            </DashboardPage>
                        </Route>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </ProviderTheme>
    )
}

export default App