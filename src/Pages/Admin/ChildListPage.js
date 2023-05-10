import React, { useEffect, useState } from "react";
import axios from "axios";
import ChildCard from "./ChildCard";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const ChildListPage = () => {
  const [children, setChildren] = useState([]);
  const [ref,refrech] = useState([]);
  const token = localStorage.getItem("refresh_token");
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/responsable/listChild", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setChildren(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const delchild = async(id) =>  {
    const token = localStorage.getItem("refresh_token");
    const res = await axios.delete(`http://localhost:8090/api/responsable/deleteChild/${id}`,
    {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        refrech();

}


  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Disabled Card</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Group</th>
        <th>Birth Date</th>
      </tr>
    </thead>
    <tbody>
      {children.map((row) => (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.lastName}</td>
          <td>{row.age}</td>
          <td>{row.disabledCard ? row.disabledCard : "-"}</td>
          <td>{row.createdAt}</td>
          <td>{row.updatedAt}</td>
          <td>{row.group ? row.group : "-"}</td>
          <td>{row.birthDate}</td>
          <td><Button variant="danger" onClick={()=>{delchild(row.id)}}>Delete</Button></td>
        </tr>
      ))}
    </tbody>
  </Table>
  );
};

export default ChildListPage;
