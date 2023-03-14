import React from 'react';
import "./page.css";

function Introduction(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    
}
function About(){
    window.scrollTo({
        top: 900,
        behavior: 'smooth'
    })
}
const Title = ({scrollnum}) => {

    return (
        <div id='Title'>
            <div id='Titleflex'>
                <h1 onClick={Introduction} style={scrollnum===1 ? { scale:'1.1' }: { scale:'1' } }>Introduction</h1>
                <ul>
                    <li id='Titleulflex' style={scrollnum===2 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===2 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }}class="Circle" ></div>소개</li>
                </ul>
            </div>
            <div>
                <h1 onClick={About} style={scrollnum===3 ? { scale:'1.1' }: { scale:'1' } }>About me</h1>
                <ul>
                    <li id='Titleulflex' style={scrollnum===4 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===4 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>경성대학교</li>
                    <li id='Titleulflex' style={scrollnum===5 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===5 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>교육</li>
                    <li id='Titleulflex' style={scrollnum===6 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===6 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>my skill</li>
                </ul>
            </div>
            <div>
                <h1 style={scrollnum===7 ? { scale:'1.1' }: { scale:'1' } }>Project</h1>
                <ul>
                    <li id='Titleulflex' style={scrollnum===8 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===8 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Javascript-Project</li>
                    <li id='Titleulflex' style={scrollnum===9 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===9 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Php-Project</li>
                    <li id='Titleulflex' style={scrollnum===10 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===10 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>React-Project</li>
                    <li id='Titleulflex' style={scrollnum===11 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===11 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>React-Portfolio</li>
                </ul>
            </div>
            <div>
                <h1 style={scrollnum===12 ? { scale:'1.1' }: { scale:'1' } }>Share</h1>
                <ul>
                    <li id='Titleulflex' style={scrollnum===13 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===13 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Blog</li>
                    <li id='Titleulflex' style={scrollnum===14 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===14 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Notion</li>
                    <li id='Titleulflex' style={scrollnum===15 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===15 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Github</li>
                </ul>
            </div>
            <div>
                <h1 style={scrollnum===16 ? { scale:'1.1' }: { scale:'1' } }>FAQ</h1>
                <ul>
                    <li id='Titleulflex' style={scrollnum===17 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===17 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Answer</li>
                </ul>
            </div>
            <div id='titlema'>
                <h1 style={scrollnum===18 ? { scale:'1.1' }: { scale:'1' } }>CONTACT</h1>
            </div>
            <a id='titlea' href="mailto:wlgptjd1009@naver.com">wlgptjd1009@naver.com</a>
            <p id='titlep'>Last update: 2023/03/14</p>
        </div>
    );
};

export default Title;