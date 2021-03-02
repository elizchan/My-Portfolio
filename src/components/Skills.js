import React, { Component } from "react";
import { FaHtml5, FaNodeJs, FaReact, FaAngular, FaPython, FaCss3Alt } from 'react-icons/fa'
import { SiPostgresql, SiMongodb, SiJavascript } from 'react-icons/si'

const Skills = () => {
    return(
        <div>
            <h4>Skills I learned:</h4>
            <ul>
                <li className="icons"><FaHtml5 />HTML5</li>
                <li className="icons"><FaCss3Alt />CSS</li>
                <li className="icons"><SiJavascript />Javascript</li>
                <li className="icons"><FaNodeJs />Node.js</li>
                <li className="icons"><SiPostgresql />Postgres SQL</li>
                <li className="icons"><FaReact />React.js</li>
                <li className="icons"><SiMongodb />MongoDB</li>
                <li className="icons">Mongoose</li>
                <li className="icons"><FaPython />Python</li>
            </ul>
        </div>
    )
}


export default Skills