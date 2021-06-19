import React from 'react'
import classes from './Navigationitems.css'
import Navigationitem from './Navigationitem/Navigationitem'

const Navigationitems = () => (
      <ul className={classes.Navigationitems}>
         <Navigationitem link='/' >Burger Backer</Navigationitem>
         <Navigationitem link ='/orders' >Orders</Navigationitem>
      </ul>
);

export default Navigationitems
