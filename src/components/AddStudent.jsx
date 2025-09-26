import React from 'react'
import { useState } from "react";


  const AddStudent = ({handleAddStudent}) => {
  const [formData,setformData] = useState({
  fullName: "",
  email: "",
  phone: "",
  program: "",
  graduationYear: 2023,
  graduated: false,
  })

  const handleInputChange=(element)=>{
    const {name,type,value,checked} = element.target;
    setformData({...formData,[name]:type==='checkbox'?checked:value})
  }

  const onSubmit = (element) => {
  element.preventDefault();
  handleAddStudent(formData);};
  
  return (
    <>
      {/* FORM */}
      <form onSubmit={onSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input 
            name="fullName" type="text" placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleInputChange}
            />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image"
            value={formData.image}
            onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" 
            value={formData.phone}
            onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" type="program" placeholder="program"
             value={formData.program}
             onChange={handleInputChange}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={formData.graduationYear}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" 
            value={formData.graduated}
            onChange={handleInputChange}
            />
          </label>

          <button type="submit" >Add Student</button>
        </div>

      </form>
      {/* FORM END */}
</>

  )
  }
export default AddStudent