import React from "react"
import { FiInstagram } from  "react-icons/fi"
import azIcon from  "../../assets/images/az.svg"
import './styles.css'

function Main() {
    return (
        <main>
            <p className="top-text">WEAR IT YOUR WAY</p>
            <div><img src={azIcon} alt="AZ" /></div>
            <div>
                <p className="bottom-text">Coming soon! Stay tuned.</p>
                <div className="instagram-container">
                    <FiInstagram size={24} color="white" />
                    <a href="https://www.instagram.com/azzyjewelry/" target="_blank" rel="noopener noreferrer">azzyjewelry</a>
                </div>
            </div>
        </main>
    )
}

export default Main