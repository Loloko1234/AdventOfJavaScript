import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [currcard, setCurrcard] = useState("6");
  const [filp, setFilp] = useState("");
  const Elements = {
    3: "american",
    4: "visa",
    5: "mastercard",
    6: "discover",
  };
  const handleChange = (e) => {
    const value = e.target.value[0];
    if (Elements.hasOwnProperty(value)) {
      setCurrcard(value);
    } else {
      setCurrcard("6");
    }
  };
  const handleCvvChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setFilp("flip");
    } else {
      setFilp("");
    }
  };
  return (
    <div className="wrapper">
      <div className={`credit-card__wrapper ${Elements[currcard]} ${filp}`}>
        <div className="credit-card__inner">
          <div className="credit-card--front">
            <div className="card-number">
              <div className="card-number__shadow shadow">
                4242 4242 4242 4242
              </div>
              <div className="card-number__emboss emboss">
                4242 4242 4242 4242
              </div>
            </div>
            <div className="card-holder">
              <div className="card-holder__shadow shadow">Amy Dutton</div>
              <div className="card-holder__emboss emboss">Amy Dutton</div>
            </div>
            <div className="expiration-date">
              <div className="expiration-date__shadow shadow">12/2022</div>
              <div className="expiration-date__emboss emboss">12/2022</div>
            </div>
          </div>
          <div className="credit-card--back">
            <div className="signature">Amy Dutton</div>
            <div className="cvv">123</div>
          </div>
        </div>
      </div>

      <div className="form">
        <form action="">
          <div className="row">
            <div className="field">
              <label for="card-number">Card Number</label>
              <input type="text" name="card-number" onChange={handleChange} />
            </div>

            <div className="field">
              <label for="card-holder">Card Holder</label>
              <input type="text" name="card-holder" />
            </div>
          </div>

          <div className="row">
            <div className="field option__wrapper">
              <label>Expiration Date</label>
              <div className="field__option">
                <select name="expiration-date-month" id="">
                  <option>Month</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>

                <select name="expiration-date-year" id="">
                  <option>Year</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label for="cvv">CVV</label>
              <input type="number" name="cvv" onChange={handleCvvChange} />
            </div>
          </div>

          <div className="row">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
