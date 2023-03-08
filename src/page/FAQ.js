import React, { useState } from 'react';
import "./page.css";

const FAQ = () => {
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
        <div id='FAQ'>
            <div id='Contentborder' >
                <h1 id='Contenttitle'>FAQ<span id='h1span'>.</span></h1>
            </div>
            <div id='FAQdiv'>
                <div id='faqdiv'>
                    <ul>
                        <li>
                            <div id='faqlist'>
                                <div id='FAQflex'>
                                    <p class="title faqp">📝 자신에 대해 자유롭게 표현해 주세요</p>
                                    {state ? 
                                    <span ><img onClick={onChange} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state ? <div class="faqanswer">💬 안녕하세요</div>: null}
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
                                {!state1 ? <div class="faqanswer">💬 안녕하세요</div>: null}
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
                                {!state2 ? <div class="faqanswer">💬 안녕하세요</div>: null}
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
                                {!state3 ? <div class="faqanswer">💬 안녕하세요</div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FAQ;