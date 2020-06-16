import React from 'react';

function Guest(props) {
    return (
        <div className="Guest">
            <li>
                Guest: {props.lastName}, {props.firstName} <button onClick={props.rsvp ? "": ""}>Change</button>
            </li>
        </div>
    );
}

export default Guest;
