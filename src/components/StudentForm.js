import React, { useState } from "react";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    major: "",
  });

  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(student);
    // make API call or save student data
    setStudent({ name: "", email: "", major: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Major:
        <input
          type="text"
          name="major"
          value={student.major}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
