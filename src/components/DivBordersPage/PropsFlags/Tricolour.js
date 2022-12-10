import React from 'react'; 
import '../../../styles/HomePage.css'; 

const Tricolour = (props) => {

    return(
        <>
            {/* <h1>Hello, {props.name}</h1>; */}
            <div className='Flag'>
                {/* <div style={{backgroundColor: "blue", height: "10vmin"}} */}
                <div style={{backgroundColor: `${props.color1}`, height: "10vmin"}}
                >
                </div>
                <div style={{backgroundColor: `${props.color2}`, height: "10vmin"}}
                >
                </div>
                <div style={{backgroundColor: `${props.color3}`, height: "10vmin"}}
                >
                </div>
            </div>
        </>
    );
}
export default Tricolour;