import React from 'react'; 
import '../../../styles/HomePage.css'; 

const Bicolour = (props) => {

    return(
        <>
            {/* <h1>Hello, {props.name}</h1>; */}
            <div className='Flag'>
                {/* <div style={{backgroundColor: "blue", height: "10vmin"}} */}
                <div style={{backgroundColor: `${props.color1}`, height: "15vmin"}}
                >
                </div>
                <div style={{backgroundColor: `${props.color2}`, height: "15vmin"}}
                >
                </div>

            </div>
        </>
    );
}
export default Bicolour;