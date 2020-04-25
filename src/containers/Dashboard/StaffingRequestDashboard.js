import React, { Component } from 'react';
import StaffingRequests from '../../components/StaffingRequests/StaffingRequests';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

class StaffingRequestDashboard extends Component {

    render() {
       /* if (!this.props.isAuthenticated){
            return <Redirect
                to="/auth"
                />;
        }*/
        return (
            <>
                <StaffingRequests/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}
export default connect(mapStateToProps)(StaffingRequestDashboard);