import React from 'react'
import { connect } from 'react-redux'
import ContactList from './ContactList'
import { fetchContacts, fetchCompanyNames, createContact, deleteContact, contactInfo } from '../redux/actions'


class ContactContainer extends React.Component {

    componentDidMount() {
      fetch("http://localhost:3000/contacts")
      .then(response => response.json())
      .then(data => this.props.fetchContacts(data))
      fetch("http://localhost:3000/companies")
          .then(response => response.json())
          .then(data => this.props.fetchCompanyNames(data))
    }

    render() {
        return (<div><h1>Contacts</h1><ContactList contacts={this.props.contacts} contactInfo={this.props.contactInfo} companies={this.props.companies} createContact={this.props.createContact} deleteContact={this.props.deleteContact} /> </div>)
      }
}  
  
function mapStateToProps(state) {
  return {
    contacts: state.contact.contacts,
    companies: state.company.companies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContacts: data => dispatch(fetchContacts(data)),
    fetchCompanyNames: data => dispatch(fetchCompanyNames(data)), 
    createContact: data => dispatch(createContact(data)),
    deleteContact: id => dispatch(deleteContact(id)),
    contactInfo: data => dispatch(contactInfo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)