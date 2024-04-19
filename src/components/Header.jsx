import React from "react";

const Header = () => {
    return(
        <div style={{display: 'flex',margin: 'auto', alignItems: 'center', padding: '10px', background:'#3a7b4d'}}>
            <div style={{ marginRight: '10px' }}>Q</div>
            <div style={{flex:1,  textAlign: 'center' }}>
                <h1>Health Records</h1>
            </div>
            
        </div>

)}

export default Header;