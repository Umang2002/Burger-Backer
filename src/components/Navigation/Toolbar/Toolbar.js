import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
       
    <DrawerToggler clicked={props.DrawerToggleClicked}/>    
     <Logo />
        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
);

export default Toolbar
