import React from 'react'
//import Logo from '../../../components/Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems'
import classes from './SideDrawer.css'
import Logo1 from '../../../assets/Images/neel.png'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxilary from '../../../HOC/Auxilary/Auxilary'


const SideDrawer = (props) => {

     let attachClasses =[classes.SideDrawer,classes.Close];
     if(props.open){
        attachClasses =[classes.SideDrawer,classes.Open];
     }
     
    return (
        <Auxilary>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachClasses.join(' ')}>
           
             {/* <Logo height='11% ' margin ='30px'/> */}
             <div className ={classes.Logo1}>
             <img src={Logo1}/>
             </div>
            
        <nav>
                <Navigationitems />
            </nav>
        </div>

     </Auxilary>
    )
}

export default SideDrawer
