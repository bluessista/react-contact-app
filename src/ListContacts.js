import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
    render() {
        return (
            <ol className="contact-list">
                {this.props.contacts.map(user => 
                    (<li key={user.id} className="contact-list-item">
                        <div 
                            className="contact-avatar" 
                            style={{
                                backgroundImage: `url(${user.avatarURL})`
                        }}>
                            
                        </div>
                        <div className="contact-details">
                            <p>{user.name}</p>
                            <p>{user.handle}</p>
                        </div>
                        <button 
                            onClick={() => this.props.onDeleteContact(user)}
                            className="contact-remove">
                        </button>
                    </li>)
                )}
            </ol>
        )
    }
}

ListContacts.propTypes = {
    contacs: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts