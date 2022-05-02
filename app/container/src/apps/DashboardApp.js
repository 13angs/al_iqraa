import React from 'react';
import { mount } from 'dashboard/DashboardApp';

function DashboardApp({ theme }) {
    const appRef = React.useRef(null);

    React.useEffect(() => {
        mount(appRef.current, { theme })
    })
    return (
        <div ref={appRef} />
    )
}

export default DashboardApp