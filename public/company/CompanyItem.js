import React from 'react'
import {string, number} from 'prop-types'



class CompanyItem extends React.Component {
    static propTypes = {
        companyName: string,
        companyId: string,
        companyAddress: string,
        companyPhone: string,
        index: number
    }
    
    static defaultProps = {
        companyName: "",
        companyId: "",
        companyAddress: "",
        companyPhone: "",
        index: 0
    }

    render(){
        return(
          <tr>             
            <th scope="row">{this.props.index + 1}</th>
            <td>{this.props.companyId}</td>
            <td>{this.props.companyName}</td>
            <td>{this.props.companyAddress}</td>
            <td>{this.props.companyPhone}</td>
          </tr>
        )
    }
}
export default CompanyItem