import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import CompanyContainer from './company/CompanyContainer'
import ContactContainer from './contact/ContactContainer'



class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Companies</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
          </ul>
        </nav>
        
        
        <div className="container">
          <Switch>
            <Route exact path='/' component={CompanyContainer} />
            <Route path='/contacts' component={ContactContainer} />
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;
