import React, { useState } from 'react';
import BeachForm from './BeachForm';


const NewBeach = (props) => {
    const [searchedBeaches, addBeach] = useState([])

    const searchBeachList = (enteredBeachData) => {
        const beachDataEntered = {
            id: Math.random().toString(),
            ...enteredBeachData
        }


        addBeach((prevBeaches) => {
            return [beachDataEntered, ...prevBeaches]
        });
        // props.beaches(searchedBeaches);
    }

    return (
        <BeachForm onSubmitSearchBeach={searchBeachList} />
    )
}

export default NewBeach;