import React, { Fragment } from 'react';
import BeachData from './components/BeachData';
import SearchBeach from './components/SearchBeach';


function App() {
  const searchBeachList = (enteredBeachData) => {
    const beachDataEntered = {
      ...enteredBeachData,
      id: Math.random().toString()
    }

    console.log(beachDataEntered);
  }

  return (
    <Fragment>
      <SearchBeach onSubmitSearchBeach={searchBeachList} />
      <BeachData />
    </Fragment>
  );
}

export default App;
