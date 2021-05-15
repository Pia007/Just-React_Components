import React from 'react'

function Button({clickHandler, btntext}) {
    return (
        <div className="btn">
            <button className="btns" onClick={clickHandler}>{btntext}</button>
        </div>
    )
}

export default Button
