import React from 'react'
import GuestList from './GuestList'

function Display({listOfGuests, isRSVP, handleChangeRSVP}) {
    let rsvpTrue = listOfGuests.filter(guest => guest.rsvp)
    let numRsvpTrue = listOfGuests.filter(guest => guest.rsvp).length
    let rsvpFalse = listOfGuests.filter(guest => !guest.rsvp)
    let numRsvpFalse = listOfGuests.filter(guest => !guest.rsvp).length
    if (isRSVP) {
        return (
            <div>
                <div className="RSVP">
                    <h6># of Guest RSVP'd</h6>
                    {numRsvpTrue}
                    <GuestList listOfGuests={rsvpTrue} handleChangeRSVP={handleChangeRSVP}/>
                </div>
            </div>
        )
    }
    return (
        <div>
                <div className="noRSVP">
                <h6># of Guest not RSVP'd</h6>
                {numRsvpFalse}
                <GuestList listOfGuests={rsvpFalse} handleChangeRSVP={handleChangeRSVP}/>
            </div>
        </div>
    );
}

export default Display