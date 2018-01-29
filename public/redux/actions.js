const FETCH_COMPANIES = 'FETCH_COMPANIES'
const FETCH_CONTACTS = 'FETCH_CONTACTS'
const DELETE_COMPANY = 'DELETE_COMPANY'


export const fetchCompanies = data => {
  return {
    type: FETCH_COMPANIES,
    data
  }
}

export const fetchContacts = data => {
  return {
    type: FETCH_CONTACTS,
    data
  }
}

export const deleteCompany = id => {
  return {
    type: DELETE_COMPANY,
    id
  }
}