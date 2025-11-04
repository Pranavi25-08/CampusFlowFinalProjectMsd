import React, { useState, useEffect } from "react";

const Placements = () => {
  const [placements, setPlacements] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/placements");
      const data = await response.json();
      setPlacements(data);
    } catch (error) {
      console.error("Error fetching placements:", error);
    }
  };

  const addPlacement = async () => {
    if (company && role && salary) {
      try {
        const response = await fetch("http://localhost:5000/api/placements", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ company, role, salary }),
        });
        const newPlacement = await response.json();
        setPlacements([...placements, newPlacement]);
        setCompany("");
        setRole("");
        setSalary("");
      } catch (error) {
        console.error("Error adding placement:", error);
      }
    }
  };

  const deletePlacement = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/placements/${id}`, {
        method: "DELETE",
      });
      setPlacements(placements.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting placement:", error);
    }
  };

  return (
    <div className="content">
      <h2> Placement Opportunities</h2>
      <div className="event-form">
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Package (LPA)"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button onClick={addPlacement}>Add</button>
      </div>

      <div className="event-list">
        {placements.map((p) => (
          <div key={p._id} className="event-card">
            <h3>{p.company}</h3>
            <p>Role: {p.role}</p>
            <p>Package: {p.salary} LPA</p>
            <button onClick={() => deletePlacement(p._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placements;
