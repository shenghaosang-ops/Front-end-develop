import  React from 'react';
import { Card, Row, Col } from 'antd';

const HomePage: React.FC = () => {
  const services = [
    {
      title: '客户信息查询系统',
      description: '精准查询 | 客户信息一秒即达',
      icon: '',
      subIcon: '📋',
      link: 'https://portalqas.cnoocshell.com/home'
    },
    {
      title: '化竞通线上报价平台',
      description: '线上报价 | 化竞通让交易更灵活',
      icon: '',
      subIcon: '💰',
      link: 'https://ecommerceqa.cnoocshell.com/'
    },
    {
      title: 'LMS物流管理系统',
      description: '智慧物流 | LMS全程可视可控',
      icon: '',
      subIcon: '🚛',
      link: 'https://tslms.cnoocshell.com:9081/lms/'
    }
  ];

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
      </div>

      <div style={{ padding: '60px 0' }}>
        <Row gutter={32}>
          {services.map((service, index) => (
            <Col span={8} key={index}>
              <Card 
                className="service-card" 
                title={service.title}
                onClick={() => window.open(service.link, '_blank')}
              >
                <div className="service-description">{service.description}</div>
                <div className="service-icons">
                  <span className="main-icon">{service.icon}</span>
                  <span className="sub-icon">{service.subIcon}</span>
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