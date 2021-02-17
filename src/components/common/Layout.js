import React from 'react'

const Layout = (props) => {
    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                {/* <a href="#" className="brand-logo">Elizabeth's Site</a> */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    {/* <li><a href="/blog">Blog</a></li> */}
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                </ul>
                </div>
            </nav>
            <div>
                {/* display routes that will be passed/rendered */}
                {props.children}
            </div>
            <footer className="page-footer">
                <div className="footercontainer">
                    <div className="row">
                    {/* <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div> */}
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/elizchan">Github</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/elizabeth-chandra-95106743/">LinkedIn</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
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