import React, { Fragment, useState } from 'react';
import BeachData from './components/BeachData';
import SearchBeach from './components/BeachForm';


function App() {
  const [searchedBeaches,addBeach] = useState([])

  const searchBeachList = (enteredBeachData) => {
    const beachDataEntered = {
      ...enteredBeachData,
      id: Math.random().toString()
    }


    addBeach((prevBeaches) => {
      return [...prevBeaches, beachDataEntered]
    });
    
  }
  console.log(searchedBeaches)
  

  return (
    <Fragment>
      <SearchBeach onSubmitSearchBeach={searchBeachList} />
      <BeachData onSaveBeachData={searchedBeaches} />
    </Fragment>
  );
  }

export default App;
