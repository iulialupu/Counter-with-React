import React, { useState } from "react";

// **************   Class based component
// class Product extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0
//     };
//   }

//   addition() {
//     const count = ++this.state.counter;
//     this.setState({ counter: count });
//   }

//   subtraction() {
//     const count = --this.state.counter;
//     this.setState({ counter: count });
//   }

//   render() {
//     return (
//       <div className="product">
//         <h3>{this.props.name}</h3>
//         <h4> {this.state.counter} </h4>
//         <button className="first" onClick={() => this.addition()}>
//           +
//         </button>
//         <button className="second" onClick={() => this.subtraction()}>
//           -
//         </button>
//       </div>
//     );
//   }
// }

// ******************  Functional Component
const Product = props => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="product">
      <h3>{props.name}</h3>
      <h4> {counter} </h4>
      <button className="first" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button className="second" onClick={() => setCounter(counter - 1)}>
        -
      </button>
    </div>
  );
};

export default Product;
