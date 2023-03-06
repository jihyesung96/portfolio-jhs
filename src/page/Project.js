import React from 'react';
import "./page.css";

const Project = () => {
    return (
        <div id='Project'>
            <div id='Contentborder'>
                <h1 id='Contenttitle'>Project<span id='h1span'>.</span></h1>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>📌팀 프로젝트</span>
                <div id='projectview'>
                    <img className='projectimg' src='/images/javascript_ball.png'alt=''/>
                    <div>
                        <h2 className='projectdesc'>
                        <a href='#' id='Contenttitle3' >Javascript를 이용한 야구 게임</a>
                        </h2>
                        <p id='Contenttitle4' className='projectday'>👍2022/11/11 ~ 2022/11/25</p>
                        <p className='projectskill'>👍사용기술 : Html , Css , Javascript</p>
                        <div id='btnspan'>
                            <p id='alive'>자세한 설명</p>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>📌팀 프로젝트</span>
                <div id='projectview'>
                    <div>
                        <h2 className='projectdesc'>
                            <a href='#' id='Contenttitle3' >PHP,MYSQL을 이용한 AW뮤직</a>
                        </h2>
                        <p id='Contenttitle4' className='projectday'>👍2022/12/19 ~ 2023/01/03</p>
                        <p className='projectskill'>👍사용기술 : Html , Css , Php , Mysql , Javascript</p>
                        <div id='btnspan'>
                            <span id='alive'>자세한 설명</span>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                    <img className='projectimg' src='/images/php_music.png'alt=''/>
                </div>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>📌팀 프로젝트</span>
                <div id='projectview'>
                    <img className='projectimg' src='/images/react_site.png'alt=''/>
                    <div>
                        <h2 className='projectdesc'>
                            <a href='#' id='Contenttitle3' >REACT를 이용한 AW카페</a>
                        </h2>
                        <p id='Contenttitle4' className='projectday'>👍2022/01/31 ~ 2023/02/14</p>
                        <p className='projectskill'>👍사용기술 : Html , Css , React , Mysql </p>
                        <div id='btnspan'>
                            <span id='alive'>자세한 설명</span>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>📌개인 프로젝트</span>
                <div id='projectview'>
                    <div>
                        <h2 className='projectdesc'><a href='#' id='Contenttitle3' >구상중</a></h2>
                        <p id='Contenttitle4' className='projectday'>👍2023년 3월 - 계속 개발중</p>
                        <p className='projectskill'>👍사용기술들</p>
                        <div id='btnspan'>
                            <span id='alive'>자세한 설명</span>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='moreview'>
                <span id='moreviewspan'><p id='startp'>Click ! 👌</p><p id='endp'>더 많은 프로젝트 보러가기 👌</p></span>
            </div>
        </div>
    );
};

export default Project;