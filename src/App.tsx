import React from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="app-container">
      <Header />
      <Content className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Content>
      <footer className="footer">
        <div className="footer-bar">
          <div className="footer-content">
            Copyright © 2025 中海壳牌石油化工有限公司 All Rights Reserved. 粤ICP备12050001号-1 粤公网安备44139902100219号
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default App;