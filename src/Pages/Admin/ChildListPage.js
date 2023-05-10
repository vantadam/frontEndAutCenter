import React, { useEffect, useState } from "react";
import axios from "axios";
import ChildCard from "./ChildCard";

const ChildListPage = () => {
  const [children, setChildren] = useState([]);
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

  return (
    <>
    <h1>Children List</h1>
    <div
      
      >
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "normal",
       
        margin: "1rem 0",
      }}>
        {children.map((child) => (
          <ChildCard  key={child.id} child={child} />
          ))}
      </div>
    </div>
          </>
  );
};

export default ChildListPage;
