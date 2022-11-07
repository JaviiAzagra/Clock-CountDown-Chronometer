import React from 'react'
import { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [clock, setClock] = useState();

    useEffect(() => {
        setInterval(() => {
            console.log("DIGITAL-CLOCK");
            const date = new Date();
            setClock(date.toLocaleTimeString());
        },1000)
    },[]);

  return (
    <div>
        <h1>Reloj Digital</h1>
        <h2>{clock}</h2>
    </div>
  )
};

export default DigitalClock;