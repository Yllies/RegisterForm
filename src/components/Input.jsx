import { useState } from "react";

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handle}
      ></input>
    </>
  );
};

export default Input;
