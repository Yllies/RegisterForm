import Input from "./Input";
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePwChange = (event) => {
    const value = event.target.value;
    setPw(value);
  };

  const handlePw2Change = (event) => {
    const value = event.target.value;
    setPw2(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.handle);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          label="Password"
          type="password"
          placeholder="B2hs62HGeyDb59"
          value={pw}
          onChange={handlePwChange}
        />
        <Input
          label="Confirm your password"
          type="password"
          placeholder="B2hs62HGeyDb59"
          value={pw2}
          onChange={handlePw2Change}
        />
      </form>
    </>
  );
};

export default Register;
