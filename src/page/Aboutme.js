import React from 'react';
import "./page.css";



const Aboutme = () => {
    return (
        <div id='Aboutme'>
            <div id='Contentborder'>
                <h1 id='Contenttitle'>ABOUT ME<span id='h1span'>.</span></h1>
            </div>
            <div id='school'>
                <span id='Contenttitle2'>๐๋ํ๊ต</span>
                <h2 id='Contenttitle3'>๊ฒฝ์ฑ๋ํ๊ต</h2>
                <p id='Contenttitle4'>๐2015๋ - 2023๋ ๋ฉ์นดํธ๋ก๋์ค๊ณตํ๊ณผ ํ์ฌ ์กธ์</p>
            </div>
            <div  id='school'>
                <span id='Contenttitle2'>๐๊ต์ก</span>    
                <h2 id='Contenttitle3'>๊ทธ๋ฆฐ์ปดํจํฐ์์นด๋ฐ๋ฏธ</h2>
                <p id='Contenttitle4'>๐2022/10/4 ~ 2023/03/23</p>
                <p>๐UI๊ฐ๋ฐ, ํ๋ก ํธ์๋ ๊ฐ๋ฐ ์ค๋ฌด, ์ ๋ฐ์ ์ธ ๋ฐฑ์๋ ๊ธฐ์ด</p>
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
                                <span class="status-bar-percent status-REACT">์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํด์ ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ๊ณ , ์ฌ๋ฌ ๋ฆฌ์กํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ(HOOKํจ์,)๋ฅผ ์ฌ์ฉ๊ฐ๋ฅํ๋ฉฐ, ๋ผ๋ฆฌ์ ์ผ๋ก ํ์ผ์ ๋๋์ด์ ๊ฐ๋ฐ ์งํ์ ํ  ์ ์์ต๋๋ค.</span>
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