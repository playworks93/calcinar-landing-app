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
          className={activeTab === 'basic_arithmetic_operations_(addition,_subtraction,_multiplication,_division)' ? 'active' : ''}
          onClick={() => setActiveTab('basic_arithmetic_operations_(addition,_subtraction,_multiplication,_division)')}
        >
          Basic Arithmetic Operations (Addition, Subtraction, Multiplication, Division)
        </button>
        <button 
          className={activeTab === 'advanced_calculations_(square_roots,_exponents,_logarithms)' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_calculations_(square_roots,_exponents,_logarithms)')}
        >
          Advanced Calculations (Square Roots, Exponents, Logarithms)
        </button>
        <button 
          className={activeTab === 'data_visualization_(graphs_and_charts_for_insights)' ? 'active' : ''}
          onClick={() => setActiveTab('data_visualization_(graphs_and_charts_for_insights)')}
        >
          Data Visualization (Graphs And Charts For Insights)
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

        {activeTab === 'basic_arithmetic_operations_(addition,_subtraction,_multiplication,_division)' && (
          <div className="tab-content">
            <h2>Basic Arithmetic Operations (Addition, Subtraction, Multiplication, Division)</h2>
            <p>Manage your basic arithmetic operations (addition, subtraction, multiplication, division) here.</p>
          </div>
        )}

        {activeTab === 'advanced_calculations_(square_roots,_exponents,_logarithms)' && (
          <div className="tab-content">
            <h2>Advanced Calculations (Square Roots, Exponents, Logarithms)</h2>
            <p>Manage your advanced calculations (square roots, exponents, logarithms) here.</p>
          </div>
        )}

        {activeTab === 'data_visualization_(graphs_and_charts_for_insights)' && (
          <div className="tab-content">
            <h2>Data Visualization (Graphs and Charts for Insights)</h2>
            <p>Manage your data visualization (graphs and charts for insights) here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard