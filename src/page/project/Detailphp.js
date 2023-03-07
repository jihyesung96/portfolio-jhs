import React, { useState } from 'react';

const Detailphp = () => {
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
            <div id='dtpdiv'>
                <img src='/images/php_music.png'/>
                <div>
                    <ul>
                        <li>
                            <div id='dtplist'>
                                <div id='dtpflex'>
                                    <p class="title dtpp">HTML</p>
                                    {state ? 
                                    <span ><img onClick={onChange} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state ? <div class="dtpanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtpflex'>
                                    <p class="title dtpp">CSS</p>
                                    {state1 ? 
                                    <span ><img onClick={onChange1} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange1}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state1 ? <div class="dtpanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtpflex'>
                                    <p class="title dtpp">PHP</p>
                                    {state2 ? 
                                    <span ><img onClick={onChange2} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange2}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state2 ? <div class="dtpanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtpflex'>
                                    <p class="title dtpp">MYSQL</p>
                                    {state3 ? 
                                    <span ><img onClick={onChange3} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange3}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state3 ? <div class="dtpanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtpflex'>
                                    <p class="title dtpp">JAVASCRIPT</p>
                                    {state4 ? 
                                    <span ><img onClick={onChange4} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange4}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state4 ? <div class="dtpanswer">안녕하세요</div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default Detailphp;