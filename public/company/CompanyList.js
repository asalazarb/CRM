import React from 'react'
import {array} from 'prop-types'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'


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
    onBeforeSaveCell = (row, cellName, cellValue) => {
      if(cellValue.length != 0){
        return true
      }
      return false
    }
    onAfterSaveCell = (row, cellName, cellValue) => {
      const newRow = row
      switch(cellName){
        case 'name':
          newRow.name = cellValue
          break
        case 'address':
          newRow.address = cellValue
          break
        case 'phone':
          newRow.phone = cellValue
          break
        default:
          break
      }
      this.props.editCompany(newRow)
    }
    

    options = {
      mode: 'click',
      afterDeleteRow: this.onAfterDeleteRow,
      afterInsertRow: this.onAfterInsertRow,
      beforeSaveCell: this.onBeforeSaveCell,
      afterSaveCell: this.onAfterSaveCell  
    }



    render(){
        return(
          <BootstrapTable data={this.props.companies} cellEdit={this.options} insertRow deleteRow exportCSV selectRow={{mode: 'checkbox'}} options={this.options} pagination hover>
            <TableHeaderColumn dataField='id' isKey hidden hiddenOnInsert autoValue required={false} filter={{ type: 'TextFilter', delay: 100 }}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' editable filter={{ type: 'TextFilter', delay: 100 }} dataSort>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='address' filter={{ type: 'TextFilter', delay: 100 }}>Address</TableHeaderColumn>
            <TableHeaderColumn dataField='phone' filter={{ type: 'TextFilter', delay: 100 }}>Phone</TableHeaderColumn>
          </BootstrapTable>
        )
    }
}

export default CompanyList
