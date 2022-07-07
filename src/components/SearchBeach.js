import React, { Fragment } from 'react';
import Card from './UI/Card';
import classes from './SearchBeach.module.css';

const SearchBeach = () => {
    const addBeachHandler = (event) => {
        event.preventDefault();
        const beach = event.value
    }
    return (
        <Fragment>
            <Card className={classes.input}>
                <form onSubmit={addBeachHandler}>
                    <label htmlFor='beach'>
                        Beach
                    </label>
                    <input type="text" id="beach" />

                    <label htmlFor='day'>
                        Day
                    </label>
                    <input type="date" id="day" />

                    <label htmlFor='time'>
                        Time
                    </label>
                    <input type="time" id="time" />
                    <button type="submit">Add Beach</button>
                </form>
            </Card>
        </Fragment>
    );
}

export default SearchBeach;