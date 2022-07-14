import React, { Fragment, useState } from 'react';
import BeachData from './components/BeachData';
import SearchBeach from './components/BeachForm';


function App() {
  const [searchedBeaches,addBeach] = useState([])

  const searchBeachList = (enteredBeachData) => {
    const beachDataEntered = {
      id: Math.random().toString(),
      ...enteredBeachData
    }


    addBeach((prevBeaches) => {
      return [beachDataEntered, ...prevBeaches]
    });
    
  }
  console.log(searchedBeaches)
  

  return (
    <Fragment>
      <SearchBeach onSubmitSearchBeach={searchBeachList} />
      <BeachData beaches={searchedBeaches} />
    </Fragment>
  );
  }

export default App;
