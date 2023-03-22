import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Main from './page/Main';

function App() {
 
  const [scrollnum, setScrollNum ] = useState(0)
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }
  const topRef = useRef(null);
  const ProjetoneRef = useRef(null);
  const ProjettwoRef = useRef(null);
  const ProjetthreeRef = useRef(null);
  const ProjetfourRef = useRef(null);
  const ShareRef =useRef(null);
  const ShareblogRef =useRef(null);
  const SharenotinRef =useRef(null);
  const SharegithobRef =useRef(null);
  const FAQRef =useRef(null);
  const AnswerRef =useRef(null);
  const ContactRef =useRef(null);
  
  const handleScroll = () => {
    console.log("scrolling");
    console.log(window.scrollY)
   
    if (window.scrollY >= 0 && window.scrollY < 250) {  //introduction
      setScrollNum(1);
    }else if(window.scrollY >= 250 && window.scrollY < 900){ //소개
      setScrollNum(2);
    }else if(window.scrollY >= 900 && window.scrollY < 1045){ //About me
      setScrollNum(3);
    }else if(window.scrollY >= 1045 && window.scrollY < 1300){ //경성대학교
      setScrollNum(4);
    }else if(window.scrollY >= 1300 && window.scrollY < 1545){ //교육
      setScrollNum(5);
    }else if(window.scrollY >= 1545 && window.scrollY < topRef.current.offsetTop-100){ //myskill
      setScrollNum(6);
    }else if(window.scrollY >= topRef.current.offsetTop-100 && window.scrollY < ProjetoneRef.current.offsetTop-80 ){ //Project
      setScrollNum(7);
    }else if(window.scrollY >= ProjetoneRef.current.offsetTop-80 && window.scrollY < ProjettwoRef.current.offsetTop-80 ){ //java
      setScrollNum(8);
    }else if(window.scrollY >= ProjettwoRef.current.offsetTop-80 && window.scrollY < ProjetthreeRef.current.offsetTop-80 ){ //php
      setScrollNum(9);
    }else if(window.scrollY >= ProjetthreeRef.current.offsetTop-80 && window.scrollY < ProjetfourRef.current.offsetTop-80 ){ //react
      setScrollNum(10);
    }else if(window.scrollY >= ProjetfourRef.current.offsetTop-80 && window.scrollY < ShareRef.current.offsetTop-100 ){ //pp
      setScrollNum(11);
    }else if(window.scrollY >= ShareRef.current.offsetTop-100 && window.scrollY < ShareblogRef.current.offsetTop-80 ){ //share
      setScrollNum(12);
    }else if(window.scrollY >= ShareblogRef.current.offsetTop-80 && window.scrollY < SharenotinRef.current.offsetTop-80 ){ //blog
      setScrollNum(13);
    }else if(window.scrollY >= SharenotinRef.current.offsetTop-80 && window.scrollY < SharegithobRef.current.offsetTop-80 ){ //notin
      setScrollNum(14);
    }else if(window.scrollY >= SharegithobRef.current.offsetTop-80 && window.scrollY < FAQRef.current.offsetTop-100 ){ //git
      setScrollNum(15);
    }else if(window.scrollY >= FAQRef.current.offsetTop-100 && window.scrollY < AnswerRef.current.offsetTop-160 ){ //git
      setScrollNum(16);
    }else if(window.scrollY >= AnswerRef.current.offsetTop-160 && window.scrollY < ContactRef.current.offsetTop-50 ){ //git
      setScrollNum(17);
    }else{
      setScrollNum(18);
    }
  };

  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
      console.log(ShareRef.current.offsetTop)
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Headers scrollToTop={scrollToTop}/>
      <Routes>
        <Route path='/' element={<Main scrollnum={scrollnum} scrollToTop={scrollToTop} topRef={topRef} ProjetoneRef={ProjetoneRef} 
        ProjettwoRef={ProjettwoRef} ProjetthreeRef={ProjetthreeRef} ProjetfourRef={ProjetfourRef}
        ShareRef={ShareRef} ShareblogRef={ShareblogRef} SharenotinRef={SharenotinRef} SharegithobRef={SharegithobRef}
        FAQRef={FAQRef} AnswerRef={AnswerRef} ContactRef={ContactRef}
        />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
