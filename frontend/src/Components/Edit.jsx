import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [updateform, setUpdateForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { id } = useParams();

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setUpdateForm((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const update = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/edit/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      console.log(result);
      setUpdateForm({
        name: result.name,
        email: result.email,
        password: result.password,
      });
    };
    update();
  }, []);

 
    const dataSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`http://127.0.0.1:8000/api/update/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateform),
      });
      const result = await response.json();
      console.log(result);
    };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1>Update User Profile</h1>
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
              value={updateform.name}
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
              value={updateform.email}
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
              value={updateform.password}
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update User Detail
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
