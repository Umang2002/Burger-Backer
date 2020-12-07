import React from 'react'
import burgerLogo from '../../assets/Images/neel.png'
import classes from './Logo.css'

const Logo = (props) => (
    <div className ={classes.Logo}>
        <img src ={burgerLogo} alt ="" />
    </div>
)

export default Logo
