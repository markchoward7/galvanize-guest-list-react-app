import React from 'react';

function Guest(props) {
    return (
        <div className="Guest">
            <li>
                Guest: {props.lastName}, {props.firstName}
            </li>
        </div>
    );
}

export default Guest;
