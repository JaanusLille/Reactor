import React from 'react'; 
import '../../styles/HomePage.css'; 
import WhiteComponent from './WhiteComponent.js';

const WhiteComponentRow = () => {

    const divStyle = {
        display: 'flex',
        // alignItems: 'center',
        // width:'full'
    };
    return(
        <>
            <div style={divStyle}>
                <WhiteComponent/>
                <WhiteComponent/>
                <WhiteComponent/>
                <WhiteComponent/>
                
                <WhiteComponent/>
                <WhiteComponent/>
                <WhiteComponent/>
                <WhiteComponent/>


            </div>
        </>
    );
}
export default WhiteComponentRow;