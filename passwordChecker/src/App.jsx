import React, { useState } from "react";

function App() {
  const [strength, setStrength] = useState("");
  const [password, setPassword] = useState("");

  const checkStrength = (pass) => {
    let tempscore = 0;

    if (pass.length >= 8) tempscore++;
    if (/[A-Z]/.test(pass)) tempscore += 1;
    if (/[a-z]/.test(pass)) tempscore += 1;
    if (/[0-9]/.test(pass)) tempscore += 1;
    if (/[^A-Za-z0-9]/.test(pass)) tempscore += 1;

    switch (tempscore) {
      case 0:
      case 1:
        return "very weak";
      case 2:
        return "weak";
      case 3:
        return "moderate";
      case 4:
        return "strong";
      case 5:
        return "very strong";
    }
  };

  const handleChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    const strength = checkStrength(pass);
    setStrength(strength);
  };
  return (
    <div>
      <h1>Password Strength Checker</h1>
      <h2>Strength: {strength}</h2>
      <input type="password" onChange={handleChange} />

      <div>
        <p className={password.length >= 8 ? "green" : "red"}>
          at least 8 letters
        </p>
        <p className={/[A-Z]/.test(password) ? "green" : "red"}>
          contains upper case letters
        </p>
        <p className={/[a-z]/.test(password) ? "green" : "red"}>
          contains lower case letters
        </p>
        <p className={/[0-9]/.test(password) ? "green" : "red"}>
          contains numbers
        </p>
        <p className={/[^a-zA-Z0-9]/.test(password) ? "green" : "red"}>
          contains special characters
        </p>
      </div>
    </div>
  );
}

export default App;
