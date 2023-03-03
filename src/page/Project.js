import React from 'react';
import "./page.css";

const Project = () => {
    return (
        <div id='Project'>
            <div id='Contentborder'>
                <h1 id='Contenttitle'>Project</h1>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>팀 프로젝트</span>
                <img className='projectimg' src='/images/javascript_ball.png'alt=''/>
                <h2 className='projectdesc'><a href='#' id='Contenttitle3' >Javascript를 이용한 야구 게임</a></h2>
                <p id='Contenttitle4' className='projectday'>👍2022/</p>
                <p className='projectskill'>👍사용기술들</p>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>팀 프로젝트</span>
                <img className='projectimg' src='/images/php_music.png'alt=''/>
                <h2 className='projectdesc'>
                    <a href='#' id='Contenttitle3' >PHP,MYSQL을 이용한 AW뮤직</a>
                    <button>VIEW LIVE</button>
                    <button>VIEW GITHUB</button>
                </h2>
                <p id='Contenttitle4' className='projectday'>👍2022/</p>
                <p className='projectskill'>👍사용기술들</p>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>팀 프로젝트</span>
                <img className='projectimg' src='/images/react_site.png'alt=''/>
                <h2 className='projectdesc'><a href='#' id='Contenttitle3' >REACT를 이용한 AW카페</a></h2>
                <p id='Contenttitle4' className='projectday'>👍2022/</p>
                <p className='projectskill'>👍사용기술들</p>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>개인 프로젝트</span>
                <h2 className='projectdesc'><a href='#' id='Contenttitle3' >Javascript를 이용한 야구 게임</a></h2>
                <p id='Contenttitle4' className='projectday'>👍2023년 3월 - 계속 개발중</p>
                <p className='projectskill'>👍사용기술들</p>
            </div>
        </div>
    );
};

export default Project;