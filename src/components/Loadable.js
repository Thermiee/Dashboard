/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { Suspense } from 'react';

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = (Component) => (props) => (
  <Suspense fallback={(
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="animate-spin w-20 h-20 border-t-2 border-b-2 border-gray-900 rounded-full" />
            <div className="text-gray-900 text-xl font-semibold mt-2">Loading...</div>
          </div>
        </div>
      </div>
    </div>
)}
  >
    <Component {...props} />
  </Suspense>
);

export default Loadable;
