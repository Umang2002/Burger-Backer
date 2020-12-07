import React,{Component} from 'react'
import Auxilary from '../../../HOC/Auxilary/Auxilary';
import Button from '../../UI/Button/Button'


class OrderSummary extends Component{

     componentDidUpdate(){
         console.log("[OrderSummary] Will Upadte");
     }
    
    render(){

        const IngredientsSummary = Object.keys(this.props.ingredients).map(igKey => {
            return( 
            <li key ={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
            )
        });

        return(
            <Auxilary>

            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
              {IngredientsSummary}
            </ul>
            <p><strong>Total Price : {this.props.totalPrice}</strong></p>
            <p>Continue to Checkout???</p>
            <Button btnType ='Danger' clicked ={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType ='Success' clicked ={this.props.purchaseContinued}>CONTINUE</Button>
       </Auxilary>
        )
    }
} 
export default OrderSummary
