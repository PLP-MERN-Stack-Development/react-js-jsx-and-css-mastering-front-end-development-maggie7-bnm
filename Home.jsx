import React from 'react';
import Card from '../Components/card';
import Button from '../Components/Button';
const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">s
      <Card className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Your React App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          This application demonstrates React components, state management, and API integration.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            variant="primary" 
            onClick={() => window.location.href = '/tasks'}
          >
            View Tasks
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => window.location.href = '/api-data'}
          >
            Explore API Data
          </Button>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            📝 Task Management
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Add, complete, and delete tasks with filtering options.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            🌐 API Integration
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Fetch and display data from JSONPlaceholder API with search.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            🎨 Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Fully responsive layout that works on all devices.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;