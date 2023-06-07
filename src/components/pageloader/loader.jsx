import React, { useEffect } from "react";
import './loader.scss'
import Main from "../main/hero";
import Bank from "../bank";
import { gsap } from 'gsap'

export default function Pageloader({ setLoading }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="loader">
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