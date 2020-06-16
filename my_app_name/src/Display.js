import React from 'react'

function Display({listOfGuests2}) {
    console.log(listOfGuests2)
    let rsvpTrue = listOfGuests2.filter(guest => guest.rsvp).length
    let rsvpFalse = listOfGuests2.filter(guest => !guest.rsvp).length
    console.log("RSVP", rsvpTrue)
    return (
        <div>
            <h6># of Guest RSVP'd</h6>
            {rsvpTrue}
            <h6># of Guest not RSVP'd</h6>
            {rsvpFalse}
        </div>
    );
}

export default Display