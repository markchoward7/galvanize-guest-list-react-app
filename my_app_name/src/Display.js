import React from 'react'
import GuestList from './GuestList'

function Display({listOfGuests2}) {
    console.log(listOfGuests2)
    let rsvpTrue = listOfGuests2.filter(guest => guest.rsvp)
    let numRsvpTrue = listOfGuests2.filter(guest => guest.rsvp).length
    let rsvpFalse = listOfGuests2.filter(guest => !guest.rsvp)
    let numRsvpFalse = listOfGuests2.filter(guest => !guest.rsvp).length
    console.log("RSVP", rsvpTrue)
    return (
        <div>
            <div class="RSVP">
                <h6># of Guest RSVP'd</h6>
                {numRsvpTrue}
                <GuestList listOfGuests={rsvpTrue} />
            </div>
                <div class="noRSVP">
                <h6># of Guest not RSVP'd</h6>
                {numRsvpFalse}
                <GuestList listOfGuests={rsvpFalse} />
            </div>
        </div>
    );
}

export default Display