import React from 'react';

const Share = () => {
    return (
        <div id='Share'>
            <div id='Contentborder'>
                <h1 id='Contenttitle'>Share<span id='h1span'>.</span></h1>
            </div>
            <div>
                <span id='Contenttitle2' className='Sharetitle'>📌블로그</span>
                <h2 id='Contenttitle3' className='Sharelink'><a href='#'>지식저장소</a></h2>
                <p id='Contenttitle4' className='Sharedesc'>정리</p>
            </div>
            <div>
                <span id='Contenttitle2'  className='Sharetitle'>📌블로그</span>
                <h2 id='Contenttitle3' className='Sharelink'><a href='#'>노션</a></h2>
                <p id='Contenttitle4' className='Sharedesc'>📖 Javascript+React+Typescript+Pyhton 내용 정리</p>
                <p id='Contenttitle4' className='Sharedesc'>📖 부족한 내용 링크로 저장후 보충 공부</p>
                <p id='Contenttitle4' className='Sharedesc'>📖 앞으로 대부분의 포스팅 해당 블로그에 올릴 예정</p>
            </div>
            <div>
                <span id='Contenttitle2'  className='Sharetitle'>📌코드</span>
                <h2 id='Contenttitle3' className='Sharelink'><a href='#'>GITHUB</a></h2>
                <p id='Contenttitle4' className='Sharedesc'>📓 프로젝트 코드 저장 및 공유</p>
            </div>
        </div>
    );
};

export default Share;