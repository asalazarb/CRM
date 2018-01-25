import React from 'react'
import {array} from 'prop-types'
import CompanyItem from './CompanyItem'

class CompanyList extends React.Component {

    static propTypes = {
        companies: array
    }
    
    static defaultProps = {
        companies: []
    }

    render(){
        return(
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Company</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.props.companies.map((company, index) => {
                  return <CompanyItem key={company.id} index={index} companyName={company.name} companyId={company.id} companyAddress={company.address} companyPhone={company.phone} />
                })}

            </tbody>
          </table>
        )
    }
}

export default CompanyList
