import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import CalculatorButtons from './components/CalculatorButtons'
import HistoryLog from './components/HistoryLog'
import UserProfile from './components/UserProfile'
import GraphingTool from './components/GraphingTool'

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
          <li>Basic arithmetic operations (addition, subtraction, multiplication, division)</li>
          <li>Scientific calculator functions (trigonometric, logarithmic, etc.)</li>
          <li>Graphing capabilities for visual representation of functions</li>
          <li>History log for previous calculations</li>
          <li>User profiles for personalized settings and analytics</li>
          <li>Collaboration tools to share calculations with other users</li>
          </ul>
        </div>
        <p>&copy; 2025 Calcinar. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App