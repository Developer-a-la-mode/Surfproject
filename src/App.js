import React, { Fragment } from 'react';
import BeachData from './components/BeachData';
import SearchBeach from './components/SearchBeach';


function App() {
  const searchBeachList = (beach,time,day) => {

  }

  return (
    <Fragment>
      <SearchBeach onSearchBeach={searchBeachList} />
      <BeachData />
    </Fragment>
  );
}

export default App;
