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
                                    <p class="title faqp">π μμ μ λν΄ μμ λ‘­κ² ννν΄ μ£ΌμΈμ</p>
                                    {state ? 
                                    <span ><img onClick={onChange} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state ? <div class="faqanswer">π¬ μλνμΈμ! νμ€νμ ν¬λ§νλ μ§νμ±μλλ€. μ λ κ°λ°μ λν κ°μ₯ ν¬κ² λλ λ§€λ ₯μ΄ μλ‘μ΄ μΈμ΄μ μκ³ λ¦¬μ¦μ λν λ°°μμ κΎΈμ€ν μ§μμ μΌλ‘ ν΄μΌνλ μ μ΄λΌκ³  μκ°ν©λλ€.
                                μ΄λ¬ν μμΈλ₯Ό μ μ μ΅κ΄μΌλ‘ νμ¬ νμ¬μ ν¬ν ν΄λ¦¬μ€λ₯Ό μμ±νμμ΅λλ€. νλ‘ νΈ μλλ‘μ λ°μ ν  μμλ μ­λμΌλ‘λ, ν€λ©νλ μμΈλ₯Ό κ°μ§κ³  μ½λ μμ±μ λλ €μμ΄ μμΌλ©°, μ½λμ λν λΉ λ₯Έ μ΄ν΄λ ₯μ μ΅λνκ³  μμ΅λλ€. κΈ°λ₯μ μΌλ‘ μλλ μΌμ΄ μλλΌλ
                                μ°¨μ μ±μ μκ°νλ©°, λͺ¨λ₯΄λ μ½λμ λν΄ μ΄ν΄νκΈ° μν΄ λμμμ΄ λΈλ ₯ν©λλ€. νλ‘ νΈ μλμ μ λ¬Έμ±κ³Ό κΈ°λ₯κ΅¬ν, λκ°μ§ λͺ¨λλ₯Ό μ μ λ₯λ ₯μΌλ‘ κ°μ§κΈ° μν΄ λΈλ ₯νλ κ°λ°μμλλ€.  </div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='FAQflex'>
                                    <p class="title faqp">π μ κ³΅μμ κ°λ°μλ‘ μ ν₯λ μ¬μ κ° μ΄λ»κ² λλμ?</p>
                                    {state1 ? 
                                    <span ><img onClick={onChange1} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange1}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state1 ? <div class="faqanswer">π¬ μ λ μλ κΈ°κ³λ μ μμͺ½μ ν₯λ―Έλ₯Ό λκ»΄, λνκ΅ μ κ³΅μ λ‘λ΄κ³Ό κ΄λ ¨νμ¬ μ§νμ νκ² λμμ΅λλ€. μ κ³΅μ λ©μΉ΄νΈλ‘λμ€κ³΅νκ³ΌμΌλ‘ μ μ, μ»΄ν¨ν° λ± κ³΅νμ§μμ μ΅ν©νμ¬ νμ΅νμμΌλ©°,
                                        Cνλ‘κ·Έλλ° μΈμ΄λ₯Ό μμ±νμ¬ ν΄λΉ μ½λλ‘ κΈ°κ³λ₯Ό μλμν€λ κ³Όμ  μμμ μ½λλ₯Ό μμ±νλ κ²μ λν ν₯λ―Έλ₯Ό λλΌκ² λμμ΅λλ€. 
                                        μ½λλ μ λ΅μ΄ μκ³ , κ°λ°μμ μνμ¬ λ¬΄μμ μ λ‘ κ΅¬νλλ νλ©΄μ λν μ±μ·¨κ°κ³Ό ν₯λ―Έλ₯Ό λκ»΄, μ κ³΅μ λν κ΄μ¬μ κ°λ°λ‘ νλμμΌ μ ν₯νκ² λμμ΅λλ€.  
                                        </div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='FAQflex'>
                                    <p class="title faqp">π νλ‘κ·Έλλ°μ μμν κ²½μμ λ³Έκ²©μ μΌλ‘ ν¬μ νκ³  μμμΌλ‘ μΌκΈ°λ‘ κ²°μ ν μ΄μΌκΈ°λ₯Ό ν΄μ£ΌμΈμ.</p>
                                    {state2 ? 
                                    <span ><img onClick={onChange2} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange2}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state2 ? <div class="faqanswer">π¬ μ κ° κ°λ°μκ° λ μ΄μ λ μ½λλ₯Ό ν΅ν΄ λ€μνκ² λ§λ€μ μμ΄μ μλλ€. μ λ λνκ΅ λ©μΉ΄νΈλ‘λμ€κ³΅νκ³Όλ₯Ό μ κ³΅νλ©΄μ μ½λλ₯Ό ν΅ν΄μ κΈ°λ₯μ λ§λ€κ±°κ±°λ μ μ΄ ν μ μλκ²μ λ°°μ°κ² λμ΄μ μ΄μͺ½μ ν₯λ―Έλ₯Ό λκΌμ΅λλ€.
                                κ·Έν νλ‘ νΈμλ κ΅μ‘κ³Όμ μ μμμ λ€μΌλ©΄μ λ€μν μΈμ΄λ₯Ό ν΅ν΄ μ‘μμ΄ μ΄λ£¨μ΄μ§κ³  λ€μν μ΄λ²€νΈλ₯Ό λ§λ€κ³  νμ΄μ§κ° μ΄λνκ³  λ°μ΄ν°λ₯Ό κ΄λ¦¬ νλλΆλΆμ΄ μ κΈ°νμ΅λλ€.
                                νλ‘μ νΈλ₯Ό λ§λ€λ©΄μ μ¬λ―Έμμ΄ νλ λμμ μ λ³΄κ³  κ°λ°μλ₯Ό μμμΌλ‘ μΌκΈ°λ‘ κ²°μ νμμ΅λλ€.</div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='FAQflex'>
                                    <p class="title faqp">π κΈ°μ  κ²½ν₯μ νμνκ³  μλ¬΄ μ­λμ κ°ννκΈ° μν λ³ΈμΈμ νμ΅ λ°©λ²μ κ΅¬μ²΄μ μΌλ‘ μ€λͺν΄μ£ΌμΈμ.</p>
                                    {state3 ? 
                                    <span ><img onClick={onChange3} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange3}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state3 ? <div class="faqanswer">π¬ νλ‘ νΈ μλ κ΅μ‘ κ³Όμ μ μμλ€μΌλ©΄μ Html,Css,React(μνκ΄λ¦¬μ Hookν¨μ,Redux),Javascript(κΈ°λ³Έλ¬Έλ²μ λ΄μ₯κ°μ²΄,api),Typescript(κΈ°λ³Έλ¬Έλ²)μ λν΄ μ΄ν΄λ₯Όνκ³  Php,Mysql(λ°μ΄ν°κ΄λ¦¬)λ₯Ό ν΅νμ¬
                                λ°±μλμλ κ΄μ¬μ κ°μ§κ² λμμ΅λλ€. μμ§ μ λ Javascriptμ Reactλ₯Ό λ€μν λΌμ΄λΈλ¬λ¦¬λ₯Ό μλ²½νκ² μ΄ν΄νμ§ λͺ»νκ³  μλ€κ³  μκ°ν©λλ€ κ·Έλμ μ λ λΈμμ μ΄μ©νμ¬ λ°°μ΄κ²λ€μ μ λ¦¬νλ©° λͺ¨λ₯΄λκ²μ κ²μμ ν΅νμ¬ μ΄ν΄λ₯Όνκ³  μμ©νμ¬ νλμ νλ‘μ νΈλ₯Ό λ§λ€λ©΄μ νμ©μ ν©λλ€.
                                </div>: null}
                            </div>
                        </li>
                        <li>
                            <div>
                                <div id='FAQflex'>
                                    <p class="title faqp">π λ³ΈμΈμ΄ μ±κ³΅μ μΌλ‘ μνν νλ‘μ νΈμ μ±κ³΅μμΈμ΄ λ¬΄μμΈμ§, μ΄λ €μμ κ·Ήλ³΅νκΈ° μν΄ μ΄λ€ λ°©λ²μ μ¬μ©νλμ§ κΈ°μ νμμ€.</p>
                                    {state4 ? 
                                    <span ><img onClick={onChange4} src='/images/down.png'alt=''/></span>
                                    :<span onClick={onChange4}><img src='/images/up.png'alt=''/></span>}
                                </div>
                                {!state4 ? <div class="faqanswer">π¬ μ΅κ·Όμ ννλ‘μ νΈλ₯Ό νλ©΄μ REACTλ₯Ό μ¬μ©
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