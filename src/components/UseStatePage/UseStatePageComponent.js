import React, { useState } from 'react'; 

const UseStatePageComponent = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    // const incrementFive = () => {
    //     for(let i = 0; i<5; i++){
    //         setCount(prevCount => prevCount + 1);
    //     }
    // }
    // See funktsioon käivitab funktsioon "setCount" nende parameetritega 5 korda

    // const decrementFive = () => {
    //     for(let i = 5; i>0; --i){
    //         setCount(prevCount => prevCount - 1);
    //     }
    // }
    // See funktsioon käivitab funktsioon "setCount" nende parameetritega 5 korda

    return(
        <>
            <div>
                <label>Count: {count}    </label>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(count + 5)}>Increment 5</button>
                <button onClick={() => setCount(count - 5)}>Decrement 5</button>
                <button onClick={() => setCount(count + 1000)}>{count}</button>
                <button onClick={() => setCount(initialCount)}>Reset</button>
                {/* <button onClick={incrementFive}>Increment</button>
                <button onClick={decrementFive}>Decrement</button> */}
            </div>
        </>
    );
}
export default UseStatePageComponent;