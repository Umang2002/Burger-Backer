import React,{Component} from 'react'
import './App.css';
import Layout from './HOC/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/checkout/Checkout'
import {Route,Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'
class App extends Component {
  render(){ 
    return (
      <div>
       <Layout>
         <Switch>
            <Route path ="/checkout" component={Checkout} />
            <Route path ="/orders" component={Orders} />
            <Route path ="/" component={BurgerBuilder} />
         </Switch> 

       </Layout>
      </div>
    );
  }
};

export default App;
