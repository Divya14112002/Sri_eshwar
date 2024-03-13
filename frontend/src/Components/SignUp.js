import React, { useState } from 'react';
import Axios from 'axios'; 
import './register.css';
function SignupPage() {
  const [formData, setFormData] = useState({
    userName: '',
    enterPassword: '',
    reEnterPassword: '',
    fullname: '',
    prefname: '',
    degree:'',
    phoneno: '',
    secphoneno: '',
    email: '',
    contactmethod: '',
    position: '',
    institution: '',
    dept: '',
    city: '',
    state: '',
    zip: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send form data to backend
      const response = await Axios.post('/api/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        
      });
  
      if (response.status===201) {
        console.log('Form data sent successfully');
        // Reset form after successful submission
        setFormData({
          userName: '',
          enterPassword: '',
          reEnterPassword: '',
          fullname:'',
          prefname: '',
          degree:'',
          phoneno: '',
          secphoneno: '',
          email: '',
          contactmethod: '',
          position: '',
          institution: '',
          dept: '',
          city: '',
          state: '',
          zip: ''
        });
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };
  


return (
 
  <div>
  <h1>REGISTER</h1> 
     <h3 className="personal1">PERSONAL INFORMATION</h3>
     <form onSubmit={handleSubmit} className='form1'>
     <div className='personalinfos'>
        <div className='personal'>
          <label>Username:</label>
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} /><br />
        </div>
        <div className='personal'>
          <label>Password:</label>
          <input type="password" name="enterPassword" value={formData.enterPassword} onChange={handleChange} /><br />
        </div>
        <div className='personal'>
          <label>Re-enter Password:</label>
          <input type="password" name="reEnterPassword" value={formData.reEnterPassword} onChange={handleChange} /><br />
        </div>
        <div className='personal'>
          <label>Full Name:</label>
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} /><br />
        </div>
        <div className='personal'>
          <label>Preferred Name:</label>
          <input type="text" name="prefname" value={formData.prefname} onChange={handleChange} /><br />
        </div>
        <div className='personal'>
          <label>Degree:</label>
          <input type="text" name="degree" value={formData.degree} onChange={handleChange}/><br/>
        </div>
        <div className='personal'>
          <label>Phone number:</label>
          <input type="tel" name="phoneno" value={formData.phoneno} onChange={handleChange} /><br />
        </div>
        
        <div className='personal'>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} /><br />
        </div>
        <div className='personal'>
          <label>Contact Method:</label>
              <select name="contactmethod" value={formData.contactmethod} onChange={handleChange}>
              <option value="">Select contact method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="fax">Fax</option>
</select><br />
        </div>
      </div>
      </form>
      <h3 className='insitution1'>INSTITUTION RELATED INFORMATION</h3>
      <form onSubmit={handleSubmit} className='form2'>
      <div className='insitutioninfos'>
        <div className='institution'>
          <label>Position:</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} /><br />
        </div>
        <div className='institution'>
          <label>Institution:</label>
          <input type="text" name="institution" value={formData.institution} onChange={handleChange} /><br />
        </div>
        <div className='institution'>
          <label>Department:</label>
          <select name="dept"  value={formData.dept} onChange={handleChange}>
                    <option value="">Select a department</option>
                    <option value="cse">Computer Science and Engineering</option>
                    <option value="ece">Electronics and Communication Engineering</option>
                    <option value="me">Mechanical Engineering</option>
                    <option value="aids">Artifical Intelligence</option>
                    <option value="cce">Computer and Communication Engineering</option>
                    <option value="csbs">Computer Science and Business Systems</option>
                    <option value="eee">Electrical and Electronic Engineering</option>
          </select>
        </div>
        <div className='institution'>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} /><br />
        </div>
        <div className='institution'>
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} /><br />
        </div>
        <div className='institution'>
          <label>Pin code:</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} /><br />
        </div>
      </div>
      <button type="submit" >Submit</button>
      </form>
    </div>
  
  
);
}

export default SignupPage;