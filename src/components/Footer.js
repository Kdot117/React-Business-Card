import React from "react"
import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
 
export default function Footer() {

    return (

        <footer className="footer">
            <div className="footer--icons">
                 
                <FaTwitterSquare /> 
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaGithubSquare />
            
           </div>
        </footer>

    )
}