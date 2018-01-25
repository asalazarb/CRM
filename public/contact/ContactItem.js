import React from 'react'
import {string, number} from 'prop-types'



class ContactItem extends React.Component {
    static propTypes = {
        contactName: string,
        contactId: string,
        contactEmail: string,
        contactPhone: string,
        contactPosition: string,
        contactCompany: string,
        index: number
    }
    
    static defaultProps = {
        contactName: "",
        contactId: "",
        contactEmail: "",
        contactPhone: "",
        contactPosition: "",
        contactCompany: "",
        index: 0
    }

    render(){
        return(
          <tr>             
            <th scope="row">{this.props.index + 1}</th>
            <td>{this.props.contactId}</td>
            <td>{this.props.contactCompany}</td>
            <td>{this.props.contactName}</td>
            <td>{this.props.contactPosition}</td>
            <td>{this.props.contactEmail}</td>
            <td>{this.props.contactPhone}</td>
          </tr>
        )
    }
}
export default ContactItem