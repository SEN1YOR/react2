import React,{useState} from 'react';
const Main = () => {
    const [data, setData] = useState(0)
    function qosh() {
        setData(data + 1)
    }
    function ayriw() {
        setData(data - 1)
    }
    return (

        <>
        <div className="kankulyatot" style={{fontSize:"50px",textAlign:"center"}}>

<div className="stil" style={{width:"300px",height:"200px",backgroundColor:"skyblue",textAlign:"center",marginLeft:"400px",marginTop:"100px",borderRadius:"30px"}}>

{data} <br />

<button onClick={qosh} style={{padding:"15px",margin:"25px",fontSize:"20px",color:"white",backgroundColor:"black",borderRadius:"0px 30px 30px 0px"}}>+</button>

<button onClick={() => setData(data == 0)} style={{padding:"15px",margin:"25px",fontSize:"20px",color:"red",backgroundColor:"blue",border:"none",borderRadius:"30px 30px 0px 0px"}}>0</button>

<button onClick={ayriw} style={{padding:"15px",margin:"25px",fontSize:"20px",color:"blue",backgroundColor:"red",border:"none",borderRadius:"30px 0px 0px 30px"}}>-</button>

</div>
</div>
        </>
    );
};

export default Main;