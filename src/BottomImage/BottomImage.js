import React from 'react'
import "./BottomImage.css"

const BottomImage = () => {
    return(
        <div className="BottomImage-container">
            <div className="BottomImage-imgContainer">
                <img src="http://www.peperossosocial.com/wp-content/uploads/2014/09/8.jpg" alt="Restaurant Mailbox" className="BottomImage-img"/>
            </div>
            <div className="BottomImage-imgContainer"><img src="http://www.peperossosocial.com/wp-content/uploads/2014/09/14.jpg" alt="Pasta Made Fresh In-house" className="BottomImage-img"/></div>
            <div className="BottomImage-imgContainer"><img src="http://www.peperossosocial.com/wp-content/uploads/2014/09/ravioli.jpg" alt="Pasta Name" className="BottomImage-img"/></div>
        </div>
    )
}

export default BottomImage