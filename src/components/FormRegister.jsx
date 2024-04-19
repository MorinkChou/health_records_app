import React,{useState} from "react";
import axios from "axios";

const FormRegister = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/token/",{
                username,
                password,
            });
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return(

        <form onSubmit={handleRegister}>
            <h1>會員註冊</h1>
            <div>
                <label>帳號</label>
                <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>密碼</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="註冊" />
        </form>

    )
}

export default FormRegister;