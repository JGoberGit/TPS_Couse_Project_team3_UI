import React, { Component } from 'react';
import classes from './ClientContracts.css';
import ClientContract from './ClientContract/ClientContract';
import Axios from 'axios';

class ClientContracts extends Component {

    state= {
        clientContracts: []
    };

    componentDidMount(){
        this.refreshContractList();
    }

    refreshContractList = () => {
        Axios.get('https://localhost:44340/Api/ClientContracts/GetClientContracts')
        .then(response => {
            this.setState({clientContracts: response.data})
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        
        let clientContractItems = (
            <>
            {this.state.clientContracts.map( client =>(
                <ClientContract
                key={client.ClientId}
                ClientId={client.ClientId}
                Name={client.Name}
                Description={client.Description}
                />
            ))}
            </>
        );

        return (
            <>
                
                <div className={classes.ClientContracts}>
                <h2>All Clients</h2>
                    <ul>
                        {clientContractItems}
                    </ul>
                </div>
            </>
        );
    }
}

export default ClientContracts;
