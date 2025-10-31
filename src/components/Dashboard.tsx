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
          className={activeTab === 'scientific_calculator_functions_(trigonometric,_logarithmic,_etc.)' ? 'active' : ''}
          onClick={() => setActiveTab('scientific_calculator_functions_(trigonometric,_logarithmic,_etc.)')}
        >
          Scientific Calculator Functions (Trigonometric, Logarithmic, Etc.)
        </button>
        <button 
          className={activeTab === 'graphing_capabilities_for_visual_representation_of_functions' ? 'active' : ''}
          onClick={() => setActiveTab('graphing_capabilities_for_visual_representation_of_functions')}
        >
          Graphing Capabilities For Visual Representation Of Functions
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
            <h2>Basic arithmetic operations (addition, subtraction, multiplication, division)</h2>
            <p>Manage your basic arithmetic operations (addition, subtraction, multiplication, division) here.</p>
          </div>
        )}

        {activeTab === 'scientific_calculator_functions_(trigonometric,_logarithmic,_etc.)' && (
          <div className="tab-content">
            <h2>Scientific calculator functions (trigonometric, logarithmic, etc.)</h2>
            <p>Manage your scientific calculator functions (trigonometric, logarithmic, etc.) here.</p>
          </div>
        )}

        {activeTab === 'graphing_capabilities_for_visual_representation_of_functions' && (
          <div className="tab-content">
            <h2>Graphing capabilities for visual representation of functions</h2>
            <p>Manage your graphing capabilities for visual representation of functions here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard