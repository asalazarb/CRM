import React from 'react'
import CompanyContainer from './company/CompanyContainer'
import ContactContainer from './contact/ContactContainer'


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Companies</h1>
        <CompanyContainer />
        <h1>Contacts</h1>
        <ContactContainer />
      </div>

    );
  }
}

export default App;
