import React , {Component} from 'react';
import Aux from '../Auxilary/Auxilary';
import classes from './Layout.css';
class  Layout extends Component {

 render () {
   return (
     <Aux>
    <div className={classes.Header}>
    CAR DETAILS
    </div>
     <main className={classes.Content}>
           {this.props.children}
     </main>
     </Aux>
   )
 }

}

export default Layout ;
