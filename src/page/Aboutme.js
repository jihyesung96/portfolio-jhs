import React from 'react';
import "./page.css";



const Aboutme = () => {
    return (
        <div id='Aboutme'>
            <div id='Contentborder'>
                <h1 id='Contenttitle'>ABOUT ME<span id='h1span'>.</span></h1>
            </div>
            <div id='school'>
                <span id='Contenttitle2'>📌대학교</span>
                <h2 id='Contenttitle3'>경성대학교</h2>
                <p id='Contenttitle4'>👍2015년 - 2023년 메카트로닉스공학과 학사 졸업</p>
            </div>
            <div  id='school'>
                <span id='Contenttitle2'>📌교육</span>    
                <h2 id='Contenttitle3'>그린컴퓨터아카데미</h2>
                <p id='Contenttitle4'>👍2022/10/4 ~ 2023/03/23</p>
                <p>👍UI개발, 프론트엔드 개발 실무, 전반적인 백엔드 기초</p>
            </div>
            <div>
                <h2 id='Contenttitle3' className='myskill'>MY Skill</h2>
                <ul>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/java.jpg' alt=''/> <p>Javascript</p></div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-Javascript">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/logo512.png'alt=''/> <p>REACT</p> </div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-REACT">컴포넌트를 이용해서 재사용 가능하고, 여러 리액트 라이브러리(HOOK함수,)를 사용가능하며, 논리적으로 파일을 나누어서 개발 진행을 할 수 있습니다.</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/ts.png'alt=''/><p>Typescript</p></div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-Typescript">50%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/html.jpg'alt=''/><p>HTML</p></div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-HTML">80%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/css.jpg'alt=''/><p>CSS3</p></div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-CSS3">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/sass.jpg'alt=''/><p>SASS</p></div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-SCSS">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/php.jpg'alt=''/><p>PHP</p></div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-PHP">60%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/mysql.jpg'alt=''/><p>MYSQL</p></div>
                            <div  class="status-bar">
                                <span class="status-bar-percent status-MYSQL">70%</span>
                            </div>
                        </li>
                    </li>
                    <li class="statusli">
                        <li class="status" >
                            <div  class="status-bar-name"><img src='/images/git.jpg'alt=''/><p>git</p></div>
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