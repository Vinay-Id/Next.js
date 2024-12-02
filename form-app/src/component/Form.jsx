"use client"

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    // console.log(e.target);
    const name = e.target.name;
    const value = e.target.value
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={formData.email}
          name='email'
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={formData.password}
          name='password'
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
