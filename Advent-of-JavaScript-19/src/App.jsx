import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordLogic, setPasswordLogic] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [confirmPasswordLogic, setConfirmPasswordLogic] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const handleInputChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value !== "" ? event.target.value : true);
    }
    if (event.target.name === "email") {
      setEmail(validateEmail(event.target.value) ? event.target.value : true);
    }
    if (event.target.name === "password") {
      let value = event.target.value;
      setPasswordLogic(value);
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(.{8,})$/;
      const isValid = passwordRegex.test(value);

      setPassword(isValid ? value : true);

      if (confirmPassword === value) {
        setConfirmPassword(true);
      }
    }
    if (event.target.name === "confirm-password") {
      let value1 = event.target.value;
      setConfirmPasswordLogic(value1);
      setConfirmPassword(
        event.target.value === password ? event.target.value : false
      );
    }
  };
  useEffect(() => {
    checkpassword();
  }, [passwordLogic, confirmPasswordLogic]);
  const checkpassword = () => {
    if (confirmPasswordLogic === passwordLogic) {
      setConfirmPassword(true);
      setPassword(false);
    } else {
      setConfirmPassword(false);
    }
  };

  return (
    <form action="">
      <h1>Signup</h1>
      <div className="field">
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" "
          onChange={handleInputChange}
        />
        <label for="name">Name</label>
        {name === undefined || name === null || name === true ? (
          <div className="error">
            <img src="./error.svg" alt="Error" />A name is required
          </div>
        ) : name === "" ? null : (
          <div className="success">
            <img src="./success.svg" alt="Success" />
          </div>
        )}
      </div>
      <div className="field">
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" "
          onChange={handleInputChange}
        />
        <label for="email">Email</label>
        {email === undefined || email === null || email === true ? (
          <div className="error">
            <img src="./error.svg" alt="Error" />
            Email nie jest Prawidłowy
          </div>
        ) : email === "" ? null : (
          <div className="success">
            <img src="./success.svg" alt="Success" />
          </div>
        )}
      </div>
      <div className={showPassword ? "field show" : "field"}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={handleInputChange}
          placeholder="Password"
        />
        <label for="password">Password</label>
        <button
          className="show-hide"
          onClick={(event) => {
            event.preventDefault();
            setShowPassword(!showPassword);
          }}
        ></button>
        {password === undefined || password === null || password === true ? (
          <div className="error">
            <img src="./error.svg" alt="Error" />
            <span className="errorek">
              Hasło nie ma co najmniej 8 znaków jedna dużą litera jedna cyfra
              jeden znak specjalny (np. !@#$%^&*)
            </span>
          </div>
        ) : password === "" ? null : (
          <div className="success">
            <img src="./success.svg" alt="Success" />
          </div>
        )}
      </div>
      <div className={showConfirmPassword ? "field show" : "field"}>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirm-password"
          onChange={handleInputChange}
          placeholder="Confirm Password"
        />
        <label for="confirm-password">Confirm Password</label>
        <button
          className="show-hide"
          onClick={(event) => {
            event.preventDefault();
            setShowConfirmPassword(!showConfirmPassword);
          }}
        ></button>
        {confirmPassword === false ? (
          <div className="error">
            <img src="./error.svg" alt="Error" />
            Hasła się nie zgadzają
          </div>
        ) : (
          <div className="success">
            <img src="./success.svg" alt="Success" />
          </div>
        )}
      </div>
      <div className="field">
        <input type="submit" name="submit" value="Submit" />
      </div>
    </form>
  );
}

export default App;
