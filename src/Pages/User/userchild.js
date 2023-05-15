import React, { useState, useEffect } from 'react';
import UserNavbar from './UserNavbar';
import axios from 'axios';
import { Form, FormControl, Button } from 'react-bootstrap';

const Userchild = () => {
    const [notes, setNotes] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [selectedChild, setSelectedChild] = useState(null);
    const token = localStorage.getItem("refresh_token");
    const handleChildSelect = (event) => {
        setSelectedChild(event.target.value);
    };




    const [child, setchild] = useState([]);
    const [endDate, setEndDate] = useState('');

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


    const handlePostRequest = async () => {
        if (selectedChild) {
          try {
            const response = await axios.get(
              `http://localhost:8090/api/responsable/${selectedChild}/notes`,
              {

                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setNotes(response.data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        }
      };

    useEffect(() => {
        fetchchild();

    }, []);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    return (
        <div>
            <UserNavbar />
            <br />
            <br />

            <br />
            <h1>Child Notes</h1>
            <br />
            <div>
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
                </Form.Group>


    
            </div>
            <div>
               
            </div>
            <Button variant="primary" onClick={handlePostRequest}>
                Add to Group
            </Button>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default Userchild;