import React from 'react'
import {array} from 'prop-types'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class ContactList extends React.Component {

    static propTypes = {
        contacts: array
    }
    
    static defaultProps = {
        contacts: []
    }

    onAfterDeleteRow = (rowKeys) =>{
        this.props.deleteContact(rowKeys)
    }

    options = {
        mode: 'click',
        afterDeleteRow: this.onAfterDeleteRow,
       // afterInsertRow: this.onAfterInsertRow,
        //beforeSaveCell: this.onBeforeSaveCell,
        //afterSaveCell: this.onAfterSaveCell  
      }
    /*ID Company Name Position Email Phone*/

    
    render(){
        return(
          
          <BootstrapTable data={this.props.contacts} cellEdit={this.options} insertRow deleteRow exportCSV selectRow={{mode: 'checkbox'}} options={this.options} pagination hover>
            <TableHeaderColumn dataField='companyID' isKey hidden hiddenOnInsert autoValue required={false} filter={{ type: 'TextFilter', delay: 100 }}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='company' editable filter={{ type: 'TextFilter', delay: 100 }} dataSort>Company</TableHeaderColumn>
            <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter', delay: 100 }}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='position' filter={{ type: 'TextFilter', delay: 100 }}>Position</TableHeaderColumn>
            <TableHeaderColumn dataField='email' filter={{ type: 'TextFilter', delay: 100 }}>Email</TableHeaderColumn>
            <TableHeaderColumn dataField='phone' filter={{ type: 'TextFilter', delay: 100 }}>Phone</TableHeaderColumn>
          </BootstrapTable>
        )
    }
}

export default ContactList