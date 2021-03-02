import React from 'react'
import {Link} from 'react-router-dom'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Layout = (props) => {
    return(
        <div>
            <nav class="deep-purple lighten-3">
                <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About</a></li> */}
                    {/* <li><a href="/skills">Skills</a></li> */}
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
                </div>
            </nav>
            <div>
                {/* display routes that will be passed/rendered */}
                {props.children}
            </div>
            <footer className="page-footer" class="deep-purple lighten-3">
                <div className="footercontainer">
                    <div className="links">
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li className="icons"><a className="grey-text text-lighten-3" href="https://github.com/elizchan" target="_blank"><FaGithub />Github</a></li>
                                <li className="icons"><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/elizabeth-chandra-95106743/" target="_blank"><FaLinkedin />LinkedIn</a></li>
                                {/* <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    © 2021 Copyright Text
                    {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout