import React from 'react'
import { connect } from 'react-redux'
import CompanyList from './CompanyList'
import { fetchCompanies, deleteCompany, createCompany, editCompany } from '../redux/actions'


class CompanyContainer extends React.Component {

    componentDidMount() {
      fetch("http://localhost:3000/companies")
          .then(response => response.json())
          .then(data => this.props.fetchCompanies(data ))
    }



    render() {
        return (<CompanyList companies={this.props.companies} editCompany={this.props.editCompany} deleteCompany={this.props.deleteCompany} createCompany={this.props.createCompany} />)
      }
}  
  
function mapStateToProps(state) {
  return {
    companies: state.company.companies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCompanies: data => dispatch(fetchCompanies(data)), 
    deleteCompany: id => dispatch(deleteCompany(id)),
    createCompany: data => dispatch(createCompany(data)),
    editCompany: data => dispatch(editCompany(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)


