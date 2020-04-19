import React from "react";
import logoimage from '../../../assets/images/staffing.png';
import { numberFormat } from '../../Utility/Utility';

const StaffProfile = (props) => (
    
    <li >
        <img src={logoimage} alt="logoimage"/>
        <h3>{props.FirstName} {props.LastName}</h3>
        <div>
            <p>Salary: {numberFormat(props.Salary)}</p>
            <br/>
            <p>Location: {props.City}, {props.State}</p>
            <p>Years Experience: {props.YearsExperience}</p>
            <p>Education: {props.Education}</p>
        </div>
    </li>
);

export default StaffProfile;