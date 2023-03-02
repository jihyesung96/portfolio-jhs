import React from 'react';
import "./page.css";

const Aboutme = () => {
    return (
        <div id='Aboutme'>
            <div id='Contentborder'>
                <h1 id='Contenttitle'>ABOUT ME</h1>
            </div>
            <div>
                <span id='Contenttitle2'>대학교</span>
                <h2 id='Contenttitle3'>경성대학교</h2>
                <p id='Contenttitle4'>2015년 - 2023년 메카트로닉스공학과 학사 졸업</p>
            </div>
            <div>
                <span id='Contenttitle2'>교육</span>
                <h2 id='Contenttitle3'>그린컴퓨터아카데미</h2>
                <p id='Contenttitle4'>2022/10/4 ~ 2023/03/23</p>
                <p>UI개발, 프론트엔드 개발 실무, 전반적인 백엔드 기초</p>
            </div>
            <div>
                <h2 id='Contenttitle3'>MY Skill</h2>
                <ul>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">Javascript</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-Javascript">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">REACT</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-REACT">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">Typescript</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-Typescript">50%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">HTML</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-HTML">80%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">CSS3</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-CSS3">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">SCSS</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-SCSS">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">PHP</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-PHP">60%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">MYSQL</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-MYSQL">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name">git</div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-git">40%</span>
                            </div>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Aboutme;