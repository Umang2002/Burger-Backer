import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'


export class Orders extends Component {

    state={
        orders:[],
        loading: true
    }

    componentDidMount(){
         axios.get('/orders.json')
         .then(res=>{
            
             const fetchedOrders=[];
             for(let key in res.data){
                 console.log(res.data[key])
                 fetchedOrders.push({
                    ...res.data[key],
                    id:key
                    })
             }
             this.setState({loading : false,orders:fetchedOrders})
             console.log(fetchedOrders)
         })
         .catch(err=>{
            this.setState({loading : false});

         })
    }
    render() {
        return (
            <div>
               {this.state.orders.map(order => (
                   <Order 
                   key={order.id}
                   ingredients={order.ingredients}  
                   price ={order.price}  
                   />
               ))}

            </div>
        )
    }
}

export default withErrorHandler(Orders,axios)
