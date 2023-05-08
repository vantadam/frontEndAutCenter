
import React, { useState, useEffect } from 'react';
import axios from "axios";

function ManageUser() {
    const effect = async (e) => {


        try {
            const res = await axios.get('http://localhost:8080/api/responsable/listUser');
            console.log(res.data);

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {

        effect()

    }, []);
    return (
        <div>ManageUser</div>
    )
}

export default ManageUser