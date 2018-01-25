import React from 'react'
import {array} from 'prop-types'
import ContactItem from './ContactItem'

class ContactList extends React.Component {

    static propTypes = {
        contacts: array
    }
    
    static defaultProps = {
        contacts: []
    }

    render(){
        return(
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Company</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.props.contacts.map((contact, index) => {
                    return <ContactItem key={contact.id} contactCompany={contact.company} index={index} contactName={contact.name} contactPosition={contact.position} contactEmail={contact.email} contactId={contact.id} contactPhone={contact.phone} />
                })}

            </tbody>
          </table>
        )
    }
}

export default ContactList