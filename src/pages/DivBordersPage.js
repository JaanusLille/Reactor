import React, { useEffect } from 'react'; 
import DivBordersPageComponent from '../components/DivBordersPage/DivBordersPageComponent.js';
// import WhiteComponent from '../components/DivBordersPage/WhiteComponent.js';
import WhiteComponentRow from '../components/DivBordersPage/WhiteComponentRow.js';
import FlagOfEstonia from '../components/DivBordersPage/FlagOfEstonia.js';
import Tricolour from '../components/DivBordersPage/PropsFlags/Tricolour.js';
import Triband from '../components/DivBordersPage/PropsFlags/Triband.js';
import Bicolour from '../components/DivBordersPage/PropsFlags/Bicolour.js';
import Biband from '../components/DivBordersPage/PropsFlags/Biband.js';
import Triangles from '../components/DivBordersPage/PropsFlags/Triangles.js';
import BigFlagOfEstonia from '../components/DivBordersPage/BigFlagOfEstonia.js';
// import '../styles/HomePage.css'; 

const DivBordersPage = () => {

    const divStyle = {
        margin: 'auto',
        padding: '7px'
    };
    useEffect(() => {
        // console.log({useEffect});
        // console.log("useEffect");
        // alert("useEffect");
    });
    // Nii renderdab useEffect 2 korda (igal laadimisel/värskendamisel)

    useEffect(() => {
        console.log("useEffect");
    }, []);
    // Nii samamoodi 2 korda

    return (
        <>
            <BigFlagOfEstonia/>
            <DivBordersPageComponent/>
            <div style={divStyle}>
                <WhiteComponentRow/>
            </div>
            <FlagOfEstonia/>
            {/* <Tricolour color1="purple" color2="black" color3="white"/> */}
            <Tricolour color1="#A4343A" color2="white" color3="#A4343A"/>
            <Tricolour color1="yellow" color2="green" color3="red"/>
            <Bicolour color1="white" color2="red"/>
            <Bicolour color1="blue" color2="yellow"/>
            <Triband color1="blue" color2="white" color3="red"/>
            <Triband color1="green" color2="white" color3="red"/>
            <Triband color1="blue" color2="yellow" color3="red"/>
            <Biband color1="white" color2="red"/>
            <Triangles/>
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
