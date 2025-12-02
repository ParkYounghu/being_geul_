import { useState, useEffect } from 'react';

export const useDailyPick = () => {
  // 1. 보여줄 카드 리스트 (DB 역할)
  const [policies, setPolicies] = useState([]); 

  // 2. 초기 데이터 세팅 (나중에 API로 대체될 부분)
  useEffect(() => {
    const dummyData = [
      { id: 1, title: '청년 월세 지원', category: '주거', summary: '월 최대 20만원 지원' },
      { id: 2, title: 'K-패스', category: '금융', summary: '대중교통비 20% 환급' },
      { id: 3, title: '내일배움카드', category: '취업', summary: '훈련비 최대 500만원' },
      { id: 4, title: '청년 도약 계좌', category: '금융', summary: '5천만원 목돈 마련' },
      { id: 5, title: '행복 주택', category: '주거', summary: '대학생/청년 공공임대' },
    ];
    setPolicies(dummyData);
  }, []);

  // 3. 스와이프 핸들러 (카드 제거 로직)
  const handleSwipe = (direction) => {
    if (policies.length === 0) return;
    
    // 현재 보고 있는 카드 (맨 위)
    const targetCard = policies[0];
    
    // console.log(`[API 전송] ID:${targetCard.id} -> ${direction}`); // 나중에 API 연결

    // 리스트에서 맨 앞 요소 제거 (Pop)
    setPolicies((prev) => prev.slice(1));
  };

  return { 
    currentCard: policies[0], // 현재 보여줄 카드
    handleSwipe,              // 스와이프 동작 함수
    isFinished: policies.length === 0 // 다 봤는지 여부
  };
};