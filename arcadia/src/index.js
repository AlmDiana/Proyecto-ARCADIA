import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Layout } from 'antd';

import { Row, Col, Divider } from 'antd';
import {
  GoogleCircleFilled,
  FacebookFilled,
  InstagramFilled,
  WhatsAppOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <Layout>
      <Content>
        <React.StrictMode>
          <App />
        </React.StrictMode>,</Content>
      <Footer className= "footer">
        <Divider orientation="left">Encuéntranos en</Divider>
        <Row justify="space-around">
          <Col span={4}><GoogleCircleFilled /> <FacebookFilled /> <InstagramFilled /> <WhatsAppOutlined /></Col>
        </Row>
        © Creado por Equipo Arcadia
        </Footer>
    </Layout>,
  
  document.getElementById('root')
);
