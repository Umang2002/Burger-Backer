import React, { Component } from 'react'
import Auxilary from '../../HOC/Auxilary/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
   const INGREDIANT_PRICES ={
                salad : 20,
                cheese : 45,
                alootiki :36,
                bacon : 40,
                meat : 62
   }

 class BurgerBuilder extends Component {
    
        state = {
            ingredients : {
                salad : 0,
                cheese : 0,
                alootiki :0,
                bacon : 0,
                meat : 0
            } ,
            totalPrice :  52,
            purchaseable : false,
            purchasing : false
        }

     updatePurchaseState (ingredients) {
        
         const sum = Object.keys(ingredients)
           .map(igKey => {
                 return ingredients[igKey];
           })
           .reduce((sum,el)=>{
               return sum+el;
           },0)

           this.setState({
               purchaseable: sum > 0
           })
       }

 purchaseHandler = () => {
       this.setState({purchasing : true})
 }

    addIngrediantHandler = (type) => {
              const oldCount = this.state.ingredients[type];
              const updatedCount = oldCount + 1;
              const updatedIngrediants = {
                  ...this.state.ingredients
              };
              updatedIngrediants[type] = updatedCount; 
              const priceAddition = INGREDIANT_PRICES[type]; 
              const oldPrice = this.state.totalPrice;
              const newPrice = priceAddition+oldPrice;
              this.setState({
                  ingredients : updatedIngrediants,
                  totalPrice : newPrice
              })
              this.updatePurchaseState(updatedIngrediants);
    }

    removeIngrediantHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngrediants = {
            ...this.state.ingredients
        };
        updatedIngrediants[type] = updatedCount; 
        const priceDeletion = INGREDIANT_PRICES[type]; 
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceDeletion;
        this.setState({
            ingredients : updatedIngrediants,
            totalPrice : newPrice
        })
        this.updatePurchaseState(updatedIngrediants);
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }

    PurchaseContinueHandler = ()=> {
        alert("Your Order Is Confirmed!!!")
    }

        render() {
   
             const disabledInfo = {
                 ...this.state.ingredients
             };
             for(let key in disabledInfo){
                 disabledInfo[key] = disabledInfo[key] <=0
             }

        return (
            <Auxilary>
            
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                   <OrderSummary 
                   totalPrice = {this.state.totalPrice}
                   purchaseContinued = {this.PurchaseContinueHandler} ingredients={this.state.ingredients}
                   purchaseCanceled = {this.purchaseCancelHandler}
                   />
               </Modal>
               <Burger ingredients={this.state.ingredients}/>
               {/* <div>Build Controls</div> */}
               <BuildControls 
                    ingrediantAdded ={this.addIngrediantHandler}
                    ingrediantDeleted = {this.removeIngrediantHandler}
                    disabled ={disabledInfo}
                    price = {this.state.totalPrice}
                    purchaseable ={this.state.purchaseable}
                    ordered= {this.purchaseHandler}
                />
            </Auxilary>
        )
    }
}
export default BurgerBuilder