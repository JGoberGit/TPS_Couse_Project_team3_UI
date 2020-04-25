import React from "react";
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    <ul className={classes.NavItems}>
        {/*{props.isAuthenticated ? <NavItem link="/dashboard">Staff Profiles Dashboard</NavItem>: null}
        {props.isAuthenticated ? <NavItem link="/dashboard/staffing-requests">Staffing Requests Dashboard</NavItem>: null}
        {props.isAuthenticated ? <NavItem link="/dashboard/clients">Client Contract Dashboard</NavItem>: null}
{props.isAuthenticated ? <NavItem link="/dashboard/myprofile">My Profile</NavItem>: null}*/}
{!props.isAuthenticated ? <NavItem link="/auth">Login/SignUp</NavItem> : <NavItem link="/logout">Logout</NavItem>}

       <NavItem link="/dashboard">Staff Profiles Dashboard</NavItem>
       <NavItem link="/dashboard/staffing-requests">Staffing Requests Dashboard</NavItem>
       <NavItem link="/dashboard/clients">Client Contract Dashboard</NavItem>
       <NavItem link="/dashboard/myprofile">My Profile</NavItem>

    </ul>
);

export default navItems;