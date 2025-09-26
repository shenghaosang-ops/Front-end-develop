import React from 'react';
import { Input, Card, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const HomePage: React.FC = () => {
  const services = [
    {
      title: '客户信息查询系统',
      description: '精准查询 | 客户信息一秒即达',
      icon: '📊',
      link: 'https://portalqas.cnoocshell.com/home'
    },
    {
      title: '化免通线上报价平台',
      description: '线上报价 | 化免通让交易更灵活',
      icon: '💰',
      link: 'https://portalqas.cnoocshell.com/home'
    },
    {
      title: 'LMS物流管理系统',
      description: '智慧物流 | LMS全程可视可控',
      icon: '🚛',
      link: 'https://portalqas.cnoocshell.com/home'
    }
  ];

  const handleSearch = (value: string) => {
    console.log('搜索:', value);
  };

  return (
    <div>
      <div 
        className="search-section"
        style={{
          backgroundImage: 'url("/images/R-C.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1>砥砺前行，携手共创辉煌！</h1>
        <h2>中海壳牌，您的首选合作伙伴</h2>
        <Search
          className="search-input"
          placeholder="请输入产品或服务关键词"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={handleSearch}
        />
      </div>

      <div style={{ padding: '40px 0' }}>
        <Row gutter={24}>
          {services.map((service, index) => (
            <Col span={8} key={index}>
              <Card 
                className="service-card" 
                title={service.title}
                onClick={() => window.open(service.link, '_blank')}
              >
                <p>{service.description}</p>
                <div style={{ fontSize: '2em', textAlign: 'center' }}>
                  {service.icon}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;