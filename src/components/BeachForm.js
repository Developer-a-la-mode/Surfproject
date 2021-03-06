import React, { useState, Fragment } from 'react';
import Card from './UI/Card';
import classes from './BeachForm.module.css';
import Button from './UI/Button';

const BeachForm = (props) => {
    const [enteredBeachSearch, setEnteredBeachSearch] = useState('');
    const [enteredDateSearch, setEnteredDateSearch] = useState('');
    const [enteredTimeSearch, setEnteredTimeSearch] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredDateInput = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}-/;

        if(enteredBeachSearch.trim().length === 0 || enteredDateSearch.trim().length === 0 || enteredTimeSearch.trim().length === 0) {
            return
        }
        if(enteredDateInput.test({enteredDateSearch})) {
            console.log('its working');
        }

        const beachData = {
            beach: enteredBeachSearch,
            date: enteredDateSearch,
            time: enteredTimeSearch
        }

        props.onSubmitSearchBeach(beachData);

        setEnteredBeachSearch('');
        setEnteredDateSearch('');
        setEnteredTimeSearch('');
    }

    const beachChangeHandler = (event) => {
        setEnteredBeachSearch(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDateSearch(event.target.value)
    }

    const timeChangeHandler = (event) => {
        setEnteredTimeSearch(event.target.value)
    }


    return (
        <Fragment>
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor='beach'>
                        Beach
                    </label>
                    <input type="text" id="beach" onChange={beachChangeHandler} value={enteredBeachSearch} />

                    <label htmlFor='date'>
                        Day
                    </label>
                    <input type="date" id="date" onChange={dateChangeHandler} value={enteredDateSearch} />

                    <label htmlFor='time'>
                        Time
                    </label>
                    <input type="time" id="time" onChange={timeChangeHandler} value={enteredTimeSearch} />
                    <Button type="submit">Add Beach</Button>
                </form>
            </Card>
        </Fragment>
    );
}

export default BeachForm;