import React from "react";

const User = ({ name, age }) => {
  return (
    <li>
      {name},{age}
    </li>
  );
};

export default User;
