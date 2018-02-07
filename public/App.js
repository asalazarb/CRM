import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import { Layout, Menu, BackTop } from 'antd'
import 'antd/dist/antd.css'
import CompanyContainer from './company/CompanyContainer'
import ContactContainer from './contact/ContactContainer'
import Contact from './contact/Contact'


const { Header, Content, Footer } = Layout;


class App extends React.Component {
  render() {
    return (
      <div>
        
        <Layout className="layout">
          <BackTop />
          
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item><Link to="/companies">CRM</Link></Menu.Item>
            <Menu.Item><Link to="/companies">Companies</Link></Menu.Item>
            <Menu.Item><Link to="/contacts">Contacts</Link></Menu.Item>
            <Menu.Item><Link to="/contacts">Projects</Link></Menu.Item>
          </Menu>

        </Layout>
        <div className="container">
          <Switch>
            <Route exact path='/' component={CompanyContainer} />
            <Route path='/contacts' component={ContactContainer} />
            <Route path='/companies' component={CompanyContainer} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
        <Footer style={{ textAlign: 'center' }}>
          CRM ©2018 Created by ASB
        </Footer>
        
      </div>
      

    );
  }
}

export default App;
