import React from 'react'
import CompanyList from './CompanyList'


class CompanyContainer extends React.Component {
    state = {
      companies: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/companies")
            .then(response => response.json())
            .then(data => this.setState({ companies: data }));
    }

    render() {
        return (<CompanyList companies={this.state.companies} />)
      }
}  
  
  export default CompanyContainer;


