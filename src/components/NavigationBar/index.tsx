import React from "react"
import { Link } from "react-router-dom"

import PageHeader from '../../components/PageHeader'

import menuIcon from "../../assets/images/menu-icon.svg"
import bagIcon from "../../assets/images/bag-icon.svg"

import './styles.css'

interface NavigationBarProps {
    title: string
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">
                            <img src={menuIcon} alt="Menu" />
                        </Link>
                    </li>
                    <li>
                        <p>{props.title}</p>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={bagIcon} alt="Sacola" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <PageHeader />
        </div>
    )
}  

export default NavigationBar