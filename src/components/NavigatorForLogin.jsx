import React from "react";
import {Link} from "react-router-dom"

const NavigatorForLogin = () => {
    return (
        <nav>
            <ul style={{display: 'flex',margin: 'auto', alignItems: 'center', padding: '10px', background:'#3cb371'}}>
                <li style={{display: 'inline'}}>
                    <Link to={"/register"}>註冊</Link>
                </li>
                <li style={{display: 'inline', paddingLeft: '5%'}}>
                    <Link to={"/login"}>登入</Link>
                </li>
                <li style={{display: 'inline', paddingLeft: '5%'}}>
                    <Link to={"/"}>首頁</Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavigatorForLogin;