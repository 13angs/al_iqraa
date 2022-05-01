import React from 'react';
import { mount } from 'dashboard/DashboardApp';

function DashboardApp() {
    const appRef = React.useRef(null);

    React.useEffect(() => {
        mount(appRef.current)
    })
    return (
        <div ref={appRef} />
    )
}

export default DashboardApp