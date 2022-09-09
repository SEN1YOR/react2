import React from 'react';
import rasm from '../img/tepa.svg'
import rasim1 from '../img/maska (2).png'
const Header = () => {
    return (
        <>
            <div className="bowi" style={{ backgroundColor: "#2A2A2A", width: "auto", height: "648px" }}>
                <div className="rasim" style={{ textAlign: "center" }}>
                    <img src={rasm} alt="" />
                </div>
                <div className="katta" style={{display:"flex",marginLeft:"400px", justifyContent:"space-between",width:"1300px",height:"auto",marginTop:"100px"}}>
                    <div className="matin" style={{ width: "200px", height: "500px", color: "white", fontFamily: "cursive" }}>
                        <h1>Hello</h1>
                        <h2 style={{ fontSize: "40px" }}>I'm GlebKostrubov</h2>
                        <p style={{ color: "#3F3F3F" }}>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
                        <button style={{width:"150px",height:"40px",backgroundColor:"#E2A100" ,border:"none",borderRadius:"8px",marginTop:"30px",fontSize:"15px",fontWeight:"800"}}> Contact me</button>
                    </div>
                    <div className="ras" >
                        <img src={rasim1} alt="" style={{width:"600px",height:"600px",}} />
                    </div>
                </div>

            </div>

        </>
    );
};

export default Header;