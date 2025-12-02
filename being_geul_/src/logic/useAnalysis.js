export const calculateChartData = (savedList) => {
  // 카운트 초기화 (GROUP BY 준비)
  const stats = { '금융': 0, '주거': 0, '취업': 0, '창업': 0, '복지': 0, '기타': 0 };

  // 루프 돌면서 집계
  savedList.forEach((item) => {
    // 해당 카테고리가 stats에 있으면 +1
    if (stats[item.category] !== undefined) {
      stats[item.category] += 1;
    }
  });

  // 차트 라이브러리용 포맷으로 변환
  return Object.keys(stats).map((key) => ({
    subject: key,  
    A: stats[key], 
    fullMark: 10   
  }));
};