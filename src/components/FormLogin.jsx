import React, {useState} from "react";

const FormLogin = ({handleLogin}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await handleLogin(username, password);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1>會員登入</h1>
        <div>
            <label>帳號</label>
            <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label>密碼</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">登入</button>
    </form>
    )
}

export default FormLogin;