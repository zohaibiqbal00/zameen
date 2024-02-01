// Import React and necessary hooks
import React, { useState } from 'react';

// Define the Tab component
const page: React.FC = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState<number>(1);

  // Function to set the active tab
  const setActive = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {/* Tab buttons */}
      <div className="flex mb-4">
        <button
          onClick={() => setActive(1)}
          className={`flex-1 p-4 text-center ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActive(2)}
          className={`flex-1 p-4 text-center ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Tab 2
        </button>
        <button
          onClick={() => setActive(3)}
          className={`flex-1 p-4 text-center ${
            activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Tab 3
        </button>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 1 && <div className="p-4 bg-gray-100">Tab 1 content</div>}
        {activeTab === 2 && <div className="p-4 bg-gray-100">Tab 2 content</div>}
        {activeTab === 3 && <div className="p-4 bg-gray-100">Tab 3 content</div>}
      </div>
    </div>
  );
};

// Export the Tab component
export default page;
