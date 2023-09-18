// import React from 'react';
import React , {Component} from 'react';
import Res from './Res';
import Buttons from './Buttons';
import Pht from './Pht';
import TVA from './TVA';
// componenet_function
// const CalculPTTC = () =>{
//     return (
//       <>
      
//       <div style={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
//       <fieldset>
//         <legend align='center'>Calcul de PTTC</legend>
//         <Pht/>
//         <TVA/>
//         <Buttons/> 
//         <Res/>
//       </fieldset>
//       </div>
//       </>
//     );
// };
// componenet_class

class CalculPTTC extends Component{
  render(){
    return (
      <>
      
      <div style={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
      <fieldset>
         <legend align='center'>Calcul de PTTC</legend>
         <Pht/>
         <TVA/>
         <Buttons/> 
         <Res/>
       </fieldset>
       </div>
       </>
    );
  }
}
export default CalculPTTC;