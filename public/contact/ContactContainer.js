import React from 'react'
import { connect } from 'react-redux'
import CompanyList from './ContactList'
import { fetchContacts } from '../redux/actions'



class ContactContainer extends React.Component {

    componentDidMount() {
      fetch("http://localhost:3000/contacts")
      .then(response => response.json())
      .then(data => this.props.fetchContacts(data ));
    }

    render() {
        return (<div><h1>Contacts</h1><CompanyList contacts={this.props.contacts} /> </div>)
      }
}  
  
function mapStateToProps(state) {
  return {
    contacts: state.contact.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContacts: data => dispatch(fetchContacts(data)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)