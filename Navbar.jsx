import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
            Task Manager
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</Link>
            <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Tasks</Link>
            <Link to="/api-data" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">API Data</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar