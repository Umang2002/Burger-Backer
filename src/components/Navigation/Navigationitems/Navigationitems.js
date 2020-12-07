import React from 'react'
import classes from './Navigationitems.css'
import Navigationitem from './Navigationitem/Navigationitem'

const Navigationitems = () => (
      <ul className={classes.Navigationitems}>
         <Navigationitem link='/' active>Burger Backer</Navigationitem>
         <Navigationitem link ='/' >Checkout</Navigationitem>
      </ul>
);

export default Navigationitems
