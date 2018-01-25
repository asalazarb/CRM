import React from 'react'
import CompanyList from './ContactList'


class ContactContainer extends React.Component {
    state = {
      contacts: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/contacts")
            .then(response => response.json())
            .then(data => this.setState({ contacts: data }));
    }

    render() {
        return (<CompanyList contacts={this.state.contacts} />)
      }
}  
  
  export default ContactContainer;