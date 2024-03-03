import React, { useState } from 'react';
import { addEvent } from '../../api_helpers/api_helpers';
import styles from "./Forms.module.css";

const customFont={
  margin: "0",
  display: "flex",
  alignItems: "center",
  color: "grey"
}

const AddEvent = ()=>{
  const [formData, setFormData] = useState({
        id: 0,
        name: "",
        dateofevent: "",
        location: "",
        description: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    formData.id = Number(formData.id);
    console.log('Form submitted:', formData);

    addEvent(formData).then((data)=>{
        alert(data);
    }).catch((err)=>console.log(err));
    // Reset form after submission
    setFormData({
        id: 0,
        name: "",
        dateofevent: "",
        location: "",
        description: ""
    });
  };

  return (
    <>
    <div className={styles.formContainer}>
    <form className={styles.formBox} onSubmit={handleSubmit}>
    <h2 className={styles.formTitle}>Add An Event</h2>
    <div className={styles.formFields}>
    <label className={styles.fieldColumn} >
        <p style={customFont}>Event ID: </p>
        <input
          type="number"
          name="id"
          className={styles.inputField}
          value={formData.id}
          onChange={handleChange}
          style={{ width: "80%"}}
          required
        />
      </label>
      <br />
      <label className={styles.fieldColumn} >
        <input
          type="text"
          name="name"
          className={styles.inputField}
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
          required
        />
      </label>
      <br />
      <label className={styles.fieldColumn} >
        <input
          type="text"
          name="location"
          className={styles.inputField}
          value={formData.location}
          onChange={handleChange}
          placeholder='Location'
          required
        />
      </label>
      <br />
      <label className={styles.fieldColumn} >
        <input
          type="date"
          name="dateofevent"
          className={styles.inputField}
          value={formData.dateofevent}
          onChange={handleChange}
          placeholder='Event Date'
          style={{paddingRight: "15px"}}
          required
        />
      </label>
      <br />
      <label className={styles.fieldColumn} >
        <input
          type="text"
          name="description"
          className={styles.inputField}
          value={formData.description}
          onChange={handleChange}
          placeholder='Description'
          required
        />
      </label>
    </div>
      <button className={styles.formButton} type="submit">Submit</button>
    </form>
    </div>
    
    </>
  );
};

export default AddEvent;
