import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// send or interact to container 
// through this function
const mount = (el, { theme }) => {
    const root = createRoot(el);
    root.render(<App theme={theme} />)
}


if (process.env.NODE_ENV === 'development') {
    const container = document.getElementById('_dashboard');
    if (container) {
        mount(container);
    }
}

export { mount }