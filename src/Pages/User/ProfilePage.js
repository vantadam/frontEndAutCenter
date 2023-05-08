import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [group, setGroup] = useState({});
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/auth/CurrentAuthent";
    const token = localStorage.getItem("refresh_token");
    axios
      .get("http://localhost:8080/api/responsable/listUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // setUser(response.data.firstName, response.data.lastName);
        // setGroup(response.data.group);
        // setChildren(response.data.children);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* <h1>Welcome, {user.firstName} </h1> */}
      {/* <h2>Your Group: {group}</h2> */}
      {/* <ul>
        {children.map((child) => (
          <li key={child.id}>{child.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProfilePage;
