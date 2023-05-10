import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("refresh_token");
    axios
      .get("http://localhost:8090/api/responsable/CurrentAuthent", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data.firstName);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>
        Welcome, {user} !
      </h1>
    </div>
  );
};

export default ProfilePage;
