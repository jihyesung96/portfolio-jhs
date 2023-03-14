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
                <h2 id='Contenttitle2' className='myskill'>📌 MY Skill<span id='skillmouse'>👇마우스를 올려보세요!</span></h2>
                <ul id='skillul'>
                    <li class="skillli skilljava">
                        <div class="skilldiv"><img src='/images/java.jpg' alt=''/> <p>JAVASCRIPT</p></div>
                        <div class="status-JAVA"></div>
                        <span class="status-Java">JAVASCRIPT언어를 여러가지 내장객체 와 기본문법을 이용하여 다양한 알고리즘을 만들어 사용 할 수 있습니다.</span>
                    </li>
                    <li class="skillli skillreact">
                        <div  class="skilldiv"><img src='/images/logo512.png'alt=''/> <p>REACT</p></div>
                        <div  class="status-REACT"></div>
                        <span class="status-React">컴포넌트를 이용해서 재사용 가능하고, 여러 리액트 라이브러리(HOOK함수,)를 사용가능하며, 논리적으로 파일을 나누어서 개발 진행을 할 수 있습니다.</span>
                    </li>
                    <li class="skillli skilltype">
                        <div  class="skilldiv"><img src='/images/ts.png'alt=''/><p>TYPESCRIPT</p></div>
                        <div  class="status-TYPESCRIPT"></div>
                        <span class="status-Typescript">TYPESCRIPT을 사용하여 사전에 타입을 설정하여 에러발생을 줄일수 있으며 action라이브러리를 사용 할 수 있습니다.</span>
                    </li>
                    <li class="skillli skillhtml">
                        <div  class="skilldiv"><img src='/images/html.jpg'alt=''/><p>HTML</p></div>
                        <div  class="status-HTML"></div>
                        <span class="status-Html">적절한 태그들을 사용하여<br/> 이미지나 표와 같은 화면<br/> 마크업을 구상할수 있습니다.</span>
                    </li>
                    <li class="skillli skillcss">
                        <div class="skilldiv"><img src='/images/css.jpg'alt=''/><p>CSS3</p></div>
                        <div class="status-CSS"></div>
                        <span class="status-Css">Animation,hover,canvas,flex,<br/>반응형 등 기능을 활용하여 UX/UI를 구현했습니다. </span>
                    </li>
                    <li class="skillli skillscss">
                        <div class="skilldiv"><img src='/images/sass.jpg'alt=''/><p>SASS</p></div>
                        <div class="status-SCSS"></div>
                        <span class="status-Scss">CSS을 SASS파일로 UX/UI를 <br/>구현할수 있습니다.</span>
                    </li>
                    <li class="skillli skillphp">
                        <div  class="skilldiv"><img src='/images/php.jpg'alt=''/><p>PHP</p></div>
                        <div  class="status-PHP"></div>
                        <span class="status-Php">페이지 이동, 정규표현식, mysql과 함께 데이터를 주고 받을수 있습니다.</span>
                    </li>
                    <li class="skillli skillmysql">
                        <div class="skilldiv"><img src='/images/mysql.jpg'alt=''/><p>MYSQL</p></div>
                        <div class="status-MYSQL"></div>
                        <span class="status-Mysql">데이터 베이스를 생성,수정,삭제,추가 등 데이터를 관리를<br/> 할 수 있습니다.</span>
                    </li>
                    <li class="skillli skillpython">
                        <div class="skilldiv"><img src='/images/python.jpg'alt=''/><p>PYTHON</p></div>
                        <div class="status-PYTHON"></div>
                        <span class="status-Python">PYTHON언어를 사용하여 기본문법으로 다양한 알고리즘을 <br/>만들어 사용 할 수 있습니다.</span>
                    </li>
                    <li class="skillli skillgit">
                        <div class="skilldiv"><img src='/images/git.jpg'alt=''/><p>GIT</p></div>
                        <div class="status-GIT"></div>
                        <span class="status-Git">GIT을 이용하여 프로젝트를 업로드, 수정, 다운을 받을 수<br/> 있습니다.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Aboutme;