import React, { useState, useEffect } from 'react';
import "./hero.scss"
import Bank from '../bank/bank';
import Loader from './loading';
export default function Main() {
    const [value, setvalue] = useState("");
    const [data, setData] = useState([]);
    const [darkmode, setDarkmode] = useState(null);
    const [button, setButton] = useState(false);
    const [loading, setLoading] = useState(false)
    
    


    const toggleButton = () => {
        setButton(prevSetButton => !prevSetButton)
    }
    const handleDarkmode = () => {
        setDarkmode(prevDarkmode => !prevDarkmode)
    }

    useEffect(() => {
        fetch("https://nigerianbanks.xyz")
            .then((res) => res.json())
            .then((result) => {
                setData(result.map(item => {
                    return {
                        ...item,
                        on: false
                    }
                }));
                setLoading(true)
            });

    }, []);

    console.log(loading)
    function handleChange(event) {
        setvalue(event.target.value)
    }

    const main = data.filter((item) => {
        if (value === "") {
            return item
        }
        else if (
            item.name.toLowerCase().includes(value.toLowerCase())
        ) {
            return item
        }
        return null
    }).map((item, index) => (
        <Bank
            item={item}
            on={item.on}
            index={index}
            handleClick={toggleInfo}
            toggeleOff={toggeleOff}
            darkmode={darkmode}
            key={item.code}
            loading={loading}
        />
    ))

    function toggleInfo(id) {
        setData(prevData => prevData.map(item => ({
            ...item,
            on: id === item.code
        })))
        console.log(id)
    }
    function toggeleOff() {
        setData(prevData => prevData.map(item => ({
            ...item,
            on: false
        })))
        console.log("hi")
    }
    return (

        <div className={darkmode ? "main-dark" : "main-light"}>
            <nav className={darkmode ? "darkmode-nav" : null}>
                <h4>*CodeAtlas#</h4>
                <div className="wrapper">
                    <p className="dark-mode-praragraph">
                        {darkmode ? "Darkmode" : "LIghtmode"}
                    </p>
                    <div className={darkmode ? 'darkmode' : 'lightmode'} onClick={handleDarkmode}>
                        <div className="toggeler">
                        </div>
                    </div>
                </div>
            </nav>
            <h3 className="bank-header" style={darkmode ? { color: '#ffffff' } : { color: '#000000' }}>
                we generate nigerian banks codes!
            </h3>
            <div className="input">
                <svg fill="#000000" className='svg' height="30px" width="30px" version="1.1" id="Capa_1" viewBox="-48.84 -48.84 586.08 586.08" stroke="#000000" ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
                <input type="text"
                    name=""
                    id=""
                    placeholder='Search By Your Bank Name'
                    onChange={handleChange} />
            </div>
            {loading ? <div className="banky">
                <div className={button ? "contain-open" : "container-2"}>
                    {main.length === 0 ?
                        <div className="not-found-container">
                            <h3>this bank is not available at this time please check back</h3>
                        </div>
                        : main}
                </div>
                <div className="button-container">
                    <button className={darkmode ? "toggle-container-dark" : "toggle-container-light"} onClick={toggleButton} style={main.length === 0 ? { display: "none" } : { display: "block" }}>{button ? "show less" : "show more"}</button>
                </div>
            </div> : <Loader
                darkmode={darkmode}
            />
            }
        </div>
    )
}