import React from 'react';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <>
      <AntHeader className="company-header">
        <div className="company-name">
          <div className="chinese">中海壳牌石油化工有限公司</div>
          <div className="english">CNOOC and Shell Petrochemicals Company Limited</div>
        </div>
      </AntHeader>
      <div className="blue-nav-bar"></div>
    </>
  );
};

export default Header;