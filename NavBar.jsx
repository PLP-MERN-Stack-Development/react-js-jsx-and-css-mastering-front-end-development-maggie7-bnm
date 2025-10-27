import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../Context/ThemeContext'
import Button from './Button'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/tasks', label: 'Tasks' },
    { path: '/api-data', label: 'API Data' }
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            React App
          </Link>
          
          <div className="flex items-center gap-4">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <Button variant="secondary" onClick={toggleTheme}>
              {isDark ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar