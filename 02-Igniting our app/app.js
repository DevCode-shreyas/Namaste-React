import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h2", { id: "heading" }, "hello world 2");

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // render the heading to the root

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h2", {}, "i'm an h2 tag inside a div")
  )
);

console.log(parent);

root.render(parent);
