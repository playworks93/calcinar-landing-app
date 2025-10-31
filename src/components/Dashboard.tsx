import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'user_authentication_&_profiles' ? 'active' : ''}
          onClick={() => setActiveTab('user_authentication_&_profiles')}
        >
          User Authentication & Profiles
        </button>
        <button 
          className={activeTab === 'basic_&_advanced_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('basic_&_advanced_calculations')}
        >
          Basic & Advanced Calculations
        </button>
        <button 
          className={activeTab === 'analytics_dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('analytics_dashboard')}
        >
          Analytics Dashboard
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'user_authentication_&_profiles' && (
          <div className="tab-content">
            <h2>User Authentication & Profiles</h2>
            <p>Manage your user authentication & profiles here.</p>
          </div>
        )}

        {activeTab === 'basic_&_advanced_calculations' && (
          <div className="tab-content">
            <h2>Basic & Advanced Calculations</h2>
            <p>Manage your basic & advanced calculations here.</p>
          </div>
        )}

        {activeTab === 'analytics_dashboard' && (
          <div className="tab-content">
            <h2>Analytics Dashboard</h2>
            <p>Manage your analytics dashboard here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard