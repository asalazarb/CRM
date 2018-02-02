import React from 'react'
import { connect } from 'react-redux'
import CompanyList from './ContactList'
import { fetchContacts, deleteContact } from '../redux/actions'


class ContactContainer extends React.Component {

    componentDidMount() {
      fetch("http://localhost:3000/contacts")
      .then(response => response.json())
      .then(data => this.props.fetchContacts(data ));
    }

    render() {
        return (<div><h1>Contacts</h1><CompanyList contacts={this.props.contacts} deleteContact={this.props.deleteContact} /> </div>)
      }
}  
  
function mapStateToProps(state) {
  return {
    contacts: state.contact.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContacts: data => dispatch(fetchContacts(data)), 
    deleteContact: id => dispatch(deleteContact(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)