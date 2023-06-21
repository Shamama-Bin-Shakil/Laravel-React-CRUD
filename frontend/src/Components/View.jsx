import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const View = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/get", {
      method: "GET",
    });
    const result = await response.json();
    setData(result);
  };
  useEffect(() => {
    getData();
  }, []);

  const onDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
      method: "GET",
    });
    await response.json();
    getData();
  };

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h1>User Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => {
              return (
                <tr key={element.id}>
                  <th>{element.id}</th>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>
                    <Link
                      to={`edit/${element.id}`}
                      className="btn btn-warning btn-sm mx-2"
                    >
                      Edit
                    </Link>
                    <span
                      onClick={() => onDelete(element.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
