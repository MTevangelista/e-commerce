import React from "react"
import { Link } from "react-router-dom"

import menuIcon from "../../assets/images/menu-icon.svg"
import bagIcon from "../../assets/images/bag-icon.svg"

import './styles.css'

interface PageHeaderProps {
    title: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
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
            <header className="header">
                <div>etsdtet</div>
                <div>etsdtet</div>
                <div>etsdtet</div>
                <div>etsdtet</div>
            </header>
        </div>
    )
}  

export default PageHeader