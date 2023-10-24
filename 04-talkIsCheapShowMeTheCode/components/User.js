import { useState, useEffect } from "react";

const User = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>count={count}</h1>
      <h2>Name: Shreyas</h2>
      <p>Age: 24</p>
    </div>
  );
};

export default User;
