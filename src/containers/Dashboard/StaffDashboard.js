import React, { Component } from 'react';
import StaffProfiles from '../../components/StaffProfiles/StaffProfiles';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

class StaffDashboard extends Component {

    render() {
        if (!this.props.isAuthenticated){
            return <Redirect
                to="/auth"
                />;
        }
        return (
            <>
                <StaffProfiles/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}
export default connect(mapStateToProps)(StaffDashboard);