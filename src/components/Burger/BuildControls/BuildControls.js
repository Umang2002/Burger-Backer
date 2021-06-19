import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls =[
    { label:'Salad',type : 'salad' },
    { label:'Bacon',type : 'bacon' },
    { label:'Meat',type :  'meat' },
    { label:'Alootiki',type : 'alootiki' },
    { label:'Cheese',type : 'cheese' },
];

const BuildControls = (props) => {
    return (
        <div className ={classes.BuildControls}>
        <p>Current Price : <strong>{props.price}</strong></p>
            {controls.map(ctrl => {
                    return( 
                        <BuildControl 
                        added = {() => props.ingrediantAdded(ctrl.type)}
                        deleted = {()=> props.ingrediantDeleted(ctrl.type)}
                        label ={ctrl.label}
                        key = {ctrl.label}
                        disabled ={props.disabled[ctrl.type]} />
              )})
            }
            <button 
            className ={classes.OrderButton} 
            disabled ={!props.purchaseable} 
            onClick={props.ordered}
            >ORDER NOW
            </button>
        </div>
    )
}

export default BuildControls

