import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [size, setSize] = useState("medium");
  const [toppings, setToppings] = useState([]);
  const price = {
    small: 5,
    medium: 23,
    large: 324,
    toppings: {
      cheese: 3,
      mushrooms: 34,
      paneer: 23
    }
  };

  const handleToppings = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter(t => t !== value));
    }
  };

  const calculateTotal = () => {
    let total = price[size];
    toppings.forEach(t => {
      total += price.toppings[t];
    });
    return total.toFixed(2);
  };

  return (
    <div className="container">
      <h1>🍕 Pizza Billing App 🍕</h1>
      <h2>🍽️ Select Size:</h2>
      <label>
        <input
          type="radio"
          name="size"
          value="small"
          checked={size === "small"}
          onChange={(e) => setSize(e.target.value)}
        />
        Small (🍕) - ${price.small}
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="size"
          value="medium"
          checked={size === "medium"}
          onChange={(e) => setSize(e.target.value)}
        />
        Medium (🍕🍕) - ${price.medium}
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="size"
          value="large"
          checked={size === "large"}
          onChange={(e) => setSize(e.target.value)}
        />
        Large (🍕🍕🍕) - ${price.large}
      </label>

      <div className="toppings">
        <h2>🌟 Select Toppings:</h2>
        <label>
          <input
            type="checkbox"
            value="cheese"
            onChange={handleToppings}
            checked={toppings.includes("cheese")}
          />
          🧀 Cheese (+${price.toppings.cheese})
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="mushrooms"
            onChange={handleToppings}
            checked={toppings.includes("mushrooms")}
          />
          🍄 Mushrooms (+${price.toppings.mushrooms})
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="paneer"
            onChange={handleToppings}
            checked={toppings.includes("paneer")}
          />
          🧀 Paneer (+${price.toppings.paneer})
        </label>
      </div>

      <div className="total">
        <h2>💰 Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
}

export default App;
