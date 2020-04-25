import React, { Component } from 'react';
import ClientContracts from '../../components/ClientContracts/ClientContracts';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

class ClientContractDashboard extends Component {

    render() {
       /* if (!this.props.isAuthenticated){
            return <Redirect
                to="/auth"
                />;
        }*/
        return (
            <>
                <ClientContracts/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}
export default connect(mapStateToProps)(ClientContractDashboard);