import React from "react";
import { numberFormat } from '../../Utility/Utility';

const StaffingRequest = (props) => (
    
    <li >
        <h3>RequestID: {props.RequestId} | Status: {props.RequestStatus}</h3>
        <div>
            <p>Type Of Work: {props.TypeOfWork}</p>
            <p>Salary: {numberFormat(props.Salary)}</p>
            <p>Client: {props.ClientName}</p>
            <p>Location: {props.City}, {props.State}</p>
        </div>
    </li>
);

export default StaffingRequest;