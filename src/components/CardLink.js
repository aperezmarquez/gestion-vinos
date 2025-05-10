import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CardLink.css'

const CardLink = ({ name, url, img_url }) => {
    const navigate = useNavigate()

    return (
        <div className="card-link" onClick={() => navigate(url)}>
            <img src={img_url} alt={name} className="card-link-img" />
            <section className="card-link-title">
                <h3 className="card-link-name">{name}</h3>
            </section>
        </div>
    )
}

export default CardLink
