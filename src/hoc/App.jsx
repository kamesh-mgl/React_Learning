import React from 'react'
import withAuth from './withAuth'
import Dashboard from './Dashboard'

const ProtectedDashboard = withAuth(Dashboard);

const App = () => {
    return (
        <div>
            <ProtectedDashboard name="rahul" />
        </div>
    )
}

export default App