type ButtonFunctions = {
  handleClick: () => void;
};
const Button = (prop: ButtonFunctions) => {
  return <button onClick={prop.handleClick}>Click</button>;
};

export default Button;
