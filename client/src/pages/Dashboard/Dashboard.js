import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-4">Dashboard</h1>
                <p className="lead mb-3">Welcome</p>
                <a href="/users/logout" class="btn btn-secondary">Logout</a>
            </div>
        )
    }
}



export default Dashboard;