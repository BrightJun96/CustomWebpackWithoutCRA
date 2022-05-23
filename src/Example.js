import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 1rem;
  background-color: green;
  color: white;
  width: 100px;
  height: 50px;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const Example = () => {
  return (
    <div>
      <Button>Register</Button>
      <Button>Generate</Button>
    </div>
  );
};

export default Example;
