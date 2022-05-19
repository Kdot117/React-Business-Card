import React from "react";
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';



export default function About() {

    return (
        <header>
            <div className="About">
                <img className="my-photo" src='./images/Kenny.png' height={317} width={317} />
                <h1 className="my-name"> Kendrick Izaguirre</h1>
                <p className="profession">Frontend Developer </p>
                <p className="my-personal-email">Kendrick.Izaguirre@yahoo.com</p>
                <div className="contact-buttons">
                    <button className="email-btn" onClick={()=> window.location = "mailto:kendrick.Izaguirre@yahoo.com"}><MdEmail /> Email</button>
                    <button className="LinkedIn-btn"><BsLinkedin /> LinkedIn</button>
                </div>
                
            </div>
        </header>
    )
    }
