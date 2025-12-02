// src/pages/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDailyPick } from '../logic/useDailyPick';
import PolicyCard from '../components/PolicyCard';

const Home = () => {
  const navigate = useNavigate(); // 페이지 이동 훅 (Link 역할)
  const { currentCard, handleSwipe, isFinished } = useDailyPick();
  
  // 랜딩 페이지에서 메인으로 넘어가는 스크롤 처리는 CSS(snap-scroll)가 해주지만,
  // 버튼 클릭 시 이동을 위해 간단한 함수를 만듭니다.
  const scrollToMain = () => {
    document.getElementById('main-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-scroll-container">
      
      {/* 1. 랜딩 섹션 */}
      <section className="snap-section" id="landing-section">
        <div className="landing-content">
          <div className="landing-image-placeholder">
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🖼️</div>
            <span>이미지 준비중</span>
          </div>
          
          <h1 className="brand-title">BING-GEUL</h1>
          <p className="brand-slogan">나에게 딱 맞는 정책을 찾아보세요</p>
          
          <div className="landing-buttons">
            <button className="landing-btn primary">로그인</button>
            <button className="landing-btn secondary" onClick={() => alert('준비 중입니다.')}>회원가입</button>
          </div>
          <button onClick={scrollToMain} className="text-link-btn">그냥 둘러보기 ↓</button>
        </div>
      </section>

      {/* 2. 메인(카드) 섹션 */}
      <section className="snap-section" id="main-section">
        <header id="main-header">
          <div className="top-bar-layout">
            <input type="text" id="main-search-input" placeholder="관심 키워드 (예: 청년, 창업)" />
            <div className="top-right-buttons">
              {/* 마이페이지 버튼 */}
              <button onClick={() => navigate('/mypage')} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
                👤
              </button>
            </div>
          </div>
        </header>
        
        <h2 className="section-title">오늘의 추천 정책</h2>

        <div id="card-area" style={{ position: 'relative', height: '500px' }}>
          {/* 카드 렌더링 영역 */}
          {!isFinished && currentCard ? (
            <PolicyCard data={currentCard} onSwipe={handleSwipe} />
          ) : (
            <div style={{ textAlign: 'center', marginTop: '100px', color: '#fff' }}>
              <h3>오늘의 추천 끝! 🎉</h3>
              <p>마이페이지에서 결과를 확인해보세요.</p>
              <button onClick={() => navigate('/mypage')} className="landing-btn primary" style={{ marginTop: '20px' }}>
                결과 보러가기
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. 차트 섹션 (일단 뼈대만) */}
      <section className="snap-section" id="chart-section">
        <h2 style={{ color: 'white' }}>취향 분포도</h2>
        <div className="chart-container">
          <p style={{ color: '#ccc', textAlign: 'center', marginTop: '50px' }}>
             (차트 영역 - 다음 단계에서 구현)
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;