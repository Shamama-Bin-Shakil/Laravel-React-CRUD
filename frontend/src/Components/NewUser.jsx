import { useState } from "react";
import Navbar from "./Navbar";

const NewUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setForm((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const dataSubmit = async (e) => {
    console.log(form);
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1>New User Create</h1>
        <form onSubmit={dataSubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              onChange={onChangeHandle}
              value={form.name}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Name"
              onChange={onChangeHandle}
              value={form.email}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              onChange={onChangeHandle}
              value={form.password}
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add New User
          </button>
        </form>
      </div>
    </>
  );
};

export default NewUser;
