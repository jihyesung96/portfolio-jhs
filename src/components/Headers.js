import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "./Header.css";

const Headers = ({scrollToTop}) => {
    return (
        <div id='headerflex'>
           <div id='headerpadding'>
                <div id='headerlogo' onClick={scrollToTop}>DEVELOPER JHS</div>
           </div>
           <div id='headerpadding'>
                <a href='https://github.com/jihyesung96'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://aboard-teller-7ff.notion.site/STUDY-45aa50e4f0874c188ab1a3f40e414b17'><FontAwesomeIcon icon={faPen} /></a>
                <a href='#'><FontAwesomeIcon icon={faBlog} /></a>
           </div>
        </div>
    );
};

export default Headers;