import { useState } from "react";

export default function ReactForm() {
  const [contact, setcontact] = useState({
    fname: "",
    email: "",
    password: "",
    color: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    agree: "",
  });

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="fname">Full Name:</label>
          <input
            onChange={handleChange}
            type="text"
            name="fname"
            id="fname"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="fname">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div>
          <label htmlFor="color">Enter Your favorite Color</label>
          <input
            onChange={handleChange}
            type="color"
            name="color"
            id="color"
            required
          />
        </div>

        <div>
          <label htmlFor="Address">Address</label>
          <textarea
            name="Address"
            id="Address"
            placeholder="Enter your home address"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="city">City Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="city"
            id="city"
            placeholder="Enter your city"
            required
          />
        </div>

        <div>
          <label htmlFor="state">State</label>
          <select name="state" id="state" onChange={handleChange}>
            <option value="">Choose...</option>
            <option value="Solid">Solid</option>
            <option value="Liquid">Liquid</option>
            <option value="Gas">Gas</option>
          </select>
        </div>

        <div>
          <label htmlFor="zip">Pin/Zip</label>
          <input
            onChange={handleChange}
            type="number"
            name="zip"
            id="zip"
            placeholder="Enter your zip/pin code"
            required
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            name="agree"
            id="agree"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="agree">Say, you are agreed.</label>
        </div>
      </form>
      ;
    </div>
  );
}
