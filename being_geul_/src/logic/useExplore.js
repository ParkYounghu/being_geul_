import { useState } from 'react';

export const useExplore = (originalData) => {
  const [categoryFilter, setCategoryFilter] = useState('전체');

  // SQL WHERE 절과 동일한 로직
  const filteredData = originalData.filter((item) => {
    if (categoryFilter === '전체') return true; 
    return item.category === categoryFilter;   
  });

  return { filteredData, categoryFilter, setCategoryFilter };
};