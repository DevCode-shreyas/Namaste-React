import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
      age: 25,
    };
  }

  render() {
    return (
      <div>
        <h1>User Class</h1>
        <p>Class component</p>
      </div>
    );
  }
}

export default UserClass;
