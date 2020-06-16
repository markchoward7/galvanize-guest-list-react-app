import React from 'react'
import GuestList from './GuestList'

function Display({listOfGuests, isRSVP}) {
    let rsvpTrue = listOfGuests.filter(guest => guest.rsvp)
    let numRsvpTrue = listOfGuests.filter(guest => guest.rsvp).length
    let rsvpFalse = listOfGuests.filter(guest => !guest.rsvp)
    let numRsvpFalse = listOfGuests.filter(guest => !guest.rsvp).length
    if (isRSVP) {
        return (
            <div>
                <div class="RSVP">
                    <h6># of Guest RSVP'd</h6>
                    {numRsvpTrue}
                    <GuestList listOfGuests={rsvpTrue} />
                </div>
            </div>
        )
    }
    return (
        <div>
                <div class="noRSVP">
                <h6># of Guest not RSVP'd</h6>
                {numRsvpFalse}
                <GuestList listOfGuests={rsvpFalse} />
            </div>
        </div>
    );
}

export default Display