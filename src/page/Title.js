import React from 'react';
import "./page.css";

const Title = () => {
    return (
        <div id='Title'>
            <div>
                <h1>Introduction</h1>
                <ul>
                    <li><div class="Circle"></div>소개</li>
                </ul>
            </div>
            <div>
                <h1>About me</h1>
                <ul>
                    <li><div class="Circle"></div>경성대학교</li>
                    <li><div class="Circle"></div>교육</li>
                    <li><div class="Circle"></div>my skill</li>
                </ul>
            </div>
            <div>
                <h1>Share</h1>
                <ul>
                    <li><div class="Circle"></div>Github</li>
                    <li><div class="Circle"></div>Notion</li>
                    <li><div class="Circle"></div>Blog</li>
                </ul>
            </div>
            <div>
                <h1>Project</h1>
                <ul>
                    <li><div class="Circle"></div>야구게임</li>
                    <li><div class="Circle"></div>AW뮤직</li>
                    <li><div class="Circle"></div>AW카페</li>
                </ul>
            </div>
            <div>
                <h1>Q&A</h1>
                <ul>
                    <li><div class="Circle"></div>질문1</li>
                    <li><div class="Circle"></div>질문2</li>
                    <li><div class="Circle"></div>질문3</li>
                    <li><div class="Circle"></div>질문3</li>
                </ul>
            </div>
            <div>
                <h1>CONTACT</h1>
            </div>
        </div>
    );
};

export default Title;