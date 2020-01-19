import React from 'react';


const Academics = (props) => {

    return (

        <div className='academics-item'>
            <div className='year'><i className='mdi mdi-calendar-range'></i> {props.year}</div>
            <div className='name'>{props.name}</div>
            <div className='subject'>{props.subject}</div>
            <div className='score'>{props.score}</div>
            
            <div className='class'>{props._class}</div>
            <div className='institute'>{props.institute}</div>
            <div className='city'><i className='mdi mdi-map-marker'></i> {props.city}</div>
        </div>
    );
}


export default Academics;