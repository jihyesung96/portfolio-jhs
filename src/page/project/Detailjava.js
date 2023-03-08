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
        <div id='detail'>
            <h1 id='dtimgtitle'>💻Javascript-Project</h1>
            <img id='dtimg' src='/images/javascript_ball.png' alt=''/>
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
    );
};

export default Detailjava;