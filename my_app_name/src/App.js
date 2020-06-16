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
        <div className="grid-container-2">
          <div className="Box">
              <Display listOfGuests={this.state.guests} isRSVP={true} />
          </div>
          <div className="Box">
              <Display listOfGuests={this.state.guests} isRSVP={false} />
          </div>
        </div>
        <AddGuest parent={this} />
        <br />
      </div>
    );
  }
}

export default App;
