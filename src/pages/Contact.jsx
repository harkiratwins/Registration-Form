import React, { useState } from "react";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(contactInfo);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3 className="App">Contact form</h3>
          <div className="App">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contactInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="App">
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={contactInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="App">
            <label>Contact:</label>
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
              value={contactInfo.phonenumber}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="App">
            <button>Submit Contact</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
