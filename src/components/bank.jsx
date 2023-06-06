import { useState, useEffect } from "react";
import gsap from 'gsap'
import { TweenLite, Power3 } from "gsap/gsap-core";
import "./main/hero.scss";

export default function Bank({ item, index, darkmode, handleClick, on, toggeleOff,  }) {
    useEffect(() => {
        if (on) {
            document.body.classList.add("disable-scroll");
        } else {
            document.body.classList.remove("disable-scroll");
        }
    }, [on]);

    useEffect(() => {
        console.log("i am exhausted")
        TweenLite.to([".dark-bank-info", ".bank-info"], {
            duration: 3,
            y: -20,
            opacity: 1,
            ease: Power3.easeInOut,
                    
        })
    }, [handleClick])

    return (
        <div className="wapper">
            <div
                className={`bank bank${index}`}
                style={
                    darkmode
                        ? { backgroundColor: "#1A1A1C" }
                        : { backgroundColor: "" }
                }
                onClick={() => handleClick(item.code)}
            >
                <div className="right">
                    <img src={item.logo} alt="bank logo" className="bank-logo" />
                    <p
                        className="bank-name"
                        style={darkmode ? { color: "#ffffff" } : null}
                    >
                        {item.name}
                    </p>
                </div>
                <svg
                    width="24"
                    height="24"
                    fill={darkmode ? "#ffffff" : "#000000"}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
            </div>
            <div
                className="container"
                style={on ? { visibility: "" } : { visibility: "hidden" }}
            >
                <div
                    className="overlay"
                    style={on ? { visibility: "" } : { visibility: "hidden" }}
                    onClick={toggeleOff}
                ></div>
                <div
                    className={darkmode ? "dark-bank-info" : "bank-info"}
                    // style={on ? { visibility: "visible" } : { visibility: "hidden" }}
                >
                    <div className="nav">
                        <svg onClick={toggeleOff} width="30px" height="30px" viewBox="0 0 24 24" fill="none" stroke={darkmode ? "#ffffff" : "#000000"}><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16" stroke={darkmode ? "#ffffff" : "#000000"}></path> </g></svg>
                        <h4 className="nav-header">Bank information</h4>
                    </div>
                    <div className="top">
                        <img src={item.logo} alt="bank logo" className="bank-logo" />
                        <p className="bank-name">{item.name}</p>
                    </div>

                    <main style={darkmode ? {color: "white"} : {color: "black"}}>
                        <span >
                            <h4 >Bank-code:</h4>
                            {item.code}
                        </span>
                        <span>
                            <h4>Bank-slug:</h4>
                            {item.slug}
                        </span>
                        <span>
                            <h4>Bank-ussd:</h4>
                            {item.ussd}
                        </span>
                    </main>
                </div>
            </div>
        </div>
    );
}
