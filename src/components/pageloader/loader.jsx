import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./loader.scss";

export default function Pageloader({ setLoading }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Animate the loader elements using gsap
            gsap.to([".loader-logo", ], {
                scale: 0,
                duration: 1.7, // Set the duration of the animation
                onComplete: () => {
                    // Animation completed, set loading state to false
                    setLoading(false);
                },
               
            });
            gsap.to(".blinder", {
                scaleY: 0,
                stagger: 0.3,
                duration: .5, // Set the duration of the animation
              
            });
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="loader">
            <div className="blinder-container">
                <div className="blinder blinder-1"></div>
                <div className="blinder blinder-2"></div>
                <div className="blinder blinder-3"></div>
                <div className="blinder blinder-4"></div>
                <div className="blinder blinder-5"></div>
            </div>
            <div className="loader-logo">
                <h1>
                    <div className="loader-logo-animate">*CodeAtlas#</div>
                </h1>
            </div>
        </div>
    );
}
