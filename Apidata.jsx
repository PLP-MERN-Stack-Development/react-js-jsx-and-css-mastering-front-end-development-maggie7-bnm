import React from 'react';
import Card from '../Components/card';

const ApiData = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          API Data
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          API integration features will be implemented in Step 4.
        </p>
        <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200">
            🌐 API functionality coming soon in Step 4!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ApiData;