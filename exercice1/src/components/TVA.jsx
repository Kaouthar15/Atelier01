import React, {Component} from 'react';
// import React from 'react';
// componenet_function
// const TVA = () => {
//   return (
    // <>
    //   <label htmlFor="">Taux TVA :</label>
    //   <input type="text" placeholder='Votre tva....'/>
    //   <br/>      
    //   <br/>      

    // </>
//   );
// }
// componenet_class

class TVA extends Component{
  render(){
 return(   
  <>
    <label htmlFor="">Taux TVA :</label>
    <input type="text" placeholder='Votre tva....'/>
    <br/>      
    <br/>      
  </>);
  }
}
export default TVA;