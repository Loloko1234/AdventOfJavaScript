import React, { useState, useEffect } from "react";

function generatePassword(
  useSymbols,
  useNumbers,
  useLowercase,
  useUppercase,
  length,
  useSmilar
) {
  let characters = "";
  if (useSymbols) {
    characters += "!@#$%^&*()";
  }
  if (useNumbers) {
    characters += "0123456789";
  }
  if (useLowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useSmilar) {
    characters += "il1Lo0O";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function App() {
  const [length, setLength] = useState(12);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [password, setPassword] = useState("");
  const [Similar, setSimilar] = useState(true);
  const [copied, setCopied] = useState(true);

  useEffect(() => {
    setPassword(
      generatePassword(symbols, numbers, lowercase, uppercase, length, Similar)
    );
  }, [symbols, numbers, lowercase, uppercase, length, Similar]);

  const handleChange = (event) => {
    setLength(event.target.value);
    setCopied(true);
  };

  const handleSymbolsChange = (event) => {
    setSymbols(event.target.checked);
    setCopied(true);
  };

  const handleNumbersChange = (event) => {
    setNumbers(event.target.checked);
    setCopied(true);
  };
  const handleLowerCaseChange = (event) => {
    setLowercase(event.target.checked);
    setCopied(true);
  };
  const handleUpperCaseChange = (event) => {
    setUppercase(event.target.checked);
    setCopied(true);
  };
  const handleSimilarChange = (event) => {
    setSimilar(event.target.checked);
    setCopied(true);
  };
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopied(false);
      })
      .catch((err) => {
        console.error("Something went wrong when copying the text: ", err);
      });
  };
  return (
    <div className="wrapper">
      <div className="field">
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          min="6"
          max="32"
          steps="1"
        />
        <button
          className={copied ? "copy" : "copy copied"}
          onClick={handleCopyClick}
        >
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.3147 2.83081H20.6332C18.1514 2.83081 16.1332 4.85131 16.1332 7.33081V38.8308C16.1332 41.3126 18.1514 43.3308 20.6332 43.3308H43.1332C45.6149 43.3308 47.6332 41.3126 47.6332 38.8308V13.1493L37.3147 2.83081ZM43.1354 38.8308H20.6332V7.33081H34.1332V16.3308H43.1332L43.1354 38.8308Z" />
            <path d="M11.6332 11.8308H7.13318V47.8308C7.13318 50.3126 9.15143 52.3308 11.6332 52.3308H38.6332V47.8308H11.6332V11.8308Z" />
          </svg>
          <span>Copied!</span>
        </button>
      </div>

      <div className="field">
        <input
          type="range"
          name="length"
          id="length"
          value={length}
          min="6"
          max="32"
          onChange={handleChange}
        />
        <span id="lengthText">{length}</span> characters
      </div>

      <div className="field">
        <input
          type="checkbox"
          name="symbols"
          id="symbols"
          checked={symbols}
          onChange={handleSymbolsChange}
        />
        <label for="symbols">
          <strong>Include Symbols</strong> (@#$%)
        </label>
      </div>

      <div className="field">
        <input
          type="checkbox"
          name="numbers"
          id="numbers"
          checked={numbers}
          onChange={handleNumbersChange}
        />
        <label for="numbers">
          <strong>Include Numbers</strong> (1234)
        </label>
      </div>

      <div className="field">
        <input
          type="checkbox"
          name="lowercase"
          id="lowercase"
          checked={lowercase}
          onChange={handleLowerCaseChange}
        />
        <label for="lowercase">
          <strong>Include Lowercase Characters</strong> (abcd)
        </label>
      </div>

      <div className="field">
        <input
          type="checkbox"
          name="uppercase"
          id="uppercase"
          checked={uppercase}
          onChange={handleUpperCaseChange}
        />
        <label for="uppercase">
          <strong>Include Uppercase Characters</strong> (ABCD)
        </label>
      </div>

      <div className="field">
        <input
          type="checkbox"
          name="similar"
          id="similar"
          checked={Similar}
          onChange={handleSimilarChange}
        />
        <label for="similar">
          <strong>Include Similar Characters</strong> (i, l, 1, L, o, 0, O)
        </label>
      </div>
    </div>
  );
}

export default App;
