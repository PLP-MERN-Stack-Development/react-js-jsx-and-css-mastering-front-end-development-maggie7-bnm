import React from 'react';
import Card from '../Components/card';

const Tasks = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Task management features will be implemented in Step 3.
        </p>
        <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-200">
            🚧 Task functionality coming soon in Step 3!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Tasks;