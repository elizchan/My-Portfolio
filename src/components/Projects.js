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
                    {/* <div class="col s12 m6"> */}
                    <div class="col s4">
                        <div class="projName">
                        <div class="card-image">
                            <img src="https://i.ibb.co/PgPvvjg/Screen-Shot-2021-02-17-at-3-55-31-PM.png" width="398"></img>
                            <div class="card-content black-text">
                                <span class="card-title"><strong>K-Culture-Trivia</strong></span>
                                <p>a Korean culture trivia game that is played between 2 people. It was built using Vanilla JS, CSS and HTML</p>
                            </div>
                            <div class="card-action">
                                <a href="https://elizchan.github.io/K-Culture-Trivia/">Link to Trivia</a>
                                <a href="https://github.com/elizchan/K-Culture-Trivia">Link to Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
               
                    <div class="col s4">
                        <div class="projName">
                        <div class="card-image">
                            <img src="https://i.ibb.co/TTnD5Yr/Screen-Shot-2021-02-17-at-3-50-24-PM.png" width="398"></img>
                            <div class="card-content black-text">
                                <span class="card-title"><strong>SuperSmash Directory</strong></span>
                                <p>a website built using Node.js, SQL, CSS takes a SuperSmash Directory and allows users to make an account, add favorite SuperSmash characters to their profile and leave comments on a message board.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://supersmash-directory.herokuapp.com/">Link to Site</a>
                                <a href="https://github.com/elizchan/SuperSmash-Directory">Link to Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div class="col s4">
                        <div class="projName">
                        <div class="card-image">
                            <img src="https://i.imgur.com/qgxEYGw.png" width="398"></img>
                            <div class="card-content black-text">
                                <span class="card-title"><strong>Roast</strong></span>
                                <p>a website/app built by a team using React.js, Mongodb, Mongoose, Node.js and CSS that takes the Yelp API to generate a list of nearby cafes to the user and allow the users to leave their own comments under the cafe page.</p>
                            </div>
                            <div class="card-action">
                                <a href="http://roast-cafes.surge.sh/">Link to Site</a>
                                <a href="https://github.com/elizchan/Roast-Front">Link to Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div class="col s4">
                        <div class="projName">
                        <div class="card-image">
                            <img src="" width="399"></img>
                            <div class="card-content black-text">
                                <span class="card-title"><strong>Simple Bento</strong></span>
                                <p>a restaurant website built using Angular.js, Mongodb, Mongoose, Node.js and CSS that allows the owner to update menu and recipes and customers to browse through the available menu.</p>
                                <p>It is still a work in progress</p>
                            </div>
                            <div class="card-action">
                                {/* <a href="">Link to Site</a> */}
                                <a href="https://github.com/elizchan/Simple-Bento-backend">Link to sample Code</a> 
                            </div>
                        </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Projects

