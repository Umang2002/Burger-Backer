import React from 'react'
// import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import classes from './Burger.css'
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant'

const Burger = (props) => {
     
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
        //console.log(igKey);
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           // console.log(i,_);
            return  <BurgerIngrediant key = {igKey + i} type = {igKey} />
        })
    })
    .reduce((arr,el) => {
       // console.log(arr,el);
        //console.log(arr.concat(el))
          return arr.concat(el);
    },[]);
 
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please!!Start adding the Ingredients!!</p>
    }
    // console.log(transformedIngredients);
    return (
        <div className ={classes.Burger}>
            <BurgerIngrediant type="bread-top" />
           {transformedIngredients}
            <BurgerIngrediant type="bread-bottom" />

        </div>
    )
}

export default Burger;
