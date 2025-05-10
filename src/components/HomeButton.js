import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeButton.css'

const Button = ({ name, url }) => {
    const navigate = useNavigate()

    return (
        <button className="home-top-button" onClick={() => navigate(url)}>
            {name}
        </button>
    )
}

export default Button
