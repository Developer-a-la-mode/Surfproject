import React, { useState, Fragment } from 'react';
import BeachData from './components/BeachData';
import BeachForm from './components/BeachForm';


function App() {
  const [searchedBeachData, setSearchedBeachData] = useState([]);

  const addBeachHandler = (beachInput,dateInput,timeInput) => {
    setSearchedBeachData((prevBeachList) => {
      return [...prevBeachList, {id: Math.random().toString(), beach: beachInput, date: dateInput, time: timeInput}]
    })
  }

  return (
    <Fragment>
      <BeachForm onAddBeach={addBeachHandler} />
      <BeachData beaches={searchedBeachData} />
    </Fragment>
  );
  }

export default App;
