// src/components/PolicyCard.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PolicyCard = ({ data, onSwipe }) => {
  const cardRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: cardRef });

  // 버튼 클릭 시 카드 날아가는 애니메이션
  const handleAction = contextSafe((direction) => {
    const xValue = direction === 'SAVE' ? 500 : -500; // 오른쪽 or 왼쪽
    const rotateValue = direction === 'SAVE' ? 20 : -20; // 회전 각도

    gsap.to(cardRef.current, {
      x: xValue,
      rotation: rotateValue,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        onSwipe(direction); // 부모에게 알림
        // 다음 카드를 위해 원위치
        gsap.set(cardRef.current, { x: 0, rotation: 0, opacity: 1 });
      }
    });
  });

  if (!data) return null;

  return (
    <div className="card-container" style={{ perspective: '1000px', textAlign: 'center' }}>
      <div 
        ref={cardRef}
        className="policy-card-body" // CSS 스타일 적용을 위한 클래스
        style={{
          width: '300px',
          height: '450px',
          backgroundColor: '#fff',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          margin: '20px auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid #ddd',
          backgroundSize: 'cover', // Canva 배경 이미지용
          backgroundPosition: 'center'
        }}
      >
        {/* --- [Canva 배경 이미지 넣는 법] ---
            위 style 태그 안에 아래 한 줄을 추가하세요.
            backgroundImage: "url(/src/assets/card_bg.png)" 
        ---------------------------------- */}

        {/* 정책 내용 */}
        <div>
          <span style={{ background:'#eee', padding:'3px 8px', borderRadius:'10px', fontSize:'0.8rem', color:'#555' }}>
            {data.category}
          </span>
          <h1 style={{ margin: '15px 0', fontSize: '22px', wordBreak: 'keep-all' }}>{data.title}</h1>
          <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>{data.summary}</p>
        </div>

        {/* 버튼 영역 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button 
            onClick={() => handleAction('PASS')}
            style={{ padding: '15px 0', width:'45%', background: '#ff6b6b', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', fontSize:'1rem', fontWeight:'bold' }}
          >
            PASS X
          </button>
          <button 
            onClick={() => handleAction('SAVE')}
            style={{ padding: '15px 0', width:'45%', background: '#4ecdc4', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', fontSize:'1rem', fontWeight:'bold' }}
          >
            SAVE O
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;