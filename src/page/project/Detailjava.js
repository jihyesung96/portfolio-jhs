import React, { useState } from 'react';

const Detailjava = () => {
    const [state,setState] =useState(true)
    const [state1,setState1] =useState(true)
    const [state2,setState2] =useState(true)
    const onChange = () => {
        setState(!state)
    }
    const onChange1 = () => {
        setState1(!state1)
    }
    const onChange2 = () => {
        setState2(!state2)
    }
    return (
        <div>
            <img src='/images/javascript_ball.png'/>
            <div id='dtjdiv'>
                <div>
                    <ul>
                        <li>
                            <div id='dtjlist'>
                                <div id='dtjflex'>
                                    <p class="title dtjp">HTML</p>
                                    {state ? 
                                    <span ><img onClick={onChange} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state ? <div class="dtjanswer">Html</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtjflex'>
                                    <p class="title dtjp">CSS</p>
                                    {state1 ? 
                                    <span ><img onClick={onChange1} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange1}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state1 ? <div class="dtjanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtjflex'>
                                    <p class="title dtjp">JAVASCRIPT</p>
                                    {state2 ? 
                                    <span ><img onClick={onChange2} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange2}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state2 ? <div class="dtjanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Detailjava;