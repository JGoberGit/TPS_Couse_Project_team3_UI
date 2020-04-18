import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';

import Layout from './containers/Layout/Layout';
import Auth from './containers/Authentication/Authentication';
import Logout from './containers/Authentication/Logout/Logout';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/logout" exact component={Logout} />
          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;