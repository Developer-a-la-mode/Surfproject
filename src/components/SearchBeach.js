import React, { Fragment } from 'react';
import Card from '../UI/Card';

const SearchBeach = () => {

    return (
        <Fragment>
            <Card>
                <form>
                    <label htmlFor='beach'>
                        Beach
                    </label>
                    <input type="text" id="beach" />

                    <label htmlFor='day'>
                        Day
                    </label>
                    <input type="text" id="day" />

                    <label htmlFor='time'>
                        Time
                    </label>
                    <input type="text" id="time" />
                </form>
            </Card>
        </Fragment>
    );
}

export default SearchBeach;