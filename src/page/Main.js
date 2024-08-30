import React from 'react';
import Aboutme from './Aboutme';
import Contact from './Contact';
import FAQ from './FAQ';
import Introduction from './Introduction';
import Project from './Project';
import Share from './Share';
import Title from './Title';

const Main = ({scrollnum ,scrollToTop,topRef,ProjetoneRef,ProjettwoRef,ProjetthreeRef,ProjetfourRef,ShareRef,ShareblogRef,SharenotinRef,SharegithobRef,FAQRef,AnswerRef,ContactRef}) => {
    return (
        <div>
            <Title scrollnum={scrollnum} topRef={topRef} ShareRef={ShareRef} FAQRef={FAQRef} ContactRef={ContactRef} ProjetoneRef={ProjetoneRef} ProjettwoRef={ProjettwoRef} ProjetthreeRef={ProjetthreeRef} ProjetfourRef={ProjetfourRef}
            ShareblogRef={ShareblogRef} SharenotinRef={SharenotinRef} SharegithobRef={SharegithobRef} AnswerRef={AnswerRef}/>
            <Introduction />
            <Aboutme />
            <Project topRef={topRef} ProjetoneRef={ProjetoneRef} ProjettwoRef={ProjettwoRef} ProjetthreeRef={ProjetthreeRef} ProjetfourRef={ProjetfourRef}/>
            <Share ShareRef={ShareRef} ShareblogRef={ShareblogRef} SharenotinRef={SharenotinRef} SharegithobRef={SharegithobRef}/>
            <FAQ FAQRef={FAQRef} AnswerRef={AnswerRef}/>
            <Contact scrollToTop={scrollToTop} ContactRef={ContactRef}/>
        </div>
    );
};

export default Main;