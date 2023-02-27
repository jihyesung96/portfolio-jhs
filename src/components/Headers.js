import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "./Header.css";

const Headers = () => {
    return (
        <div id='headerflex'>
           <div id='headerpadding'>
                <span>About me</span>
                <span>Project</span>
                <span>Share</span>
                <span>Q&A</span>
                <span>CONTACT</span>
           </div>
           <div id='headerpadding'>
                <a href='#'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='#'><FontAwesomeIcon icon={faPen} /></a>
                <a href='#'><FontAwesomeIcon icon={faBlog} /></a>
           </div>
        </div>
    );
};

export default Headers;