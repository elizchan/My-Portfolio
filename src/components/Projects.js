import React, { Component } from "react";
import "../css/App.css";

const Projects = () => {
    return(
        <div>
            <div>
                <h2>List of Projects:</h2>
            </div>
            <div class="proj-container">
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card-image">
                            <img src=""></img>
                            <div class="card-content black-text">
                                <span class="card-title"><strong>K-Trivia</strong></span>
                                <p>a Korean culture trivia game that is played between 2 people. It was built using Vanilla JS, CSS and HTML</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Link to Trivia</a>
                                <a href="#">Link to Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card-image">
                            <img src=""></img>
                            <div class="card-content black-text">
                                <span class="card-title"><strong>Smash Directory</strong></span>
                                <p>a website built by a team using Node.js, SQL, CSS uses a Yelp API to generate a list of nearby cafes to the user and allow the users to leave their own comments under the cafe page.</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Link to Site</a>
                                <a href="#">Link to Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card-image">
                            <img src=""></img>
                            <div class="card-content black-text">
                                <span class="card-title"><strong>Roast</strong></span>
                                <p>a website/app built using React.js, Mongodb, Mongoose,and CSS takes uses a SuperSmash Directory and allows users to make an account, add favorite SuperSmash characters to their profile and leave comments on a message board.</p>
                            </div>
                            <div class="card-action">
                                <a href="http://roast-cafes.surge.sh/">Link to Site</a>
                                <a href="#">Link to Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects