import React from 'react';
import Card from './UI/Card';
import classes from './BeachData.module.css';

const BeachData = (props) => {
    return (
        <Card className={classes.beachdatalist}>
        <ul>
            {props.beaches.map((beachItem =>
                    <li key={beachItem.id}>
                        {beachItem.beach}, {beachItem.date} {beachItem.time}
                    </li>
            ))}
            </ul>
        </Card>
    )
}

export default BeachData;