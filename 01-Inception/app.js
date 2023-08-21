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
    React.createElement("h2", {}, "im an h2 tag")
  )
);

console.log(parent);

root.render(parent);
