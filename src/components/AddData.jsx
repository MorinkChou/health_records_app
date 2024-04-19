import React, { useState, useEffect } from "react";
import axios from "axios";

const AddData = ({token}) => {
    const [formData, setFormData] = useState({
        user: '',
        weight: '',
        blood_pressure: '',
        heart_rate: '',
        blood_sugar: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/health-records/', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            // Assuming response.data contains user information like ID or username
            if (response.data.length > 0) {
              const latestRecord = response.data[response.data.length - 1];
              setFormData((prevFormData) => ({
                ...prevFormData,
                user: latestRecord.user,
                weight: latestRecord.weight.toString(),
                blood_pressure: latestRecord.blood_pressure.toString(),
                heart_rate: latestRecord.heart_rate.toString(),
                blood_sugar: latestRecord.blood_sugar.toString()
              }));
            }
          } catch (error) {
            console.error('Failed to fetch user data', error);
          }
        };
    
        fetchUserData();
      }, [token]);

    const handleChange = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const { weight, blood_pressure, heart_rate, blood_sugar, ...rest } = formData;
            const dataToSubmit = {
                ...rest,
                user: parseInt(formData.user),
                weight: parseFloat(weight),
                blood_pressure: parseFloat(blood_pressure),
                heart_rate: parseInt(heart_rate),
                blood_sugar: parseFloat(blood_sugar)
            };

            const response = await axios.post(
                'http://127.0.0.1:8000/api/health-records/create/',
                dataToSubmit,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log('Data added successfully:', response.data)

            setFormData({
                user: formData.user,
                weight: '',
                blood_pressure: '',
                heart_rate: '',
                blood_sugar: ''
            });
        } catch (error) {
            console.error('Failed to add data:' , error);
        }
    };
    
    return(
        <div>
            <h2>新增資料</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>體重</label>
                    <input type="text" name="weight" value={formData.weight} onChange={handleChange}></input>
                </div>
                <div>
                    <label>血壓</label>
                    <input type="text" name="blood_pressure" value={formData.blood_pressure} onChange={handleChange}></input>
                </div>
                <div>
                    <label>心律</label>
                    <input type="text" name="heart_rate" value={formData.heart_rate} onChange={handleChange}></input>
                </div>
                <div>
                    <label>血糖</label>
                    <input type="text" name="blood_sugar" value={formData.blood_sugar} onChange={handleChange}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddData;