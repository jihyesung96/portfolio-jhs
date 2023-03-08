import React from 'react';
import "./page.css";

const Introduction = () => {
    return (
        <div id='Introduction'>
            <img src='/images/1.jpg' alt=''/>
            <div id='background'></div>
            <div id='info'>    
                <p id='infotitle'>남보다 한 걸음 더 내딛어 발전하는</p>
                <p><span id='infoname'>지혜성</span><span id='namenext'>입니다</span></p>
                <p id='infodesc'>프론트엔드 개발자를 희망하고 있습니다.<br/>
                    배움에 끊임없이 노력하고 성장해가는것을 좋아합니다.<br/>
                    백엔드와 프론트엔드 공부하고 있는 풀스택 지망 개발자입니다.
                </p>
            </div>
            
        </div>
    );
};

export default Introduction;