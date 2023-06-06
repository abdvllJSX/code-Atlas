import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'
import { TweenLite, Power3 } from "gsap/gsap-core";
import './loading.scss'

export default function Loader({darkmode}) {
    useEffect(() => {
        gsap.to(".ball", {
            x: 1000,
            opacity: 0,
            duration: 2,
            repeat: -1,
            stagger: {
                amount: 1,
                from: 'start',
                ease: Power3.easeInOut
            }
        })
    }, [])
    return (
        <div className="containers">
            <div className={darkmode ? "darkball" : "ball"}></div>
            <div className={darkmode ? "darkball" : "ball"}></div>
            <div className={darkmode ? "darkball" : "ball"}></div>
            <div className={darkmode ? "darkball" : "ball"}></div>

        </div>
    );
}
