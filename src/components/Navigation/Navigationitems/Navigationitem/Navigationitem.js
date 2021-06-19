import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navigationitem.css'

const Navigationitem = (props) =>(
    <li className={classes.Navigationitem}>
    <NavLink 
    to={props.link}
    exact
    activeClassName={classes.active}>{props.children}</NavLink>
    </li>
)

export default Navigationitem
