import React from 'react';
import "./page.css";

function Introduction(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
function Introduction1(){
    window.scrollTo({
        top: 250,
        behavior: 'smooth'
    })
}
function About(){
    window.scrollTo({
        top: 900,
        behavior: 'smooth'
    })
}
function About1(){
    window.scrollTo({
        top: 1045,
        behavior: 'smooth'
    })
}
function About2(){
    window.scrollTo({
        top: 1300,
        behavior: 'smooth'
    })
}
function About3(){
    window.scrollTo({
        top: 1545,
        behavior: 'smooth'
    })
}
const Title = ({scrollnum,topRef,ShareRef,FAQRef,ContactRef,ProjetoneRef,ProjettwoRef,ProjetthreeRef,ProjetfourRef,ShareblogRef,SharenotinRef,SharegithobRef,AnswerRef}) => {
    function Project(){
        window.scrollTo({
            top: topRef.current.offsetTop-100,
            behavior: 'smooth'
        })
    }
    function Project1(){
        window.scrollTo({
            top: ProjetoneRef.current.offsetTop-80,
            behavior: 'smooth'
        })
    }
    function Project2(){
        window.scrollTo({
            top: ProjettwoRef.current.offsetTop-80,
            behavior: 'smooth'
        })
    }
    function Project3(){
        window.scrollTo({
            top: ProjetthreeRef.current.offsetTop-80,
            behavior: 'smooth'
        })
    }
    function Project4(){
        window.scrollTo({
            top: ProjetfourRef.current.offsetTop-80,
            behavior: 'smooth'
        })
    }
    function Share(){
        window.scrollTo({
            top: ShareRef.current.offsetTop-100,
            behavior: 'smooth'
        })
    }
    function Share1(){
        window.scrollTo({
            top: ShareblogRef.current.offsetTop-80,
            behavior: 'smooth'
        })
    }
    function Share2(){
        window.scrollTo({
            top: SharenotinRef.current.offsetTop-80,
            behavior: 'smooth'
        })
    }
    function Share3(){
        window.scrollTo({
            top: SharegithobRef.current.offsetTop-80,
            behavior: 'smooth'
        })
    }
    function FAQ(){
        window.scrollTo({
            top: FAQRef.current.offsetTop-100,
            behavior: 'smooth'
        })
    }
    function FAQ1(){
        window.scrollTo({
            top: AnswerRef.current.offsetTop-160,
            behavior: 'smooth'
        })
    }
    function CONTACT(){
        window.scrollTo({
            top: ContactRef.current.offsetTop-50,
            behavior: 'smooth'
        })
    }
    return (
        <div id='Title'>
            <div id='Titleflex'>
                <h1 onClick={Introduction} style={scrollnum===1 ? { scale:'1.1' }: { scale:'1' } }>Introduction</h1>
                <ul>
                    <li onClick={Introduction1} id='Titleulflex' style={scrollnum===2 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===2 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }}class="Circle" ></div>소개</li>
                </ul>
            </div>
            <div>
                <h1 onClick={About} style={scrollnum===3 ? { scale:'1.1' }: { scale:'1' } }>About me</h1>
                <ul>
                    <li onClick={About1} id='Titleulflex' style={scrollnum===4 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===4 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>경성대학교</li>
                    <li onClick={About2} id='Titleulflex' style={scrollnum===5 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===5 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>교육</li>
                    <li onClick={About3} id='Titleulflex' style={scrollnum===6 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===6 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>my skill</li>
                </ul>
            </div>
            <div>
                <h1 onClick={Project} style={scrollnum===7 ? { scale:'1.1' }: { scale:'1' } }>Project</h1>
                <ul>
                    <li onClick={Project1} id='Titleulflex' style={scrollnum===8 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===8 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Javascript-Project</li>
                    <li onClick={Project2} id='Titleulflex' style={scrollnum===9 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===9 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Php-Project</li>
                    <li onClick={Project3} id='Titleulflex' style={scrollnum===10 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===10 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>React-Project</li>
                    <li onClick={Project4} id='Titleulflex' style={scrollnum===11 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===11 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>React-Portfolio</li>
                </ul>
            </div>
            <div>
                <h1 onClick={Share} style={scrollnum===12 ? { scale:'1.1' }: { scale:'1' } }>Share</h1>
                <ul>
                    <li onClick={Share1}  id='Titleulflex' style={scrollnum===13 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===13 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Blog</li>
                    <li onClick={Share2}  id='Titleulflex' style={scrollnum===14 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===14 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Notion</li>
                    <li onClick={Share3}  id='Titleulflex' style={scrollnum===15 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===15 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Github</li>
                </ul>
            </div>
            <div>
                <h1 onClick={FAQ} style={scrollnum===16 ? { scale:'1.1' }: { scale:'1' } }>FAQ</h1>
                <ul>
                    <li onClick={FAQ1} id='Titleulflex' style={scrollnum===17 ? { color:'rgb(248, 205, 7)' }: { color:'inherit' } }><div style={scrollnum===17 ? { backgroundColor:'rgb(248, 205, 7)' }: { backgroundColor:'rgb(110, 110, 110)' }} class="Circle"></div>Answer</li>
                </ul>
            </div>
            <div id='titlema'>
                <h1 onClick={CONTACT} style={scrollnum===18 ? { scale:'1.1' }: { scale:'1' } }>CONTACT</h1>
            </div>
            <a id='titlea' href="mailto:wlgptjd1009@naver.com">wlgptjd1009@naver.com</a>
            <p id='titlep'>Last update: 2023/03/22</p>
        </div>
    );
};

export default Title;