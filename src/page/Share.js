import React from 'react';

const Share = () => {
    return (
        <div id='Share'>
            <div id='Contentborder'>
                <h1 id='Contenttitle'>Share<span id='h1span'>.</span></h1>
            </div>
            <div>
                <span id='Contenttitle2' className='Sharetitle'>📌나만의 백엔드 노트</span>
                <h2 id='Contenttitle3' className='Sharelink'><a href='https://blog.naver.com/wlgptjd1009'>Blog</a></h2>
                <p id='Contenttitle4' className='Sharedesc'>📕 Php+Mysql 등 백엔드 내용정리</p>
                <p id='Contenttitle4' className='Sharedesc'>📕 앞으로 대부분의 백엔드 관련 지식을 블로그에 올릴 예정</p>
            </div>
            <div>
                <span id='Contenttitle2'  className='Sharetitle'>📌나만의 프론트엔드 노트</span>
                <h2 id='Contenttitle3' className='Sharelink'><a href='https://aboard-teller-7ff.notion.site/STUDY-45aa50e4f0874c188ab1a3f40e414b17'>Notion</a></h2>
                <p id='Contenttitle4' className='Sharedesc'>📖 Javascript+React+Typescript+Pyhton 등 프론트엔드 내용 정리</p>
                <p id='Contenttitle4' className='Sharedesc'>📖 부족한 내용 링크로 저장후 보충 공부</p>
                <p id='Contenttitle4' className='Sharedesc'>📖 앞으로 대부분의 프론트엔드 관련 지식을 블로그에 올릴 예정</p>
            </div>
            <div>
                <span id='Contenttitle2'  className='Sharetitle'>📌나만의 코드 저장소</span>
                <h2 id='Contenttitle3' className='Sharelink'><a href='https://github.com/jihyesung96'>GITHUB</a></h2>
                <p id='Contenttitle4' className='Sharedesc'>📓 팀 프로젝트 및 개인 프로젝트 코드 저장 및 공유</p>
                <p id='Contenttitle4' className='Sharedesc'>📓 다양한 언어 예제 연습 코드 저장 및 공유</p>
                <p id='Contenttitle4' className='Sharedesc'>📓 앞으로 새로운 언어를 이용한 프로젝트 코드를 올릴 예정</p>
            </div>
        </div>
    );
};

export default Share;