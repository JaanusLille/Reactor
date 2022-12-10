import React from 'react'; 
import '../../../styles/HomePage.css'; 

const Triband = (props) => {

    return(
        <>
            {/* <h1>Hello, {props.name}</h1>; */}
            <div className='Flag' style={{display: "flex"}}>
                {/* <div style={{backgroundColor: "blue", height: "10vmin"}} */}
                <div style={{backgroundColor: `${props.color1}`, width: "33.333%", height: "30vmin"}}
                >
                </div>
                <div style={{backgroundColor: `${props.color2}`, width: "33.333%", height: "30vmin"}}
                >
                </div>
                <div style={{backgroundColor: `${props.color3}`, width: "33.333%", height: "30vmin"}}
                >
                </div>
            </div>
        </>
    );
}
export default Triband;