import React, { Component } from 'react';
import ListContacts from "./ListContacts";

class App extends Component {
    state = {
        contacts: [
            {
                "id": "inga",
                "name": "inga bluessista",
                "handle": "ibluessista",
                "avatarURL": "http://localhost:5001/karen.jpg"
              },
              {
                "id": "sarah",
                "name": "sarah drasner",
                "handle": "sarahdrasner",
                "avatarURL": "http://localhost:5001/richard.jpg"
              },
              {
                "id": "tyler",
                "name": "tyler mcginnis",
                "handle": "tylermcginnis",
                "avatarURL": "http://localhost:5001/tyler.jpg"
              }
        ]
    }

    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter(c => 
               c.id !== contact.id
            )
        }))
    }

    render() {
        return (
            <div>
            <ListContacts 
                contacts={this.state.contacts}
                onDeleteContact={this.removeContact}
                />
            </div>
        );
    }
}

export default App;
