import React, { useState } from 'react';
import './Form.css'; // Import the CSS file
import { Link } from 'react-router-dom';

export function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male', // Default value for gender
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            className="input-field"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="age">
            Age:
          </label>
          <input
            className="input-field"
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Gender:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>


      <Link to="/PatientDashboard/Symptoms" preventScrollReset={true}> Next</Link>      
    </div>
  );
}

export default Form;
