import React, { useState } from "react";
import "./page.css";
import "./Detailstyle.css";

const Project = ({ topRef, ProjetoneRef, ProjettwoRef, ProjetthreeRef, ProjetfourRef }) => {
  const [states, setStates] = useState({
    state: true,
    state1: true,
    state2: true,
    state3: true,
    state4: true,
    state5: true,
    state6: true,
    state7: true,
    state8: true,
    state9: true,
    state10: true,
    state11: true,
    state12: true,
    state13: true,
    state14: true,
  });

  const handleToggle = (key) => {
    setStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  // Reusable ToggleableSection component
  const ToggleableSection = ({ title, content, isOpen, onToggle }) => (
    <li>
      <div id="dtlist" onClick={onToggle}>
        <div id="dtflex">
          <p className="title dtp">{title}</p>
          <span>
            <img src={isOpen ? "/images/up.png" : "/images/down.png"} alt="" />
          </span>
        </div>
        {!isOpen && <div className="dtanswer">{content}</div>}
      </div>
    </li>
  );

  return (
    <div id="Project" ref={topRef}>
      <div id="Contentborder">
        <h1 id="Contenttitle">
          Project<span id="h1span">.</span>
        </h1>
      </div>

      {/* Project 1 */}
      <div id="Project1">
        <span id="Contenttitle2" className="projectspan" ref={ProjetoneRef}>
          📌팀 프로젝트
        </span>
        <div id="projectview">
          <img className="projectimg" src="/images/javascript_ball.png" alt="" />
          <div className="pdesc">
            <h2 className="projectdesc">
              <a href="http://wlgptjd1009.dothome.co.kr/Javascript_project/baseball.html" id="Contenttitle3">
                Javascript를 이용한 야구 게임
              </a>
            </h2>
            <p id="Contenttitle4" className="projectday">
              👍2022/11/11 ~ 2022/11/25
            </p>
            <p id="Contenttitle4" className="projectday">
              👍Javascript를 통하여 많은 내장 함수들을 배우게 된 프로젝트
            </p>
            <div id="btnspan">
              <a href="http://wlgptjd1009.dothome.co.kr/Javascript_project/baseball.html" id="alive">
                VIEW LIVE
              </a>
              <a href="https://github.com/jihyesung96/java_project" id="alive">
                VIEW GITHUB
              </a>
            </div>
          </div>
        </div>
        <h2 id="dtskills">💡Use Skills</h2>
        <div id="dtpad">
          <div id="dtdiv">
            <ul>
              <ToggleableSection
                title="HTML"
                content="HTML5를 사용하여 실제 야구 전광판을 모티브로 만들어서 표현하고자 알맞은 태그들을 사용하여 화면을 구현하였습니다."
                isOpen={states.state}
                onToggle={() => handleToggle("state")}
              />
              <ToggleableSection
                title="CSS"
                content="CSS3을 사용하여, 실제 야구장에서 관람하는 느낌을 내기 위해 화면의 배경 및 전광판을 LED색으로 표현하여 화면을 구현하였습니다. 또한 애니메이션 기능을 사용하여 투수와 타자, 타자들의 뛰는 모션까지 구현을 하였습니다."
                isOpen={states.state1}
                onToggle={() => handleToggle("state1")}
              />
              <ToggleableSection
                title="JAVASCRIPT"
                content="JAVASCRIPT를 사용하여 실제 야구 규칙을 실현하기 위해 조건문(if문)과, 반복문(for문)을 사용하였고, Math.random을 활용하여 확률을 알고리즘으로 코드를 작성하여 게임 진행 방식을 구현하였습니다."
                isOpen={states.state2}
                onToggle={() => handleToggle("state2")}
              />
            </ul>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div id="Project2">
        <span id="Contenttitle2" className="projectspan" ref={ProjettwoRef}>
          📌팀 프로젝트
        </span>
        <div id="projectview">
          <div className="pdesc">
            <h2 className="projectdesc">
              <a href="http://wlgptjd1009.dothome.co.kr/AW/index.php" id="Contenttitle3">
                PHP,MYSQL을 이용한 AW뮤직
              </a>
            </h2>
            <p id="Contenttitle4" className="projectday">
              👍2022/12/19 ~ 2023/01/03
            </p>
            <p id="Contenttitle4" className="projectday">
              👍php 와 mysql을 통해 페이지 이동과 데이터 관리를 배우게 된 프로젝트
            </p>
            <div id="btnspan">
              <a href="http://wlgptjd1009.dothome.co.kr/AW/index.php" id="alive">
                VIEW LIVE
              </a>
              <a href="https://github.com/jihyesung96/php_project_awmusic" id="alive">
                VIEW GITHUB
              </a>
            </div>
          </div>
          <img className="projectimg" src="/images/php_music.png" alt="" />
        </div>
        <h2 id="dtskills">💡Use Skills</h2>
        <div id="dtpad">
          <div id="dtdiv">
            <ul>
              <ToggleableSection
                title="HTML"
                content="HTML5를 사용하여 구상하였던 페이지에 해당하는 디자인의 형태를 구현하였습니다."
                isOpen={states.state3}
                onToggle={() => handleToggle("state3")}
              />
              <ToggleableSection
                title="CSS"
                content="CSS3을 사용하여 메인페이지, 검색페이지, 추천페이지, 최신음악리스트 페이지, 로그인, 회원가입, 음악등록 페이지를 디자인을 하여 화면을 구현하였습니다."
                isOpen={states.state4}
                onToggle={() => handleToggle("state4")}
              />
              <ToggleableSection
                title="PHP"
                content="PHP를 사용하여 메인 페이지, 검색페이지, 추천페이지, 최신음악리스트 페이지을 만들어서 페이지 이동을 구현하였습니다."
                isOpen={states.state5}
                onToggle={() => handleToggle("state5")}
              />
              <ToggleableSection
                title="MYSQL"
                content="MYSQL을 사용하여 데이터 베이스 user(아이디,비밀번호,비밀번호확인,이름,전화번호)와 album(제목,아티스트명,장르,발매일,앨범사진)를 구축하여 관리자 아이디로 로그인시 새로운 음악을 데이터 베이스에 추가할수 있도록 구현하였습니다."
                isOpen={states.state6}
                onToggle={() => handleToggle("state6")}
              />
              <ToggleableSection
                title="JAVASCRIPT"
                content="JAVASCRIPT의 구문인 map과 filter를 사용하여 데이터를 리스트로 불러온 후, 필요로 하는 데이터를 화면에 구현하도록 코드를 작성하였습니다. 사이트 회원가입 시에, 아이디, 비밀번호, 비밀번호 확인하는 코드에는 정규표현식을 사용하였습니다."
                isOpen={states.state7}
                onToggle={() => handleToggle("state7")}
              />
            </ul>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div id="Project3">
        <span id="Contenttitle2" className="projectspan" ref={ProjetthreeRef}>
          📌팀 프로젝트
        </span>
        <div id="projectview">
          <img className="projectimg" src="/images/react_site.png" alt="" />
          <div className="pdesc">
            <h2 className="projectdesc">
              <a href="https://portfolio-jhs-qv92.vercel.app/" id="Contenttitle3">
                REACT를 이용한 AW카페
              </a>
            </h2>
            <p id="Contenttitle4" className="projectday">
              👍2022/01/31 ~ 2023/02/14
            </p>
            <p id="Contenttitle4" className="projectday">
              👍React를 사용하여 렌더링과 상태관리 컴포넌트 등 다양한 기능을 배우게 된 프로젝트
            </p>
            <div id="btnspan">
              <a href="https://portfolio-jhs-qv92.vercel.app/" id="alive">
                VIEW LIVE
              </a>
              <a href="https://github.com/jihyesung96/react_aw_cafe" id="alive">
                VIEW GITHUB
              </a>
            </div>
          </div>
        </div>
        <h2 id="dtskills">💡Use Skills</h2>
        <div id="dtpad">
          <div id="dtdiv">
            <ul>
              <ToggleableSection
                title="HTML"
                content="HTML5를 사용하여 페이지 내 구조와 디자인을 구현하였습니다."
                isOpen={states.state8}
                onToggle={() => handleToggle("state8")}
              />
              <ToggleableSection
                title="CSS"
                content="CSS3을 사용하여 페이지의 레이아웃과 스타일링을 조정하였습니다."
                isOpen={states.state9}
                onToggle={() => handleToggle("state9")}
              />
              <ToggleableSection
                title="JAVASCRIPT"
                content="JAVASCRIPT를 사용하여 사용자 인터페이스와 상호작용을 구현하였습니다."
                isOpen={states.state10}
                onToggle={() => handleToggle("state10")}
              />
              <ToggleableSection
                title="REACT"
                content="REACT를 사용하여 컴포넌트 기반으로 개발하고 상태 관리를 최적화하였습니다."
                isOpen={states.state11}
                onToggle={() => handleToggle("state11")}
              />
            </ul>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div id="Project4">
        <span id="Contenttitle2" className="projectspan" ref={ProjetfourRef}>
          📌개인 프로젝트
        </span>
        <div id="projectview">
          <div className="pdesc">
            <h2 className="projectdesc">
              <a href="https://portfolio-jhs.vercel.app/" id="Contenttitle3">
                나만의 포트폴리오 개발 (현재페이지)
              </a>
            </h2>
            <p id="Contenttitle4" className="projectday">
              👍2023년 3월 - 계속 개발중
            </p>
            <p id="Contenttitle4" className="projectday">
              👍포트폴리오 제작하면서 React를 복습하게 된 프로젝트
            </p>
            <div id="btnspan">
              <a href="https://portfolio-jhs.vercel.app/" id="alive">
                VIEW LIVE
              </a>
              <a href="https://github.com/jihyesung96/portfolio-jhs" id="alive">
                VIEW GITHUB
              </a>
            </div>
          </div>
          <img className="projectimg" src="/images/po.png" alt="" />
        </div>
        <h2 id="dtskills">💡Use Skills</h2>
        <div id="dtpad">
          <div id="dtdiv">
            <ul>
              <ToggleableSection
                title="HTML"
                content="HTML5를 사용하여서 각 페이지에 해당하는 형태를 알맞은 태그를 사용하여 화면을 구현하였습니다."
                isOpen={states.state12}
                onToggle={() => handleToggle("state12")}
              />
              <ToggleableSection
                title="CSS"
                content="CSS3을 사용하여 각 페이지에 해당하는데 데이터들을 구상하였던 디자인에 알맞게 위치를 변경, 효과등을 추가하여 하면을 구현하였습니다."
                isOpen={states.state13}
                onToggle={() => handleToggle("state13")}
              />
              <ToggleableSection
                title="REACT"
                content="REACT 구문의 REACT HOOK을 사용하여 상태 관리를 통해, 사용자가 원하는 상황에 따라 페이지가 리렌더링 되도록 코드를 작성하여 화면을 구현하였습니다. React-Router를 사용하여 페이지를 렌더링 하였으며 React-State를 사용하여 상태를 관리하였습니다. 또한 Redux를 사용하여 비동기 작업을 하였습니다."
                isOpen={states.state14}
                onToggle={() => handleToggle("state14")}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
