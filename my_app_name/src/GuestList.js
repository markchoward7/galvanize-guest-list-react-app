import React from 'react'

import Guest from "./Guest"

function GuestList({listOfGuests, handleChangeRSVP}) {
    return (
        <ul>
            {listOfGuests.sort(compareFullName).map(guest => {
                return <Guest lastName={guest.lastName} firstName={guest.firstName} rsvp={guest.rsvp} handleChangeRSVP={handleChangeRSVP} />})}
            
        </ul>
    )
}

function compareFullName(person1, person2) {
    const item1 = (person1.lastName + person1.firstName).toUpperCase()
    const item2 = (person2.lastName + person2.firstName).toUpperCase()

    let comparison = 0
    if (item1 > item2) {
        comparison = 1
    } else if (item1 < item2) {
        comparison = -1
    }
    return comparison
}

export default GuestList