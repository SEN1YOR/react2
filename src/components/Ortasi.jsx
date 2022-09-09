import React from 'react';
import bekend from '../img/Backend.svg'
import frontend from '../img/Frontend.svg'
import katak from '../img/katak.png'
import qator from '../img/qatorlar.png'
import qalam from '../img/qalam.png'
import ux from '../img/Ux.svg'
import fayl from '../img/fayl.svg'
import orqa from '../img/aylana.png'
import qiw from '../img/qiw.svg'
import soya from '../img/soxl.svg'
import maska from '../img/tog.svg'
const ortasi = () => {
    return (
        <>
            <div className="katta" style={{ width: "auto", height: "2000px", backgroundColor: "#3D3D3D" }}>
                <div className="cardlar" style={{ textAlign: "center", paddingTop: "50px" }}>
                    <img src={katak} alt="" />
                    <img src={qator} alt="" />
                    <img src={qalam} alt="" />
                    <img src={ux} alt="" />
                    <br />
                    <img src={bekend} alt="" />
                    <img src={frontend} alt="" />
                    <img src={fayl} alt="" />
                </div>
                <div className="tagi" style={{ marginTop: "200px", marginLeft: "300px" }}>
                    <img src={orqa} alt="" />

                </div>
                <div className="jami" style={{ display: "flex",position:"absolute",marginTop:"-1000px",marginLeft:"500px",backgroundColor:"#3D3D3D"}}>

                    <div className="rasimlar">
                        <img src={qiw} alt="" style={{ width: "300px", height: "400px" }} />
                        <br />
                        <img src={maska} alt="" style={{ width: "300px", height: "400px" }} />
                    </div>
                    <div className="matn">

                        <p style={{ width: "300px", height: "400px" , }}>Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
                            By trusting me, you will get the maximum return for your project, save your nerves and time.
                            If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.</p>
                            
                    </div>
                    

                                        
                <img src={soya} alt="" />
                </div>
            </div>

        </>
    );
};

export default ortasi;