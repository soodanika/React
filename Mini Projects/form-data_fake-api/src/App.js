import React from 'react';
import { useState } from 'react';

function App() {
  let [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // maintains the previous state of the object so that on every change it is not overridden
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent the default functionality of refreshing the page on submit
    fetch('https://jsonplaceholder.typicode.com/posts', {
      // dummy rest api (POST)
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
      }),
    }).then((res) => res.json().then((res) => console.log(res)));
    //fetch returns a promise which has a responseObject that has a body which is readable stream, we can convert it to json using .json() which again returns a promise and gives the value
  };

  return (
    <div>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            // we can use name to exactly refer it
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;