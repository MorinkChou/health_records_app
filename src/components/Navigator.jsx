import React from "react";
import {Link} from "react-router-dom"

const Navigator = ({handleLogout}) => {
    return (
        <ul style={{display: 'flex',margin: 'auto', alignItems: 'center', padding: '10px', background:'#3cb371'}}>
            <li style={{display: 'inline'}}>
                <Link to={"/datalist"}>健康紀錄</Link>
            </li>
            <li style={{display: 'inline', paddingLeft: '5%'}}>
                <Link to={"/add_data"}>新增資料</Link>
            </li>
            <li style={{display: 'inline', paddingLeft: '5%'}}>
                資料彙整
            </li>
            <li style={{display: 'inline', paddingLeft: '5%'}}>
                <Link to={"/"}>首頁</Link>
            </li>
            <li style={{display: 'inline', paddingLeft: '5%'}} onClick={handleLogout} >
                <Link to={"/"}>登出</Link>
            </li>

        </ul>
    )
}

export default Navigator;