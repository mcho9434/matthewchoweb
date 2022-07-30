import React from 'react'
import './Intro.css'
const Intro = () => {
    return (
        <div className='intro-wrapper'>
            <div className="img-container">
                <img src='/Matthew.jpg' alt="matthew baby picutre" width="500" id="Intro"/>

            </div>
            <div className="intro-text">
                <h1 className="intro-title">
                    Hi, my name is Matthew. 

                </h1>
                <div className="intro-paragraph">
                &emsp;I'm a student at the University of Southern California,
                 majoring in Computer Science and minoring in Entrepreneurship. I'm passionate about engineering for social good and entrepreneuship. I'd love to chat about anything from career opportunities to rising technologies. Reach out!
                </div>

            </div>
        </div>
    )
}

export default Intro;
