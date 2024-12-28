import React from 'react';

const MosaicDashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-gray-200 p-4 h-48 flex justify-center items-center">
            Widget {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MosaicDashboard;
