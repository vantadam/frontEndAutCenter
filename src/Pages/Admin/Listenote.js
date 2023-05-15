import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import NavBar from "./AdminNavbar";

function Listnote() {
    const [notes, setNotes] = useState([]);
    const [ref, refrech] = useState([]);
    const token = localStorage.getItem("refresh_token");
    useEffect(() => {
        axios
            .get("http://localhost:8090/api/responsable/listNote", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setNotes(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div>
            <NavBar />
            <br />
            <br />
            <h1>list note</h1>
            <br />



            <br />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Child ID</th>
                        <th>Child Name</th>
                        <th>Child Last Name</th>
                        <th>Child Age</th>
                        <th>Child Disabled Card</th>
                        <th>Child Group</th>
                        <th>Child Birth Date</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.subject}</td>
                            <td>{item.desc}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.updatedAt}</td>
                            <td>{item.child ? item.child.id : null}</td>
                            <td>{item.child ? item.child.name : null}</td>
                            <td>{item.child ? item.child.lastName : null}</td>
                            <td>{item.child ? item.child.age : null}</td>
                            <td>{item.child ? item.child.disabledCard : null}</td>
                            <td>{item.child ? item.child.group : null}</td>
                            <td>{item.child ? item.child.birthDate : null}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Listnote