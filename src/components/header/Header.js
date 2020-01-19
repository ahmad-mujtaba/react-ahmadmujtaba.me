import React from 'react';

const Header = (props) => {

    return (
        <header>
            <h1>
            Mujtaba Ahmad
            </h1>
            <div className='designation'>
            {props.currentDesignation}
            </div>
            <div className='header-details'>
            <div>
                <i className='mdi mdi-map-marker'></i>
                {props.currentCity}
            </div>
            <div>
                <i className='mdi mdi-email'></i>
                {props.currentEmail}             
            </div>
            <div>
                <i className='mdi mdi-phone'></i>
                {props.currentPhoneNumber}             
            </div>
            <div>
                <i className='mdi mdi-github-circle'></i>
                ahmad-mujtaba
            </div>

            </div>
        </header>
    );
}

export default Header;