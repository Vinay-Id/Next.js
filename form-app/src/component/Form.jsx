"use client"
import styles from './Form.module.css'
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
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
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={formData.name}
            name='name'
            placeholder="Enter name"
            onChange={handleChange} />
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
    </div>
    </div>
  );
};

export default Form;
