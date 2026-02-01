import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student', // Default role
    rollNumber: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Direct axios call since api.js might not be set up for this yet
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registration Successful! Please Login.');
      navigate('/login');
    } catch (error) {
      alert('Error registering user: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        
        <label>Role:</label>
        <select name="role" onChange={handleChange} value={formData.role}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>

        {formData.role === 'student' && (
          <input name="rollNumber" placeholder="Roll Number" onChange={handleChange} />
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;