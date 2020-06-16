import React from 'react';

function Guest(props) {
    return (
        <div className="Guest">
            <li>
                Guest: {props.lastName}, {props.firstName} RSVP'd: {props.rsvp}
            </li>
        </div>
    );
}

export default Guest;
