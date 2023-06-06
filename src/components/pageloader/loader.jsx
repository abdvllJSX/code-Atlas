import React from "react";
import './loader.scss'
import imagesLoaded from 'imagesLoaded'
import Main from "../main/hero";
import Bank from "../bank";
import gsap from 'gsap'

export default function Pageloader() {

    const imgload = imagesLoaded(<Bank />, <Main />)

    imgload.on('done', instance => {

        console.log("hey")
    })
    setTimeout(() => {
        gsap.to(".loader-logo", {
            scale: 0,
        })
        gsap.to(".blinder", {
            scaleY: 0,
            stagger: .3,
        })
    }, 5000)
    return (
        <div className="loader block">
            <div className="blinder-container">
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
                <div className="blinder"></div>
            </div>
            <div className="loader-logo">
                <h1>
                    <div className="loader-logo-animate">
                        *CodeAtlas#
                    </div>
                </h1>
            </div>
        </div>
    )
}