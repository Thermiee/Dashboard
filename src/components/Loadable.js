/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { Suspense } from 'react';

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = (Component) => (props) => (
  <Suspense fallback={<p>Loading</p>}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
