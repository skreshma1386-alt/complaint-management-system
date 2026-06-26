import { useEffect, useState } from "react";
import API from "../services/api";

function ComplaintList() {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    try {
      const response = await API.get("/complaints");
      setComplaints(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className="list-container">
      <h2>All Complaints</h2>

      {complaints.map((item) => (
        <div className="card" key={item._id}>
          <h3>{item.name}</h3>

          <p>Email: {item.email}</p>

          <p>Complaint: {item.complaint}</p>

          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default ComplaintList;