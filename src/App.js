import React, { Fragment } from 'react';
import BeachData from './components/BeachData';
import SearchBeach from './components/SearchBeach';


function App() {
  return (
    <Fragment>
      <SearchBeach />
      <BeachData />
    </Fragment>
  );
}

export default App;
