import React from 'react'

import "./menu-item.css"

const MenuItem = (props) => {
    const {imgUrl, title} = props
    return (
        <div className="menu-item">
            <img src={imgUrl}></img>
            <span>{title}</span>
        </div>
    )
}

export default MenuItem;