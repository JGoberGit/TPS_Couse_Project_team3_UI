import React, { Component } from 'react';
import classes from './StaffingRequests.css';
import StaffingRequest from './StaffingRequest/StaffingRequest';
import Axios from 'axios';

class StaffingRequests extends Component {

    state= {
        staffingRequests: []
    };

    componentDidMount(){
        this.refreshProfileList();
    }

    refreshProfileList = ()=> {
        Axios.get('https://localhost:44340/Api/StaffingRequest/GetStaffingRequests')
        .then(response => {
            this.setState({staffingRequests: response.data})
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        
        let staffingRequestItems = (
            <>
            {this.state.staffingRequests.map( request =>(
                <StaffingRequest
                key={request.RequestId}
                RequestId={request.RequestId}
                ClientName={request.ClientName}
                TypeOfWork={request.TypeOfWork}
                Salary={request.Salary}
                City={request.City}
                State={request.State}
                RequestStatus={request.RequestStatus}
                />
            ))}
            </>
        );

        return (
            <>
                
                <div className={classes.StaffingRequests}>
                <h2>All Staffing Requests</h2>
                    <ul>
                        {staffingRequestItems}
                    </ul>
                </div>
            </>
        );
    }
}

export default StaffingRequests;
