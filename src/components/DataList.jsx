import React, { useState, useEffect} from "react";
import axios from 'axios';

const DataList = ({token}) => {
    const [healthRecords, setHealthRecords] = useState([]);
    const [editingRecoed, setEditingRecord] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/health-records/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setHealthRecords(response.data);
        } catch (error) {
            console.error('Failed to fetch data', error);
        }
    };

    const handleEdit = (record) => {
        setEditingRecord(record);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setEditingRecord(null);
        setShowModal(false);
    };

    return(
        <div>
            <h2>健康紀錄</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>weight</th>
                        <th>Blood Pressure</th>
                        <th>Heart Rate</th>
                        <th>Blood Suger</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {healthRecords.map(record => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.user}</td>
                            <td>{record.weight}</td>
                            <td>{record.blood_pressure}</td>
                            <td>{record.heart_rate}</td>
                            <td>{record.blood_sugar}</td>
                            <td>{record.date}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default DataList;