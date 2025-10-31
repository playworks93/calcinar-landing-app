import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthenticationComponent from './components/AuthenticationComponent'
import CalculatorComponent from './components/CalculatorComponent'
import AnalyticsDashboardComponent from './components/AnalyticsDashboardComponent'
import CollaborationWorkspaceComponent from './components/CollaborationWorkspaceComponent'
import HistoryComponent from './components/HistoryComponent'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Calcinar</h1>
          <p className="tagline">Calculating the Future, Together.</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Authentication & Onboarding</li>
          <li>Advanced Calculation Capabilities</li>
          <li>Data Analytics and Visualization</li>
          <li>Collaborative Calculation Workspace</li>
          <li>History and Favorites Save Feature</li>
          <li>Real-time Calculation Sharing</li>
          </ul>
        </div>
        <p>&copy; 2025 Calcinar. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App