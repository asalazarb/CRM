import React from 'react'
import { connect } from 'react-redux'
import CompanyList from './CompanyList'
import { fetchCompanies } from '../redux/actions'


class CompanyContainer extends React.Component {

    componentDidMount() {
      fetch("http://localhost:3000/companies")
          .then(response => response.json())
          .then(data => this.props.fetchCompanies(data ));
    }



    render() {
        console.log(this.props.companies)
        return (<CompanyList companies={this.props.companies} />)
      }
}  
  
function mapStateToProps(state) {
  return {
    companies: state.company.companies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCompanies: data => dispatch(fetchCompanies(data)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)


