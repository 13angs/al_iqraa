import React from 'react';
import Dashboard, {
    DashboardDrawer,
    DashboardAppbar,
    DashboardContent,
} from '../components/Dashboard';

function DashboardPage({ children }) {
    return (
        <Dashboard>
            <DashboardAppbar />

            <div style={{ display: 'flex' }}>
                <DashboardDrawer />
                {/* all the pages goes here */}
                <DashboardContent>
                    {children}
                </DashboardContent>
            </div>
        </Dashboard>
    )
}

export default DashboardPage