import React from 'react';
import Card from './UI/Card';
import classes from './BeachData.module.css';

const BeachData = (props) => {
    return (
        <Card className={classes.beachdatalist}>
            <ul>
                {props.beachList.map(beach => <li>{beach.name}, {beach.date} {beach.time}</li>)}
            </ul>
        </Card>
    )
}

export default BeachData;