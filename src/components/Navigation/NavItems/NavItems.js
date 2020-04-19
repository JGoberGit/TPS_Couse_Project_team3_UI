import React from "react";
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    <ul className={classes.NavItems}>
        {props.isAuthenticated ? <NavItem link="/dashboard">Dashboard</NavItem>: null}
        {props.isAuthenticated ? <NavItem link="/dashboard/myprofile">My Profile</NavItem>: null}
        {!props.isAuthenticated ? <NavItem link="/auth">Login/SignUp</NavItem> : <NavItem link="/logout">Logout</NavItem>}
    </ul>
);


export default navItems;