import React, { useState } from 'react'; 


const UseState2Component = () => {
  const [brand, setBrand] = useState("Opel");
  const [model, setModel] = useState("universaal");
  const [year, setYear] = useState("1999");
  const [color, setColor] = useState("roheline");

  return (
    <>
      <br></br>
      <div>
        <button onClick={() => setBrand("Volkswagen")}>Volkswagen</button>
        <button onClick={() => setBrand("Opel")}>Opel</button>
        <button onClick={() => setBrand("Volvo")}>Volvo</button>
        <button onClick={() => setBrand("Kia")}>Kia</button>
        <button onClick={() => setBrand("Mitsubishi")}>Mitsubishi</button>
      </div>
      <div>
        <button onClick={() => setModel("sõiduauto")}>Sõiduauto</button>
        <button onClick={() => setModel("universaal")}>Universaal</button>
        <button onClick={() => setModel("kabriolett")}>Kabriolett</button>
        <button onClick={() => setModel("furgoon")}>Kabriolett</button>
        <button onClick={() => setModel("maastikuauto")}>Maastikuauto</button>
        <button onClick={() => setModel("mikrobuss")}>Mikrobuss</button>
        <button onClick={() => setModel("veoauto")}>Veoauto</button>
      </div>
      <div>
        <button onClick={() => setYear("1995")}>1995</button>
        <button onClick={() => setYear("1996")}>1996</button>
        <button onClick={() => setYear("1997")}>1997</button>
        <button onClick={() => setYear("1998")}>1998</button>
        <button onClick={() => setYear("1999")}>1999</button>
        <button onClick={() => setYear("2000")}>2000</button>
        <button onClick={() => setYear("2001")}>2001</button>
        <button onClick={() => setYear("2002")}>2002</button>
        <button onClick={() => setYear("2003")}>2003</button>
        <button onClick={() => setYear("2004")}>2004</button>
        <button onClick={() => setYear("2005")}>2005</button>
      </div>
      <div>
        <button onClick={() => setColor("punane")}>punane</button>
        <button onClick={() => setColor("sinine")}>sinine</button>
        <button onClick={() => setColor("kollane")}>kollane</button>
        <button onClick={() => setColor("roheline")}>roheline</button>
        <button onClick={() => setColor("valge")}>valge</button>
        <button onClick={() => setColor("lilla")}>lilla</button>
        <button onClick={() => setColor("roosa")}>roosa</button>
        <button onClick={() => setColor("must")}>must</button>
        <button onClick={() => setColor("hall")}>hall</button>
        <button onClick={() => setColor("hõbedane")}>hõbedane</button>
        <button onClick={() => setColor("kuldne")}>kuldne</button>
      </div>
      {/* <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p> */}
      <h1>
        Minu auto on {year}. aasta {color} {brand} {model}.
      </h1>
    </>
  )
}
export default UseState2Component;