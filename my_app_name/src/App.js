import React from 'react';
import './App.css';

import GuestList from './GuestList'
import Display from './Display'
import AddGuest from './AddGuest'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { guests : [
      {firstName: "Rachel", lastName: "Green", rsvp: true},
      {firstName: "Ross", lastName: "Geller", rsvp: false},
      {firstName: "Monica", lastName: "Geller", rsvp: true},
      {firstName: "Chandler", lastName: "Bing", rsvp: false},
      {firstName: "Joey", lastName: "Tribbiani", rsvp: false},
      {firstName: "Leslie", lastName: "Knope", rsvp: true},
      {firstName: "April", lastName: "Ludgate", rsvp: true},
      {firstName: "Ann", lastName: "Perkins", rsvp: false},
      {firstName: "Ron", lastName: "Swanson", rsvp: false},
      {firstName: "Tom", lastName: "Haverford", rsvp: true},
      {firstName: "Ben", lastName: "Wyatt", rsvp: false},
      {firstName: "Donna", lastName: "Meagle", rsvp: true},
      {firstName: "Andy", lastName: "Dwyer", rsvp: false},
      {firstName: "Jerry", lastName: "Gergitch", rsvp: true},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container-3">
          <div className="Display">
              <Display listOfGuests2={this.state.guests} />
          </div>
          <div className="Box">
            <h2>RSVP'd Guests</h2>
            <GuestList listOfGuests={this.state.guests} />
          </div>
          <div className="Box">
            <h2>Awaiting RSVP</h2>
            <GuestList listOfGuests={this.state.guests} />
          </div>
          <AddGuest parent={this} />
        </div>

        <h2>Add Guest</h2>
        <form>
          <input type="text" name="firstName" id="firstName" />First Name
          <br /><input type="text" name="lastName" id="lastName" />Last Name
          <br /><input type="checkbox" name="rsvp" id="rsvp" />RSVP
          <br /><button onClick={AddGuest}>Submit</button>
        </form>
      </header>
    </div>
  );
}

function AddGuest(event) {
  event.preventDefault()
  let newGuest = {}
  newGuest.firstName = document.getElementById("firstName").value
  newGuest.lastName = document.getElementById("lastName").value
  if (document.getElementById("rsvp").value === "on") {
    newGuest.rsvp = true
  } else {
    newGuest.rsvp = false
          </div>
    );

  }
}

export default App;
