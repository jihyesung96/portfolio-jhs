import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "./Header.css";

const Headers = () => {
    return (
        <div id='headerflex'>
            <div id='headerleft'>
                <div id='headericon'>
                    <a href='#'><FontAwesomeIcon icon={faGithub} /><span>깃허브</span></a>
                    <a href='#'><FontAwesomeIcon icon={faPen} /><span>노션</span></a>
                    <a href='#'><FontAwesomeIcon icon={faBlog} /><spna>블로그</spna></a>
                </div>
                <div>
                    <p>wlgptjd100@naver.com</p>
                </div>
            </div>
            <div id='headerright'>
                <p id='headerrighttitle'>남보다 한 걸음 더 내딛어 발전하는</p>
                <p><span id='name'>지혜성</span><span id='namenext'>입니다</span></p>
                <p id='headerdesc'>프론트엔드 개발자를 희망하고 있습니다.<br/>
                    배움에 끊임없이 노력하고 성장해가는것을 좋아합니다.<br/>
                    개발 중요성을 잘 알기에 항상 무언가에 도전하고 노력합니다.
                </p>
            </div>
        </div>
    );
};

export default Headers;