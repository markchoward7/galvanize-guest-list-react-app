import React from 'react'

function Display({listOfGuests, isRSVP}) {
    let rsvpTrue = listOfGuests.filter(guest => guest.rsvp).length
    let rsvpFalse = listOfGuests.filter(guest => !guest.rsvp).length
    if (isRSVP) {
        return (
            <div>
                <h6># of Guest RSVP'd</h6>
                {rsvpTrue}
            </div>
        )
    }
    return (
        <div>
            <h6># of Guest not RSVP'd</h6>
            {rsvpFalse}
        </div>
    );
}

export default Display