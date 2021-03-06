import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import Layout from './containers/Layout/Layout';
import Auth from './containers/Authentication/Authentication';
import Logout from './containers/Authentication/Logout/Logout';
import StaffDashboard from './containers/Dashboard/StaffDashboard';
import StaffingRequestDashboard from './containers/Dashboard/StaffingRequestDashboard';
import ClientContractDashboard from './containers/Dashboard/ClientContractDashboard';



class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Redirect exact from="/" to="/auth" />
            <Redirect exact from="/dashboard" to="/dashboard/staff" />
            <Route path="/dashboard/staff" exact component={StaffDashboard} />
            <Route path="/dashboard/staffing-requests" exact component={StaffingRequestDashboard} />
            <Route path="/dashboard/clients" exact component={ClientContractDashboard} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/logout" exact component={Logout} />
          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;

