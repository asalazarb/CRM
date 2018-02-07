const FETCH_COMPANIES = 'FETCH_COMPANIES'
const DELETE_COMPANY = 'DELETE_COMPANY'
const CREATE_COMPANY = 'CREATE_COMPANY'
const EDIT_COMPANY = 'EDIT_COMPANY'
const FETCH_CONTACTS = 'FETCH_CONTACTS'
const CREATE_CONTACT = 'CREATE_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const FETCH_COMPANY_NAMES = 'FETCH_COMPANY_NAMES'
const CONTACT_INFO = 'CONTACT_INFO'

export const fetchCompanies = data => {
  return {
    type: FETCH_COMPANIES,
    data
  }
}

export const fetchCompanyNames = data => {
  return {
    type: FETCH_COMPANY_NAMES,
    data
  }
}

export const deleteCompany = id => {
  return {
    type: DELETE_COMPANY,
    id
  }
}

export const createCompany = data => {
  return {
    type: CREATE_COMPANY,
    data
  }
}

export const editCompany = data => {
  return {
    type: EDIT_COMPANY,
    data
  }
}

export const fetchContacts = data => {
  return {
    type: FETCH_CONTACTS,
    data
  }
}

export const createContact = data => {
  return {
    type: CREATE_CONTACT,
    data
  }
}

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    id
  }
}

export const contactInfo = data => {
  return {
    type: CONTACT_INFO,
    data
  }
}

