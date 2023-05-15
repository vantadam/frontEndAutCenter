import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import UserNavbar from "./UserNavbar";
import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";

function AddNote() {

    const [inputs, setInputs] = useState({
        subject: "",
        desc: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const [groups, setGroups] = useState([]);
    const [selectedChild, setSelectedChild] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const token = localStorage.getItem("refresh_token");

    const handleChildSelect = (event) => {
        setSelectedChild(event.target.value);
    };




    const [child, setchild] = useState([]);

    useEffect(() => {

        fetchchild();
    }, []);

    const handlePostRequest = async () => {
        if (selectedChild) {
            try {
                const response = await axios.post(
                    `http://localhost:8090/api/responsable/AddchildNote/${selectedChild}`,
                    inputs,
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

    return (
        <div>
            <UserNavbar />
            <br />
            <br />
            <h1> add note</h1>
            <br />
            <div style={{ width: "500px", margin: "auto" }}>
                <Form>



                    <Form.Group controlId="childSelect">
                        <Form.Label>Child:</Form.Label>
                        <FormControl as="select" onChange={handleChildSelect}>
                            <option value="">Select a child</option>
                            {child.map((child) => (
                                <option key={child.id} value={child.id}>
                                    {child.name}
                                </option>
                            ))}
                        </FormControl>
                    </Form.Group><br />
                    <TextField
                        margin="normal"
                        type="textarea"
                        variant="outlined"
                        placeholder="subject"
                        name="subject"
                        value={inputs.subject}
                        onChange={handleChange}
                        required
                    /><br />

                    <TextField
                        margin="normal"
                        type="textarea"
                        variant="outlined"
                        placeholder="Description"
                        name="desc"
                        value={inputs.desc}
                        onChange={handleChange}
                        required
                    /><br />

                    <Button variant="primary" onClick={() => { handlePostRequest() }}>
                        Add to Group
                    </Button>
                </Form>

            </div>
        </div>
    )
}

export default AddNote