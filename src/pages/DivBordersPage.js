import React from 'react'; 
import DivBordersPageComponent from '../components/DivBordersPage/DivBordersPageComponent.js';
// import WhiteComponent from '../components/DivBordersPage/WhiteComponent.js';
import WhiteComponentRow from '../components/DivBordersPage/WhiteComponentRow.js';
import FlagOfEstonia from '../components/DivBordersPage/FlagOfEstonia.js';
import BigFlagOfEstonia from '../components/DivBordersPage/BigFlagOfEstonia.js';
// import '../styles/HomePage.css'; 

const DivBordersPage = () => {

    const divStyle = {
        margin: 'auto',
        padding: '7px'
    };

    return (
        <>
            <DivBordersPageComponent/>
            <div style={divStyle}>
                <WhiteComponentRow/>
            </div>
            <FlagOfEstonia/>
            <div style={divStyle}>
                <WhiteComponentRow/>
            </div>
            <BigFlagOfEstonia/>
            <div style={divStyle}>
                <WhiteComponentRow/>
            </div>
        </>
    );
}
export default DivBordersPage;
