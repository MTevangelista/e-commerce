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
        <header className="page-header">
            <div className="top-bag-container">
                <Link to="/">
                    <img src={menuIcon} alt="Menu" />
                </Link>
                <p>{props.title}</p>
                <Link to="/">
                    <img src={bagIcon} alt="Sacola" />
                </Link>
            </div>
        </header>
    )
}  

export default PageHeader