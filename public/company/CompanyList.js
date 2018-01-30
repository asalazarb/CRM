import React from 'react'
import {array} from 'prop-types'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import uuid from 'uuid/v1'

//import CompanyItem from './CompanyItem'




class CompanyList extends React.Component {

    static propTypes = {
        companies: array
    }
    
    static defaultProps = {
        companies: []
    }

    onAfterDeleteRow = (rowKeys) =>{
      this.props.deleteCompany(rowKeys)
    }
    onAfterInsertRow = (rowFields) =>{
      this.props.createCompany(rowFields)
    }
    

    options = {
      afterDeleteRow: this.onAfterDeleteRow,
      afterInsertRow: this.onAfterInsertRow  
    }


    render(){
        return(
          <BootstrapTable data={this.props.companies} insertRow deleteRow selectRow={{mode: 'checkbox'}} options={this.options} pagination hover>
            <TableHeaderColumn dataField='id' isKey hidden hiddenOnInsert autoValue={uuid()} required={false} filter={{ type: 'TextFilter', delay: 100 }}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter', delay: 100 }} dataSort>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='address' filter={{ type: 'TextFilter', delay: 100 }}>Address</TableHeaderColumn>
            <TableHeaderColumn dataField='phone' filter={{ type: 'TextFilter', delay: 100 }}>Phone</TableHeaderColumn>
          </BootstrapTable>
        )
    }
}

export default CompanyList
