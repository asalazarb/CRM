import React from 'react'
import {array} from 'prop-types'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class ContactList extends React.Component {

    static propTypes = {
        contacts: array
    }
    
    static defaultProps = {
        contacts: []
    }

    state= {
        selectedContact: {name:''}
    }

    onAfterDeleteRow = (rowKeys) =>{
        this.props.deleteContact(rowKeys)
    }

    onAfterInsertRow = (rowFields) => {
        this.props.createContact(rowFields)
    }

    onRowSelect = (row, isSelected) => {
        console.log(row)
        this.state.selectedContact = row
    }

    viewContact = () =>{
        this.props.contactInfo(this.state.selectedContact)
    }



    options = {
        mode: 'click',
        afterDeleteRow: this.onAfterDeleteRow,
        afterInsertRow: this.onAfterInsertRow,
        //beforeSaveCell: this.onBeforeSaveCell,
        //afterSaveCell: this.onAfterSaveCell  
      }
    
    render(){
        return(
          <div>
            <BootstrapTable data={this.props.contacts} selectRow={this.selectRow} cellEdit={this.options} insertRow deleteRow exportCSV selectRow={{mode: 'checkbox', onSelect: this.onRowSelect, clickToSelect: true}} options={this.options} pagination hover>
              <TableHeaderColumn dataField='companyID' isKey hidden hiddenOnInsert autoValue required={false} filter={{ type: 'TextFilter', delay: 100 }}>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='company' editable={{ type: 'select', options: { values: this.props.companies}}} filter={{ type: 'TextFilter', delay: 100 }} dataSort>Company</TableHeaderColumn>
              <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter', delay: 100 }}>Name</TableHeaderColumn>
              <TableHeaderColumn dataField='position' filter={{ type: 'TextFilter', delay: 100 }}>Position</TableHeaderColumn>
              <TableHeaderColumn dataField='email' filter={{ type: 'TextFilter', delay: 100 }}>Email</TableHeaderColumn>
              <TableHeaderColumn dataField='phone' filter={{ type: 'TextFilter', delay: 100 }}>Phone</TableHeaderColumn>
            </BootstrapTable>
            <Button onClick={this.viewContact}> <Link to='/contact'>Contact Info</Link></Button>
          </div>

        )
    }
}

export default ContactList