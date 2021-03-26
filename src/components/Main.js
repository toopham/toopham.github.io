import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Main.css';
import { Link } from 'react-router-dom';



function Main() {
    return (
        <div className='main-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            {/*  <!-- Page Container --> */}
            <div className="profile-content"> 

            {/* <!-- The Grid --> */}
            <div className="profile-row-padding">
            
                {/* <!-- Left Column --> */}
                <div className="profile-third">
                
                <div className="profile-card">
                    <div className="profile-display-container">
                    <img src="/images/tu_photo2.jpg" className='profile-img' alt="Avatar"></img>
                    <div className="profile-display-bottomleft">
                        <h2>Tu Pham</h2>
                    </div>
                    
                    </div>
                    <div className="profile-container">
                    <p><i className="fa fa-briefcase fa-fw i-red"></i>Math Teacher & Software Developer</p>
                    <p><i className="fa fa-home fa-fw i-red"></i>San Jose, CA</p>
                    <p><i className="fa fa-envelope fa-fw i-red"></i>toopham at gmail.com</p>
                    <p><i className="fa fa-phone fa-fw i-red"></i>Upon Request</p>
                    <div class='button'>Contact Me</div>
                    <hr></hr>

                    <div className="profile-container w3-card w3-white">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                    <div className="profile-container">
                    <h5 className="w3-opacity"><b>San Francisco State University</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2009-2011</h6>
                    <p><i className="fa fa-award fa-fw w3-margin-right"></i>M.A in Mathematics</p>
                    <hr></hr>
                    </div>
                    <div className="profile-container">
                    <h5 className="w3-opacity"><b>University of California, San Diego</b></h5>
                    <h6 className="i-red"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2004 - 2009</h6>
                    <p className="i-red"><i className="fa fa-award fa-fw w3-margin-right"></i>Bachelor Degree in Mathematics</p>
                    <hr></hr>
                    </div>
                    </div>

                  
                    <br></br>
                    </div>
                </div><br></br>

                {/* <!-- End Left Column --> */}
                </div>

                {/* <!-- Right Column --> */}
                <div className="profile-right">
                <div className="profile-container w3-card w3-white w3-margin-bottom">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-archive fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Publications</h2>
                    <div className="profile-container">
                    <h5 className="w3-opacity"><b><i className="fa fa-file-alt fa-fw w3-margin-right"></i>Enumeration of Golomb Rulers and Acyclic Orientations</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-users fa-fw w3-margin-right"></i>Tristram Bogart, Matthias Beck, T. Pham</h6>
                    <p>Electronic Journal of Combinatorics</p>
                    <hr></hr>
                    </div>
                    
                </div>
                <div className="profile-container w3-card w3-white w3-margin-bottom">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-laptop-code fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Projects</h2>
                    <div className="profile-container">
                    <h5 className="w3-opacity"><b><i className="fa fa-folder-open fa-fw w3-margin-right"></i>Social Media App(In Progress)</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-edit fa-fw w3-margin-right"></i>MERNG Project</h6>
                    <p><i className="fa fa-code fa-fw w3-margin-right"></i>Deployed With: MongoDB, GraphGL, React.js, Node.js</p>
                    <hr></hr>
                    </div>
                    <div className="profile-container">
                    <h5 className="w3-opacity"><b><i className="fa fa-folder-open fa-fw w3-margin-right"></i>Personal Website www.toopham.com</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-edit fa-fw w3-margin-right"></i>Set up a website with Python and Django Framework on a VPS.</h6>
                    <p><i className="fa fa-code fa-fw w3-margin-right"></i>Deployed With: Python, MySQL, and Django Framework.</p>
                    <hr></hr>
                    </div>
                    <div className="profile-container">
                    <h5 className="w3-opacity"><b><i className="fa fa-folder-open fa-fw w3-margin-right"></i>J&N Engineering</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-edit fa-fw w3-margin-right"></i>Implement Job Tracking Software to track progress of jobs. </h6>
                    <p><i className="fa fa-code fa-fw w3-margin-right"></i>Deployed With: MySQL and PHP</p>
                    </div>
                </div>


                {/* <!-- End Right Column --> */}
                </div>
                
            {/* <!-- End Grid --> */}
            </div>
            
            {/* <!-- End Page Container --> */}
            </div>
        </div>
    )
}

export default Main
