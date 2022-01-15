import React from 'react';

function Intro(){
    return (
        <div className="intro-container">
            <div className="intro">
                <div className="intro-name">Hi, <br /> I'm David <br/>Web Developer</div>
                <hr/>
                <p className="intro-text">India based Developer with a keen eye for sheer logic and design.</p>
            
                <ul>
                    <li>
                        <a href="https://github.com/DavidKunwar" target='_blank' rel='noreferrer'>
                            <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:dkunwar7111@gmail.com" target='_blank' rel='noreferrer'>
                            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/davidkunwar/" target='_blank' rel='noreferrer'>
                            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/18Vfxj-uGARWQ8EAkry0JiMPXL8hgcVYK/view" target='_blank' rel='noreferrer'>
                        {/* <a href="./resume/Resume_David.pdf" download> */}
                            {/* <!-- <button class="download-cv">Download CV</button> --> */}
                            <button className="btn btn-outline-success btn-lg download-button" type="button"> Download CV</button>
                        </a>
                    </li>
                </ul>
            
            </div>
            {/* <img src="https://static.toiimg.com/photo/72975551.cms" alt="" /> */}

        </div>
    );
}

export default Intro;