import React, { useState } from 'react';
import "./page.css";

const FAQ = ({FAQRef,AnswerRef}) => {
    const [state,setState] =useState(true)
    const [state1,setState1] =useState(true)
    const [state2,setState2] =useState(true)
    const [state3,setState3] =useState(true)
    const [state4,setState4] =useState(true)
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
    return (
        <div id='FAQ' ref={FAQRef}>
            <div id='Contentborder' >
                <h1 id='Contenttitle'>FAQ<span id='h1span'>.</span></h1>
            </div>
            <div id='FAQdiv' ref={AnswerRef}>
                <div id='faqdiv' >
                    <ul>
                        <li>
                            <div id='faqlist'>
                                <div id='FAQflex'>
                                    <p class="title faqp">📝 자신에 대해 자유롭게 표현해 주세요</p>
                                    {state ? 
                                    <span ><img onClick={onChange} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state ? <div class="faqanswer">💬 안녕하세요! 풀스택을 희망하는 지혜성입니다. 저는 개발에 대한 가장 크게 느낀 매력이 새로운 언어와 알고리즘에 대한 배움을 꾸준히 지속적으로 해야하는 점이라고 생각합니다.
                                이러한 자세를 저의 습관으로 하여 현재의 포토폴리오를 완성하였습니다. 프론트 엔드로서 발전할 수있는 역량으로는, 헤딩하는 자세를 가지고 코드 작성에 두려움이 없으며, 코드에 대한 빠른 이해력을 습득하고 있습니다. 기능적으로 안되는 일이 있더라도
                                차선책을 생각하며, 모르는 코드에 대해 이해하기 위해 끊임없이 노력합니다. 프론트 엔드의 전문성과 기능구현, 두가지 모두를 저의 능력으로 가지기 위해 노력하는 개발자입니다.  </div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='FAQflex'>
                                    <p class="title faqp">📝 전공에서 개발자로 전향된 사유가 어떻게 되나요?</p>
                                    {state1 ? 
                                    <span ><img onClick={onChange1} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange1}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state1 ? <div class="faqanswer">💬 저는 원래 기계나 전자쪽에 흥미를 느껴, 대학교 전공을 로봇과 관련하여 진학을 하게 되었습니다. 전공은 메카트로닉스공학과으로 전자, 컴퓨터 등 공학지식을 융합하여 학습하였으며,
                                        C프로그래밍 언어를 작성하여 해당 코드로 기계를 작동시키는 과정 속에서 코드를 작성하는 것에 대한 흥미를 느끼게 되었습니다. 
                                        코드는 정답이 없고, 개발자에 의하여 무에서 유로 구현되는 화면에 대한 성취감과 흥미를 느껴, 전공에 대한 관심을 개발로 확대시켜 전향하게 되었습니다.  
                                        </div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='FAQflex'>
                                    <p class="title faqp">📝 프로그래밍을 시작한 경위와 본격적으로 투신하고 생업으로 삼기로 결정한 이야기를 해주세요.</p>
                                    {state2 ? 
                                    <span ><img onClick={onChange2} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange2}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state2 ? <div class="faqanswer">💬 제가 개발자가 된 이유는 코드를 통해 다양한게 만들수 있어서 입니다. 저는 대학교 메카트로닉스공학과를 전공하면서 코드를 통해서 기능을 만들거거나 제어 할수 있는것을 배우게 되어서 이쪽에 흥미를 느꼈습니다.
                                그후 프론트엔드 교육과정을 수업을 들으면서 다양한 언어를 통해 액션이 이루어지고 다양한 이벤트를 만들고 페이지가 이동하고 데이터를 관리 하는부분이 신기했습니다.
                                프로젝트를 만들면서 재미있어 하는 나자신을 보고 개발자를 생업으로 삼기로 결정하였습니다.</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='FAQflex'>
                                    <p class="title faqp">📝 기술 경향을 파악하고 업무 역량을 강화하기 위한 본인의 학습 방법을 구체적으로 설명해주세요.</p>
                                    {state3 ? 
                                    <span ><img onClick={onChange3} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange3}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state3 ? <div class="faqanswer">💬 프론트 엔드 교육 과정을 수업들으면서 Html,Css,React(상태관리와 Hook함수,Redux),Javascript(기본문법와 내장객체,api),Typescript(기본문법)에 대해 이해를하고 Php,Mysql(데이터관리)를 통하여
                                백엔드에도 관심을 가지게 되었습니다. 아직 저는 Javascript와 React를 다양한 라이브러리를 완벽하게 이해하지 못하고 있다고 생각합니다 그래서 저는 노션을 이용하여 배운것들을 정리하며 모르는것을 검색을 통하여 이해를하고 응용하여 하나의 프로젝트를 만들면서 활용을 합니다.
                                </div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='FAQflex'>
                                    <p class="title faqp">📝 본인이 성공적으로 수행한 프로젝트의 성공요인이 무엇인지, 어려움을 극복하기 위해 어떤 방법을 사용했는지 기술하시오.</p>
                                    {state4 ? 
                                    <span ><img onClick={onChange4} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange4}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state4 ? <div class="faqanswer">💬 최근에 React를 이용한 팀프로젝트를 하였습니다. 처음 사용하는 React라서 상태관리와 리렌더링에 대해서 생소하였기 때문에 어려움을 겪었습니다.
                                처음에는 아는 지식을 동원하여 여러번 반복하여 상태관리와 리렌더링을 하였으나 React관련 도서와 React 공식 사이트에서 관련된 지식을 검색해보고 찾아보았더니 알지 못했던 라이브러리를
                                알게되었습니다. 그로 인해 상태관리와 리렌더링을 간단한 방식으로 구현 되었고 짧은 기간안에 프로젝트를 완성 할수 있었습니다. 이사례를 들었던 이유는 코드는 다양한 방식으로 만들수 있기 때문에
                                항상 배움의 자세를 유지하자 라는 자세를 얻었기 때문입니다.
                                </div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FAQ;