import React from "react";
import './Succes.css'
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";

export default function Succes()
{
    const location = useLocation();
    const email = location.state.email;
    const navigate = useNavigate();
    function handleDismiss(){
        navigate('*');

    }
    return (
        <>
        <div className="succes-container">
            <div className="succes-window">
                <div className="succes-icon">
                <object data="\newsletter-challenge\assets\images\icon-success.svg"></object>
                </div>
                <div className="succes-text">
                <h1>Thanks for subscribing!</h1>
                <h5>A confirmation email has been sent to <h4 className="email">{email}</h4> . Please open it and click the button inside to confirm your subscription </h5>
                <button className="dismiss" onClick={handleDismiss} >Dismiss this message</button>
                </div>
            </div>
        </div>
        
        </>
    )
};