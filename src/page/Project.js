import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./page.css";
import "./Detailstyle.css";

const Project = () => {
    const [state,setState] =useState(true)
    const [state1,setState1] =useState(true)
    const [state2,setState2] =useState(true)
    const [state3,setState3] =useState(true)
    const [state4,setState4] =useState(true)
    const [state5,setState5] =useState(true)
    const [state6,setState6] =useState(true)
    const [state7,setState7] =useState(true)
    const [state8,setState8] =useState(true)
    const [state9,setState9] =useState(true)
    const [state10,setState10] =useState(true)
    const [state11,setState11] =useState(true)
    const [state12,setState12] =useState(true)
    const [state13,setState13] =useState(true)
    const [state14,setState14] =useState(true)
    const onChange = () => {
        setState(!state)
    }
    const onChange1 = () => {
        setState1(!state1)
    }
    const onChange2 = () => {
        setState2(!state2)
    }
    const onChange3 = () => {
        setState3(!state3)
    }
    const onChange4 = () => {
        setState4(!state4)
    }
    const onChange5 = () => {
        setState5(!state5)
    }
    const onChange6 = () => {
        setState6(!state6)
    }
    const onChange7 = () => {
        setState7(!state7)
    }
    const onChange8 = () => {
        setState8(!state8)
    }
    const onChange9 = () => {
        setState9(!state9)
    }
    const onChange10 = () => {
        setState10(!state10)
    }
    const onChange11 = () => {
        setState11(!state11)
    }
    const onChange12 = () => {
        setState12(!state12)
    }
    const onChange13 = () => {
        setState13(!state13)
    }
    const onChange14 = () => {
        setState14(!state14)
    }
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
                        <div id='btnspan'>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                </div>
                <h2 id='dtskills'>💡Use Skills</h2>
            <div id='dtdiv'>
                <div>
                    <ul>
                        <li>
                            <div id='dtlist'>
                                <div id='dtflex'>
                                    <p class="title dtp">HTML</p>
                                    {state ? 
                                    <span ><img onClick={onChange} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state ? <div class="dtanswer">Html</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">CSS</p>
                                    {state1 ? 
                                    <span ><img onClick={onChange1} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange1}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state1 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">JAVASCRIPT</p>
                                    {state2 ? 
                                    <span ><img onClick={onChange2} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange2}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state2 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                    </ul>
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
                        <div id='btnspan'>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                    <img className='projectimg' src='/images/php_music.png'alt=''/>
                </div>
                <h2 id='dtskills'>💡Use Skills</h2>
                <div id='dtdiv'>
                <div>
                    <ul>
                        <li>
                            <div id='dtlist'>
                                <div id='dtflex'>
                                    <p class="title dtp">HTML</p>
                                    {state3 ? 
                                    <span ><img onClick={onChange3} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange3}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state3 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">CSS</p>
                                    {state4 ? 
                                    <span ><img onClick={onChange4} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange4}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state4 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">PHP</p>
                                    {state5 ? 
                                    <span ><img onClick={onChange5} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange5}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state5 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">MYSQL</p>
                                    {state6 ? 
                                    <span ><img onClick={onChange6} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange6}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state6 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">JAVASCRIPT</p>
                                    {state7 ? 
                                    <span ><img onClick={onChange7} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange7}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state7 ? <div class="dtpanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
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
                        <div id='btnspan'>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                </div>
                <h2 id='dtskills'>💡Use Skills</h2>
            <div id='dtdiv'>
                <div>
                    <ul>
                        <li>
                            <div id='dtlist'>
                                <div id='dtflex'>
                                    <p class="title dtp">HTML</p>
                                    {state8 ? 
                                    <span ><img onClick={onChange8} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange8}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state8 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">CSS</p>
                                    {state9 ? 
                                    <span ><img onClick={onChange9} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange9}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state9 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">REACT</p>
                                    {state10 ? 
                                    <span ><img onClick={onChange10} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange10}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state10 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">MYSQL</p>
                                    {state11? 
                                    <span ><img onClick={onChange11} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange11}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state11 ? <div class="dtanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>📌개인 프로젝트</span>
                <div id='projectview'>
                    <div>
                        <h2 className='projectdesc'><a href='#' id='Contenttitle3' >나만의 포트톨리오 개발 (현재페이지)</a></h2>
                        <p id='Contenttitle4' className='projectday'>👍2023년 3월 - 계속 개발중</p>
                        <p className='projectskill'>👍사용기술들 : Html , Css , React , Javascript</p>
                        <div id='btnspan'>
                            <span id='alive'>자세한 설명</span>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                    <img className='projectimg' src='/images/po.png'alt=''/>
                </div>
            </div>
            <div id='moreview'>
                <span id='moreviewspan'><p id='startp'>Click ! 👌</p><p id='endp'>더 많은 프로젝트 보러가기 👌</p></span>
            </div>
        </div>
    );
};

export default Project;