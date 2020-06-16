import React from 'react';
import './App.css';

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

    this.handleChangeRSVP = this.handleChangeRSVP.bind(this)
  }

  handleChangeRSVP(event) {
    let target = 0
    for (var i = 0; i < this.state.guests.length; i++) {
      if (this.state.guests[i].lastName === event.target.name.split(":")[0] && this.state.guests[i].firstName === event.target.name.split(":")[1]) {
        target = i
        break
      }
    }
    let newGuestsArray = [...this.state.guests]
    newGuestsArray[target].rsvp = !newGuestsArray[target].rsvp
    this.setState( { 
      guests: newGuestsArray
    })
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container-2">
          <div className="Box">
              <Display listOfGuests={this.state.guests} isRSVP={true} handleChangeRSVP={this.handleChangeRSVP}/>
          </div>
          <div className="Box">
              <Display listOfGuests={this.state.guests} isRSVP={false} handleChangeRSVP={this.handleChangeRSVP}/>
          </div>
        </div>
        <AddGuest parent={this} />
        <br />
      </div>
    );
  }
}

export default App;
