import React, { useState, useEffect } from 'react';


import "./hero.scss"
export default function Main() {
    const [value, setvalue] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://nigerianbanks.xyz")
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
    }, []);

    function handleChange(event) {
        setvalue(event.target.value)
    }
    const main = data.filter((item) => {
        if (value === "") {
            console.log("fuck off")
            return item
        }
        else if (
            item.name.toLowerCase().includes(value.toLowerCase())
        ) {
            console.log("howfar")
            return item
        }
        return null
    }).map((item) => (
        <div className="bank" key={item.code}>
            <img src={item.logo} alt="bank logo" className="bank-logo" />
            <p className="bank-name">{item.name}</p>
            <p className="bankussd">{item.ussd}</p>
        </div>
    ))
    // console.log(main)

    return (
        <>
            <input type="text"
                name=""
                id=""
                onChange={handleChange} />
            {data ? main : (<h1>..loading</h1>)}

        </>

    )

}