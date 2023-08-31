import React from "react";
import ReactDOM from "react-dom/client";

// JSX - JavaScript XML - Extension to the JavaScript language syntax.

// const jsxHeading = <h2 id="heading">Namaste React 1</h2>;

// root.render(jsxHeading); // JSX is converted to React Element using Babel

// this is how babel converts jsx to react element and then to html element
//   =JSX =>Babel transpiles it to React.createElement => ReactElement-JS object => HTMLElement(rendered to the DOM)

// Babel is converting JSX to React.CreateElement
// Babal - JavaScript Compiler - Convert modern JavaScript into a version of JavaScript that can run on any browser or older version of JavaScript

// if we want to write jsx in multiple lines then we have to wrap it in parenthesis () to understand by babel that it is a single expression

// React Component
// 1. Class based Component - OLD WAY
// 2. Functional Component - NEW WAY

// Class based Component
// class Heading2 extends React.Component {
//   render() {
//     return <h2 id="heading">Namaste React 2</h2>;
//   }
// }

// Functional Component

const Title = <h1 id="heading">Namaste React 2</h1>;

const Heading3 = () => {
  return (
    <div id="heading">
      {Title}
      Namaste React 3
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading3 />);
