import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
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
          <li>User Authentication & Profiles</li>
          <li>Basic & Advanced Calculations</li>
          <li>Analytics Dashboard</li>
          <li>Real-time Collaboration Workspace</li>
          <li>History & Recents Tracking</li>
          <li>Customizable UI Themes</li>
          </ul>
        </div>
        <p>&copy; 2025 Calcinar. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App