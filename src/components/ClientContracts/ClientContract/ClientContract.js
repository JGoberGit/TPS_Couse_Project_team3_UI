import React from "react";

const ClientContract = (props) => (
    
    <li >
        <h3>Client ID: {props.ClientId}</h3>
        <div>
            <p>Name: {props.Name}</p>
            <p>Description: {props.Description}</p>
        </div>
    </li>
);

export default ClientContract;