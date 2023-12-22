import React from "react";
type InputProps = {
  text: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return <input type="text" value={props.text} onChange={props.handleChange} />;
};

export default Input;
