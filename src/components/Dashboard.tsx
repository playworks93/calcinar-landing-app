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
          className={activeTab === 'user_authentication_&_onboarding' ? 'active' : ''}
          onClick={() => setActiveTab('user_authentication_&_onboarding')}
        >
          User Authentication & Onboarding
        </button>
        <button 
          className={activeTab === 'advanced_calculation_capabilities' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_calculation_capabilities')}
        >
          Advanced Calculation Capabilities
        </button>
        <button 
          className={activeTab === 'data_analytics_and_visualization' ? 'active' : ''}
          onClick={() => setActiveTab('data_analytics_and_visualization')}
        >
          Data Analytics And Visualization
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

        {activeTab === 'user_authentication_&_onboarding' && (
          <div className="tab-content">
            <h2>User Authentication & Onboarding</h2>
            <p>Manage your user authentication & onboarding here.</p>
          </div>
        )}

        {activeTab === 'advanced_calculation_capabilities' && (
          <div className="tab-content">
            <h2>Advanced Calculation Capabilities</h2>
            <p>Manage your advanced calculation capabilities here.</p>
          </div>
        )}

        {activeTab === 'data_analytics_and_visualization' && (
          <div className="tab-content">
            <h2>Data Analytics and Visualization</h2>
            <p>Manage your data analytics and visualization here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard