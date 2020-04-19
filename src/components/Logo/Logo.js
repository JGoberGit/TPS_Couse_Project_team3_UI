import React from 'react';
import classes from './Logo.css';
import logoimage from '../../assets/images/staffing.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoimage} alt="logoimage"/>
    </div>
);

export default logo;