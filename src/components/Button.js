import React from 'react'

function Button({clickHandler, btntext}) {
    return (
        <div>
            <button className="btns" onClick={clickHandler}>{btntext}</button>
        </div>
    )
}

export default Button
