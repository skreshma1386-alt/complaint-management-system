import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ComplaintForm.css";


function ComplaintForm() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: ""
  });


  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    if (!formData.name || !formData.email || !formData.complaint) {

      alert("Please fill all fields");
      return;

    }


    try {

      setLoading(true);


      await axios.post(
        "http://localhost:3001/api/complaints",
        formData
      );


      setLoading(false);


      alert("Complaint submitted successfully");


      navigate("/thankyou");


    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Error submitting complaint");

    }

  };



  return (

    <div className="complaint-container">

      <div className="complaint-card">

        <h1>Submit Complaint</h1>


        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />


          <textarea
            name="complaint"
            placeholder="Enter your complaint"
            value={formData.complaint}
            onChange={handleChange}
          />


          <button type="submit">

            {loading ? "Submitting..." : "Submit Complaint"}

          </button>


        </form>

      </div>

    </div>

  );

}


export default ComplaintForm;