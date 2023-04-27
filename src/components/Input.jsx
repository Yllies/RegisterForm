const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      ></input>
    </>
  );
};

export default Input;
