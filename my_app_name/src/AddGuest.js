import React from 'react';

class AddGuest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parent: props.parent,
            firstName: "",
            lastName: "",
            rsvp: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        let newGuest = {}
        newGuest.firstName = this.state.firstName
        newGuest.lastName = this.state.lastName
        newGuest.rsvp = this.state.rsvp
        this.state.parent.setState({
            guests: [...this.state.parent.state.guests, newGuest]
        })
    }
    handleInputChange(event) {
        const name = event.target.name
        const value = name === "rsvp" ? event.target.checked : event.target.value

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form className="column-2 Box" onSubmit={this.handleSubmit}>
            <h2>Add Guest</h2>
            <input type="text" name="firstName" id="firstName" onChange={this.handleInputChange} />First Name
            <br /><input type="text" name="lastName" id="lastName" onChange={this.handleInputChange}/>Last Name
            <br /><input type="checkbox" name="rsvp" id="rsvp" onChange={this.handleInputChange}/>RSVP
            <br /><input type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddGuest