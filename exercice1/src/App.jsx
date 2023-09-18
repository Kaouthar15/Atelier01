// exercice 1
import './App.css';
import React, {Component} from 'react';
import CalculPTTC from './components/CalculPTTC';

// const Pht = () =>{ 
//   return (
//     <>
//     <label htmlFor="">Prix hors taxe :</label>
//     <input type="text" placeholder='Votre pht...'/>
//     <br />
//     <br />

//     </>
//   );
// }
// const TVA = () => {
//   return (
//     <>
//       <label htmlFor="">Taux TVA :</label>
//       <input type="text" placeholder='Votre tva...'/>
//       <br />
//       <br />

//     </>
//   );
// }
// const Buttons = () => {
//   return(
//     <>
//       <input type="button" value="Calculer" />
//       <input type="button" value="Initialiser" />
//       <br />
//       <br />

//     </>
//   );
// }
// const Res = () => {
//   return (
//     <>
//       <label htmlFor="" >Resultat :  </label>
//       <input type="text" placeholder='Votre resultat...'/>
//       <br />
//       <br />
//     </>
//   );
// }
// const CalculPTTC = () =>{
//   return (
//     <>
//     <div style={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
//     <fieldset style={{width:'fit-content'}}>
//       <legend>Calcul de PTTC</legend>
//       <Pht/>
//       <TVA/>
//       <Buttons/>
//       <Res/>
//     </fieldset>
//     </div>
//     </>
//   );
// }
// function
// // function App() {
// //   return(
// //     <>
// //     <CalculPTTC/>
// //     </>
// //   );
// // }
// class
class App extends Component
{
  render(){
    return (
      <>
        <CalculPTTC /> 
      </>
    );
  }
}
export default App;
