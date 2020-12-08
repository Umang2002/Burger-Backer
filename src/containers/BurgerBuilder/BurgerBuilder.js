import React, { Component } from 'react'
import Auxilary from '../../HOC/Auxilary/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'


const INGREDIANT_PRICES ={
                salad : 20,
                cheese : 45,
                alootiki :36,
                bacon : 40,
                meat : 62
   }

 class BurgerBuilder extends Component {
    
        state = {
            ingredients :null ,
            totalPrice :  52,
            purchaseable : false,
            purchasing : false,
            loading : false
        }

    componentDidMount () {
        axios.get("https://react-my-burger-2685d-default-rtdb.firebaseio.com/ingredients.json")
        .then(response => {
            console.log(response);
               this.setState({
                   ingredients : response.data
               });
        })
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

    PurchaseContinueHandler = () => {
        //alert("Your Order Is Confirmed!!!");
        this.setState({loading : true})
        const order={
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                   name : 'Umang',
                   address : {
                       street : 'suryam residency',
                       zipCode : '395004',
                       country: 'india'
                   },
                   email : 'test@test.com'
            },
            deliveryMethod : 'fastest'
        }
        axios.post('/orders.json',order)
        .then(res => {
            this.setState({
                loading : false,
                purchasing :false
            })
        })
        .catch(error => {
            this.setState({
                loading : false,
                purchasing : false
            })
        })
    }

        render() {

             let orderSummary = null;
   
             const disabledInfo = {
                ...this.state.ingredients
            };

              
              let burger = <Spinner />
              if(this.state.ingredients){
                burger = (
                    <Auxilary>
                <Burger ingredients={this.state.ingredients}/>
               
                <BuildControls 
                     ingrediantAdded ={this.addIngrediantHandler}
                     ingrediantDeleted = {this.removeIngrediantHandler}
                     disabled ={disabledInfo}
                     price = {this.state.totalPrice}
                     purchaseable ={this.state.purchaseable}
                     ordered= {this.purchaseHandler}
                 />
                 </Auxilary>
                    );
              orderSummary =  <OrderSummary 
                    totalPrice = {this.state.totalPrice}
                    purchaseContinued = {this.PurchaseContinueHandler} ingredients={this.state.ingredients}
                    purchaseCanceled = {this.purchaseCancelHandler}
              />
            }
            if(this.state.loading){
                orderSummary= <Spinner />
             }
            
            
             for(let key in disabledInfo){
                 disabledInfo[key] = disabledInfo[key] <=0
             }

        return (
            <Auxilary>
            
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                  {orderSummary}
               </Modal>
               {burger}
            </Auxilary>
        )
    }
}
export default withErrorHandler(BurgerBuilder,axios)