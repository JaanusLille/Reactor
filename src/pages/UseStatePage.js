import React from 'react'; 
import UseStatePageComponent from '../components/UseStatePage/UseStatePageComponent.js';
import UseState2Component from '../components/UseStatePage/UseState2Component.js';
import FlagOfEstonia from '../components/DivBordersPage/FlagOfEstonia.js';


const UseStatePage = () => {

    return (
        <div>
            <UseStatePageComponent/>
            <UseState2Component/>
            <FlagOfEstonia/>
        </div>
    );
}
export default UseStatePage;
