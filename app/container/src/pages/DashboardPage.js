import React from 'react';
import DashboardApp from '../apps/DashboardApp';

function DashboardPage(props) {
    return (
        <div>
            <section>
                <DashboardApp {...props} />
            </section>
        </div>
    )
}

export default DashboardPage