import React, {Component} from 'react';
// import React from 'react';
// componenet_function

// const Buttons = () => {
//     return(
//       <>
//         <button>Calculer</button>
//         <button>Initialiser</button>
//         <br/>      
//         <br/>
//       </>
//     );
//   }
// componenet_class

class Buttons extends Component{
  render(){
    return(
      <>
        <button>Calculer</button>
        <button>Initialiser</button>
        <br/>      
        <br/>
      </>
    );
  }
}
export default Buttons;