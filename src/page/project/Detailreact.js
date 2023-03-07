import React, { useState } from 'react';

const Detailreact = () => {
    const [state,setState] =useState(true)
    const [state1,setState1] =useState(true)
    const [state2,setState2] =useState(true)
    const [state3,setState3] =useState(true)
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
    return (
        <div>
            <img src='/images/react_site.png'/>
            <div id='dtrdiv'>
                <div>
                    <ul>
                        <li>
                            <div id='dtrlist'>
                                <div id='dtrflex'>
                                    <p class="title dtrp">HTML</p>
                                    {state ? 
                                    <span ><img onClick={onChange} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state ? <div class="dtranswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtrflex'>
                                    <p class="title dtrp">CSS</p>
                                    {state1 ? 
                                    <span ><img onClick={onChange1} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange1}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state1 ? <div class="dtranswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtrflex'>
                                    <p class="title dtrp">REACT</p>
                                    {state2 ? 
                                    <span ><img onClick={onChange2} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange2}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state2 ? <div class="dtranswer">안녕하세요</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='dtrflex'>
                                    <p class="title dtrp">MYSQL</p>
                                    {state3? 
                                    <span ><img onClick={onChange3} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange3}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state3 ? <div class="dtranswer">안녕하세요</div>: null}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Detailreact;