import React, { useState, Fragment } from 'react';
import Card from './UI/Card';
import classes from './SearchBeach.module.css';
import Button from './UI/Button';

const SearchBeach = () => {
    const [enteredBeachSearch, setEnteredBeachSearch] = useState('');
    const [enteredDateSearch, setEnteredDateSearch] = useState('');
    const [enteredTimeSearch, setEnteredTimeSearch] = useState('');

    const addBeachHandler = (event) => {
        event.preventDefault();
        console.log(enteredBeachSearch, enteredDateSearch, enteredTimeSearch);

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
                <form onSubmit={addBeachHandler}>
                    <label htmlFor='beach'>
                        Beach
                    </label>
                    <input type="text" id="beach" onChange={beachChangeHandler} />

                    <label htmlFor='date'>
                        Day
                    </label>
                    <input type="date" id="date" onChange={dateChangeHandler} />

                    <label htmlFor='time'>
                        Time
                    </label>
                    <input type="time" id="time" onChange={timeChangeHandler} />
                    <Button type="submit">Add Beach</Button>
                </form>
            </Card>
        </Fragment>
    );
}

export default SearchBeach;