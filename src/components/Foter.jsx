import React from 'react';
import coinot from '../img/koinot.svg'
import toj from '../img/TOJ.png'
import icon from '../img/ICON KA.png'
const Foter = () => {
    return (
        <>
            <div className="foter" style={{ width: "auto", height: "800px", backgroundColor: "#1C1C1C" }}>

                <div className="bowi" style={{ textAlign: "center", fontWeight: "700", padding: "30px", color: "white" }}>
                    <h1>Portfolio</h1>
                </div>
                <div className="matin" style={{display:"flex",width:"700px",height:"500px",backgroundColor:"#2F2F2F",textAlign:"center" , marginLeft:"600px",padding:"20px",borderRadius:"25px"}}>
                    <div className="rasimlar">
                        <img src={coinot} alt="" style={{width:"400px",height:"500px",borderRadius:"25px"}} />
                    </div>
                    <div className="matn" style={{width:"250px",color:"white"}}>
                        <h4>Landing Ice-cream</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</p>
                        <a href="#" style={{clear:"#846417"}}>More -></a>
                    </div>
                </div>
            </div>
            <div className="foter" style={{display:"flex" ,width:"auto",height:"300px",backgroundColor:"#2F2F2F",fontSize:"12px",paddingLeft:"500px",color:"white",}}>
                <div className="hom" style={{margin:"50px"}}>
                    <h1>Home</h1>
                    <h1>About me</h1>
                    <h1>Portfolio</h1>
                    <h1>Contact</h1>
                </div>
                <div className="Contact" style={{margin:"50px"}}>
                    <h1>Contact:</h1>
                    <h1>Email: notitanic33@gmail.com</h1>
                    <h1>Inst: notitanic33</h1>
                    <h1>Calls: +7 (900) - 121 - 54 -54</h1>
                </div>
                <div className="RAS">
                    <img src={toj} alt="" style={{margin:"50px"}} />
                    <img src={icon} alt="" style={{margin:"50px"}} /><br />
                    <h2>Copyright © 2021, Notitanic</h2>
                </div>
            </div>
        </>
    );
};

export default Foter;