import React, { useEffect, useState } from "react";
import ListGroup from "./ListGroup";
import NavBar from './AdminNavbar'

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Group() {
    const [checked, setChecked] = useState(1);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Group List', value: '1' },
        { name: 'Add Group', value: '2' },


    ];



    return (
        <div>
            <NavBar />
            <br />
            <br />
            <h1>Consult Groups</h1>
            <br />



            <br />

            <ListGroup />



        </div>
    )
}

export default Group