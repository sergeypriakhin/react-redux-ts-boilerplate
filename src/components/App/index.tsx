import './App.css';

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
// pages
import Dashboard from '@pages/Dashboard';
import NotFoundPage from '@pages/NotFoundPage';

import * as style from './App.css';

const { Header, Sider, Content } = Layout;

export default class App extends React.PureComponent {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={`logo ${style.logo}`} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
            <Menu.Item key="dashboard">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={`trigger ${style.trigger}`}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
