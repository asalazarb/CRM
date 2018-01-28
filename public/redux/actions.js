const FETCH_COMPANIES = 'FETCH_COMPANIES'
const FETCH_CONTACTS = 'FETCH_CONTACTS'

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