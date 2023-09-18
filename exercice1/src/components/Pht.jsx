import React, {Component} from 'react';
// import React from 'react';
// componenet_function

// const Pht = () =>{
//     return (
//       <>
//         <label htmlFor="">Prix hors taxe :</label>
//         <input type="number" placeholder='Votre pht....'/>
//       <br />
//       <br />
  
//       </>
//     );
//   };
class Pht extends Component
{
 render(){
  return (
    <>
      <label htmlFor="">Prix hors taxe :</label>
      <input type="number" placeholder='Votre pht....'/>
    <br />
    <br />

    </>
  );
}
}
export default Pht;