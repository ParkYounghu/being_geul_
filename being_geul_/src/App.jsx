// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />       {/* 메인 페이지 */}
      <Route path="/mypage" element={<MyPage />} /> {/* 마이 페이지 */}
    </Routes>
  );
}

export default App;