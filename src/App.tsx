import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import CalculatorButtons from './components/CalculatorButtons'
import HistoryLog from './components/HistoryLog'
import DataVisualization from './components/DataVisualization'
import UserSettings from './components/UserSettings'

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
          <li>Basic Arithmetic Operations (Addition, Subtraction, Multiplication, Division)</li>
          <li>Advanced Calculations (Square Roots, Exponents, Logarithms)</li>
          <li>Data Visualization (Graphs and Charts for Insights)</li>
          <li>Collaboration Tools (Share Calculations and Workspaces)</li>
          <li>History Log (Keep track of past calculations and results)</li>
          <li>Customization Options (User preferences for UI and themes)</li>
          </ul>
        </div>
        <p>&copy; 2025 Calcinar. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App