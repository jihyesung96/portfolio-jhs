import React from 'react';

const Contact = () => {
    return (
        <div id='Content'>
            <div id='Contentborder' className='contentdiv'>
                <h1 id='Contenttitle'>Contact<span id='h1span'>.</span></h1>
            </div>
            <div className='content-box'>
                <h2 className='titeng'>PLEASE CONTACT ME !</h2>
                <div className='contact-box'>
                    <div id="p-tag">
                        <p>새로운 도전을 하며 성장하고 싶은 개발자입니다 !</p>
                    </div>
                        <div className='contacts-box topbox'>
                            <span>Contact me on E-mail💌</span><br/>
                        </div>
                        <div className='contacts-box'>
                            <span>Thank you ! 🙋‍♂️</span>
                        </div>
                </div>
            </div>    
        </div>
    );
};

export default Contact;