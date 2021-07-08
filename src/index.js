import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/";
import 'bootstrap/dist/css/bootstrap.css';

//
ReactDOM.render(<App />, document.getElementById("root"));

//!Теория мини приложение с кнопкой и инпутом
// const Header = () => {
//   <h1> Hello World</h1>;
// };

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: "300px",
//   };

//   return (
//     <input
//       style={styledField}
//       type="text"
//       placeholder={holder}
//       autoComplete=""
//       className="first"
//     />
//   );
// };

// const Btn = () => {
//   const text = " Log in";
//   const logged = true;
//   return <button>{logged ? "Enter" : text} </button>;
// };

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Field />
//       <Btn />
//     </div>
//   );
// };
