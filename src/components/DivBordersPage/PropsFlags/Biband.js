import React from 'react'; 
import '../../../styles/HomePage.css'; 

const Biband = (props) => {

    return(
        <>
            {/* <h1>Hello, {props.name}</h1>; */}
            <div className='Flag' style={{display: "flex"}}>
                {/* <div style={{backgroundColor: "blue", height: "10vmin"}} */}
                <div style={{backgroundColor: `${props.color1}`, width: "50%", height: "30vmin"}}
                >
                </div>
                <div style={{backgroundColor: `${props.color2}`, width: "50%", height: "30vmin"}}
                >
                </div>
            </div>
        </>
    );
}
export default Biband;