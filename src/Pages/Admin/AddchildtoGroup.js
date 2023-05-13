import React, { useState, useEffect } from "react";
import axios from "axios";

const AddChildToGroup = () => {
  const [child, setchild] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const token = localStorage.getItem("refresh_token");

  useEffect(() => {
    fetchchild();
    fetchGroups();
  }, []);

  const handlePostRequest = async () => {
    if (selectedChild && selectedGroup) {
      try {
        const response = await axios.post(
          `http://localhost:8090/api/responsable/group/user/${selectedGroup}/child/${selectedChild}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error making the request:", error);
      }
    }
  };

  const fetchchild = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8090/api/responsable/listChild",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setchild(response.data);
    } catch (error) {
      console.error("Error fetching child:", error);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8090/api/responsable/GroupList",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGroups(response.data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  const handleChildClick = (ChildId) => {
    setSelectedChild(ChildId);
  };

  const handleGroupClick = (groupId) => {
    setSelectedGroup(groupId);
  };

  return (
    <div>
      <h3>child:</h3>
      <ul>
        {child.map((Child) => (
          <li key={Child.id} onClick={() => handleChildClick(Child.id)}>
            {Child.name}
          </li>
        ))}
      </ul>

      <h3>Groups:</h3>
      <ul>
        {groups.map((group) => (
          <li key={group.id} onClick={() => handleGroupClick(group.id)}>
            {group.nameG}
          </li>
        ))}
      </ul>

      <button onClick={handlePostRequest}>Add to Group</button>

      {selectedChild && <p>Selected Child: {selectedChild}</p>}
      {selectedGroup && <p>Selected Group: {selectedGroup}</p>}
    </div>
  );
};

export default AddChildToGroup;