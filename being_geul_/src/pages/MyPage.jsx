// src/pages/MyPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();

  // 더미 데이터 (나중에 백엔드 API 연결)
  const savedPolicies = [
    { id: 1, title: '청년 월세 지원', category: '주거' },
    { id: 3, title: '내일배움카드', category: '취업' },
  ];

  return (
    <div id="mypage-container" style={{ padding: '20px', background: '#1a1a1a', minHeight: '100vh', color: 'white' }}>
      
      {/* 헤더 섹션 */}
      <section id="mypage-header-section">
        <button onClick={() => navigate('/')} className="back-btn" style={{ background: 'none', border: 'none', color: 'white', fontSize: '1rem', cursor: 'pointer' }}>
          <span>←</span> 메인으로
        </button>
        
        <h2 style={{ marginTop: '40px', fontSize: '1.8rem' }}>나의 정책 취향 🏹</h2>
        <div className="chart-container" style={{ margin: '20px auto', height: '200px', border: '1px dashed #555', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           (육각형 차트 들어갈 곳)
        </div>
      </section>

      {/* 리스트 섹션 */}
      <section id="mypage-list-section">
        <div className="list-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>내가 찜한 정책들 ({savedPolicies.length})</h2>
          <button style={{ background: '#ff6b6b', border: 'none', padding: '5px 10px', color: 'white', borderRadius: '5px' }}>선택 삭제</button>
        </div>

        <div id="mypage-results">
          {savedPolicies.map((policy) => (
            <div key={policy.id} style={{ background: '#333', padding: '15px', margin: '10px 0', borderRadius: '10px' }}>
              <span style={{ color: '#4ecdc4', fontSize: '0.8rem' }}>{policy.category}</span>
              <h3 style={{ margin: '5px 0' }}>{policy.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MyPage;