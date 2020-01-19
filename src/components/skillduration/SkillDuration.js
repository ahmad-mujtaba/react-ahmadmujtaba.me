import React from 'react';
import {toDuration} from '../../util/';



const SkillDuration = (props) => {

    
    const fromDate = new Date(props.from);
    let to = new Date();
    if (props.to) {
        to = new Date(props.to);
    }

    const diff = toDuration(fromDate, to);


    return (

        <div className='skill-duration'>
            <i className='mdi mdi-clock'></i> {diff}
        </div>
    );
}

export default SkillDuration;