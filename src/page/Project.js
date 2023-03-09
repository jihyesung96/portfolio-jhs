import React, { useState } from 'react';
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
                    <div className='pdesc'>
                        <h2 className='projectdesc'>
                        <a href='#' id='Contenttitle3' >Javascript를 이용한 야구 게임</a>
                        </h2>
                        <p id='Contenttitle4' className='projectday'>👍2022/11/11 ~ 2022/11/25</p>
                        <p id='Contenttitle4' className='projectday'>👍Javascript를 통하여 많은 내장 함수들을 배우게 된 프로젝트</p>
                        <p id='Contenttitle4' className='projectday'>👍</p>
                        <div id='btnspan'>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='https://github.com/jihyesung96/java_project' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                </div>
                <h2 id='dtskills'>💡Use Skills</h2>
            <div id='dtpad'>
                <div id='dtdiv'>
                    <ul>
                        <li>
                            <div id='dtlist'>
                                <div id='dtflex'>
                                    <p class="title dtp">HTML</p>
                                    {state ? 
                                    <span ><img onClick={onChange} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state ? <div class="dtanswer">HTML5를 사용하여 실제 야구 전광판을 모티브로 만들어서 표현하고자 알맞은 태그들을 사용하여 화면을 구현을 하였습니다.</div>: null}
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
                                {!state1 ? <div class="dtanswer">CSS3을 사용하여 실제 야구장에서 관람하는 느낌을 주기위해 화면의 배경과 전광판의 색 등 화면을 구현을 하였습니다.<br/> 또한 애니메이션 기능을 사용하여
                                투수와 타자 , 타자들의 뛰는 모션까지 구현을 하였습니다.</div>: null}
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
                                {!state2 ? <div class="dtanswer">JAVASCRIPT를 사용하여 실제 야구 규칙을 실현하기 위해 조건문(if문)과, 반복문(for문)을 사용하여 Math.random을 활용하여 확률을 알고리즘을 코드를 작성하여 게임 진행 방식으로 구현하였습니다.</div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>  
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>📌팀 프로젝트</span>
                <div id='projectview'>
                    <div className='pdesc'>
                        <h2 className='projectdesc'>
                            <a href='#' id='Contenttitle3' >PHP,MYSQL을 이용한 AW뮤직</a>
                        </h2>
                        <p id='Contenttitle4' className='projectday'>👍2022/12/19 ~ 2023/01/03</p>
                        <p id='Contenttitle4' className='projectday'>👍php 와 mysql을 통해 페이지이동과 데이터관리를 배워게 된 프로젝트</p>
                        <div id='btnspan'>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='https://github.com/jihyesung96/php_project_awmusic' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                    <img className='projectimg' src='/images/php_music.png'alt=''/>
                </div>
                <h2 id='dtskills'>💡Use Skills</h2>
                <div id='dtpad'>
                <div id='dtdiv'>
                    <ul>
                        <li>
                            <div id='dtlist'>
                                <div id='dtflex'>
                                    <p class="title dtp">HTML</p>
                                    {state3 ? 
                                    <span ><img onClick={onChange3} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange3}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state3 ? <div class="dtanswer">HTML5를 사용하여 구상하였던 페이지에 해당하는 디자인의 형태를 구현하였습니다. </div>: null}
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
                                {!state4 ? <div class="dtanswer">CSS3을 사용하여 메인페이지, 검색페이지, 추천페이지, 최신음악리스트 페이지, 로그인, 회원가입, 음악등록 페이지를 디자인을 하여 화면을 구현하였습니다.</div>: null}
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
                                {!state5 ? <div class="dtanswer">PHP를 사용하여 메인 페이지, 검색페이지, 추천페이지, 최신음악리스트 페이지을 만들어서 페이지 이동을 구현 하였습니다</div>: null}
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
                                {!state6 ? <div class="dtanswer">MYSQL을 사용하여 데이터 베이스 user(아이디,비밀번호,비밀번호확인,이름,전화번호)와 album(제목,아티스트명,장르,발매일,앨범사진)를 구축하여 관리자 아이디로 로그인시 새로운 음악을 데이터 베이스에 추가할수 있도록 구현을 하였습니다.   </div>: null}
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
                                {!state7 ? <div class="dtanswer">JAVASCRIPT를 사용하여 map과 filter를 사용하여 데이터를 리스트로 불러와서 필요로 하는 데이터를 화면에 나타나도록 코드를 사용하여 화면을 구현을 하였습니다.<br/>
                                정규 표현식을 회원가입 페이지 아이디,비밀번호,비밀번호 확인 등에 사용을 하였습니다.</div>: null}
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
                    <div className='pdesc'>
                        <h2 className='projectdesc'>
                            <a href='#' id='Contenttitle3' >REACT를 이용한 AW카페</a>
                        </h2>
                        <p id='Contenttitle4' className='projectday'>👍2022/01/31 ~ 2023/02/14</p>
                        <p id='Contenttitle4' className='projectday'>👍React를 사용하여 렌더링과 상태관리 컴포넌트 등 다양한 기능을 배우게 된 프로젝트</p>
                        <div id='btnspan'>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='#' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                </div>
                <h2 id='dtskills'>💡Use Skills</h2>
            <div id='dtpad'>
                <div id='dtdiv'>
                    <ul>
                        <li>
                            <div id='dtlist'>
                                <div id='dtflex'>
                                    <p class="title dtp">HTML</p>
                                    {state8 ? 
                                    <span ><img onClick={onChange8} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange8}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state8 ? <div class="dtanswer">HTML5를 사용하여서 각 페이지에 해당하는 형태를 알맞은 태그를 사용하여 화면을 구현하였습니다.</div>: null}
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
                                {!state9 ? <div class="dtanswer">CSS3을 사용하여 각 페이지에 해당하는데 데이터들을 구상하였던 디자인에 알맞게 위치를 변경, 효과등을 추가하여 하면을 구현하였습니다.</div>: null}
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
                                {!state10 ? <div class="dtanswer">REACT를 사용하여 REACT HOOK을 사용하여 상태를 관리하여 사용자가 사용하는 상황에 따라 페이지가 리렌더링이 되도록 코드를 사용하여 화면을 구현하였습니다.<br/>
                                React-Router를 사용하여 페이지를 렌더링 하였으며 React-State를 사용하여 상태를 관리하였습니다. 또한 Redux를 사용하여 비동기 작업을 하였습니다. </div>: null}
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
                                {!state11 ? <div class="dtanswer">MYSQL을 사용하여 데이터 베이스 AW(상품명,큰카테고리,카테고리,사진,가격,양,지방량,당량,카페인량,간략한설명) 와 member(아이디,비밀번호,비밀번호확인,이름,닉네임,생년월일,전화번호,이메일)을 구축하여 
                                로그인과 상품등록을 할 수 있도록 구현을 하였습니다. </div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div>
                <span id='Contenttitle2' className='projectspan'>📌개인 프로젝트</span>
                <div id='projectview'>
                    <div className='pdesc'>
                        <h2 className='projectdesc'><a href='#' id='Contenttitle3' >나만의 포트톨리오 개발 (현재페이지)</a></h2>
                        <p id='Contenttitle4' className='projectday'>👍2023년 3월 - 계속 개발중</p>
                        <p id='Contenttitle4' className='projectday'>👍포트폴리오 제작하면서 React를 복습하게 된 프로젝트</p>
                        <div id='btnspan'>
                            <a href='#' id='alive'>VIEW LIVE</a>
                            <a href='https://github.com/jihyesung96/portfolio-jhs' id='alive'>VIEW GITHUB</a>
                        </div>
                    </div>
                    <img className='projectimg' src='/images/po.png'alt=''/>
                </div>
            </div>
            <h2 id='dtskills'>💡Use Skills</h2>
            <div id='dtpad'>
                <div id='dtdiv'>
                    <ul>
                        <li>
                            <div id='dtlist'>
                                <div id='dtflex'>
                                    <p class="title dtp">HTML</p>
                                    {state12 ? 
                                    <span ><img onClick={onChange12} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange12}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state12 ? <div class="dtanswer">HTML5를 사용하여서 각 페이지에 해당하는 형태를 알맞은 태그를 사용하여 화면을 구현하였습니다.</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">CSS</p>
                                    {state13 ? 
                                    <span ><img onClick={onChange13} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange13}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state13 ? <div class="dtanswer">CSS3을 사용하여 각 페이지에 해당하는데 데이터들을 구상하였던 디자인에 알맞게 위치를 변경, 효과등을 추가하여 하면을 구현하였습니다.</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtflex'>
                                    <p class="title dtp">REACT</p>
                                    {state14 ? 
                                    <span ><img onClick={onChange14} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange14}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state14 ? <div class="dtanswer">REACT를 사용하여 REACT HOOK을 사용하여 상태를 관리하여 사용자가 사용하는 상황에 따라 페이지가 리렌더링이 되도록 코드를 사용하여 화면을 구현하였습니다.<br/>
                                React-Router를 사용하여 페이지를 렌더링 하였으며 React-State를 사용하여 상태를 관리하였습니다. 또한 Redux를 사용하여 비동기 작업을 하였습니다. </div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id='moreview'>
                <span id='moreviewspan'><p id='startp'>Click ! 👌</p><p id='endp'>더 많은 프로젝트 보러가기 👌</p></span>
            </div>
        </div>
    );
};

export default Project;