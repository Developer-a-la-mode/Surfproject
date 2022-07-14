import React from 'react';
import Card from './UI/Card';
import classes from './BeachData.module.css';

const BeachData = (props) => {
    return (
        <Card className={classes.beachdatalist}>
        <ul>

            {props.beaches.map((beach =>
                    <li key={beach.id}>
                        {beach.beachs}, {beach.date} {beach.timeq}
                    </li>
            ))}
            </ul>

        </Card>
    )
}

export default BeachData;