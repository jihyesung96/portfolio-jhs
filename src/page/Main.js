import React from 'react';
import Aboutme from './Aboutme';
import Contact from './Contact';
import FAQ from './FAQ';
import Introduction from './Introduction';
import Project from './Project';
import Share from './Share';
import Title from './Title';

const Main = ({scrollnum}) => {
    return (
        <div>
            <Title scrollnum={scrollnum}/>
            <Introduction />
            <Aboutme />
            <Share/>
            <Project />
            <FAQ />
            <Contact />
            
        </div>
    );
};

export default Main;