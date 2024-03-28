import React, { useState, useEffect,  useRef} from 'react';
import "./hero.scss";
import Bank from '../bank/bank';
import Loader from './loading';

const Main = () => {

    const inputContainer = useRef()
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const [darkmode, setDarkmode] = useState(false);
    const [button, setButton] = useState(false);
    const [loading, setLoading] = useState(true); // Set initial loading state to true


    useEffect(() => {
        document.body.style.backgroundColor = darkmode ? 'black' : 'white';
    }, [darkmode]);

    const toggleButton = () => {
        setButton(prevButton => !prevButton);
    };

    const handleDarkmode = () => {
        setDarkmode(prevDarkmode => !prevDarkmode);
    };

    useEffect(() => {
        fetch("https://nigerianbanks.xyz")
            .then(res => res.json())
            .then(result => {
                const updatedData = result.map(item => ({
                    ...item,
                    on: false
                }));
                setData(updatedData);
                setLoading(false); // Update loading state once data is fetched
            })
            .catch(error => {
                setLoading(false); // Update loading state if there is an error
            });
    }, []);

    const handleChange = event => {
        setValue(event.target.value);
    };

    const toggleInfo = id => {
        const updatedData = data.map(item => ({
            ...item,
            on: id === item.code
        }));
        setData(updatedData);
    };

    const toggeleOff = () => {
        const updatedData = data.map(item => ({
            ...item,
            on: false
        }));
        setData(updatedData);
    };

    const filteredData = data.filter(item =>
        value === "" || item.name.toLowerCase().includes(value.toLowerCase())
    );

    const main = filteredData.map((item, index) => (
        <Bank
            item={item}
            on={item.on}
            index={index}
            handleClick={toggleInfo}
            toggeleOff={toggeleOff}
            darkmode={darkmode}
            key={item.code}
        />
    ));

    return (
        <div className={darkmode ? "main-dark" : "main-light"}>
            <nav className={darkmode ? "darkmode-nav" : null}>
                <h4>*CodeAtlas#</h4>
                <div className="wrapper">
                    <p className="dark-mode-praragraph">
                        {darkmode ? "Darkmode" : "Lightmode"}
                    </p>
                    <div
                        className={darkmode ? 'darkmode' : 'lightmode'}
                        onClick={handleDarkmode}
                    >
                        <div className="toggeler"></div>
                    </div>
                </div>
            </nav>
            <h3 className="bank-header" style={darkmode ? { color: '#ffffff' } : { color: '#000000' }}>
                We generate Nigerian banks codes!
            </h3>
            <div className="input" ref={inputContainer}>
                <svg
                    fill="#000000"
                    className='svg'
                    height="30px"
                    width="30px"
                    version="1.1"
                    id="Capa_1"
                    viewBox="-48.84 -48.84 586.08 586.08"
                    stroke="#000000"
                >
                    <g id="SVGRepo_bgCarrier"></g>
                    <g id="SVGRepo_tracerCarrier"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='Search By Your Bank Name'
                    onChange={handleChange}
                />
            </div>
            {loading ? (
                <Loader darkmode={darkmode} />
            ) : (
                <div className="banky">
                    <div className={button ? "contain-open" : "container-2"}>
                        {main.length === 0 ? (
                            <div className="not-found-container" style={darkmode ? { color: '#ffffff' } : { color: '#000000' }}>
                                <h3>This bank is not available at this time. Please check back later.</h3>
                            </div>
                        ) : (
                            main
                        )}
                    </div>
                    <div className="button-container">
                        {main.length > 3 && (
                            <button
                                className={darkmode ? "toggle-container-dark" : "toggle-container-light"}
                                onClick={toggleButton}
                            >
                                {button ? "Show Less" : "Show More"}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;
