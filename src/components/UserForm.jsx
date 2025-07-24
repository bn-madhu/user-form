import React, { useState } from 'react';
import { useProfileContext } from '../context/ProfileContext';
import ModlePreview from './ModlePreview';

const UserForm = () => {
  const { addProfile } = useProfileContext();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    bio: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  
  const validate = () => {
    const newErrors = {};
    if(!formData.fullName) newErrors.fullName = "Full Name is required";
    if(!formData.email) newErrors.email = "Email is required";
    
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(parseInt(formData.age)) || parseInt(formData.age) < 18) {
      newErrors.age = "Age must be a number and at least 18";
    }

    if(!formData.gender) newErrors.gender = "Select gender";
    if(!formData.bio) newErrors.bio = "Bio is required";
    return newErrors;
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      addProfile(formData);
      setSubmitted(formData);
      setFormData({
        fullName: "",
        email: "",
        age: "",
        gender: "",
        bio: ""
      });
    }
  }

  const handlefillChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="form">
        <div>
          <label htmlFor="fullName">Full name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handlefillChange} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handlefillChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" value={formData.age} onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
              setFormData((prev) => ({ ...prev, age: onlyNumbers }));
            }}
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handlefillChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div>
          <label>Bio</label>
          <textarea name="bio" value={formData.bio} onChange={handlefillChange} />
          {errors.bio && <span className="error">{errors.bio}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && <ModlePreview show={submitted} onClose={() => setSubmitted(null)} />}
    </>
  )
}

export default UserForm
