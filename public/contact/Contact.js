import React from 'react'
import { connect } from 'react-redux'

import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class Contact extends React.Component {


    render(){
      return(<div className='container'>
        <h1>Contact Info</h1>
        <p><strong>Name: </strong>{this.props.contact.name}</p>
        <p><strong>Company: </strong>{this.props.contact.company}</p>
        <p><strong>Position: </strong>{this.props.contact.position}</p>
        <p><strong>Email: </strong>{this.props.contact.email}</p>
        <p><strong>Phone: </strong>{this.props.contact.phone}</p>
             </div>)
    }

}

function mapStateToProps(state) {
    return {
      contact: state.contact.contact
    }
  }

  export default connect(mapStateToProps)(Contact)