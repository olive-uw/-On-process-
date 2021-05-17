import React, {  useState,Component } from 'react';


import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import logoprofile from '../asset/gg.jpg';
import {
    FileOutlined, 
    UserOutlined, 
    HomeOutlined, 
    CodepenOutlined, 
    TwitterOutlined, 
    LinkedinOutlined, 
    GithubOutlined ,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, body } = Layout;
const MainLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => {
        setCollapsed(!collapsed)
    };
    const name="OLIVE"
    return (
        
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{height:"100vh"},{width:"40vh"}}>
                <img className="logo" src={logoprofile}/>
                <h1 className="name">Olive Uwambaye</h1>
                <div><Menu theme="dark" mode="holizontal" defaultSelectedKeys={['0']} >
                <GithubOutlined className="social-icon"/>
                <LinkedinOutlined className="social-icon"/>
                <TwitterOutlined className="social-icon"/>
                <CodepenOutlined className="social-icon" />
                    </Menu></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="0" icon={<HomeOutlined />}>
                    Home
            </Menu.Item>
                    <Menu.Item key="0" icon={<UserOutlined />}>
                        About
            </Menu.Item>
                    <Menu.Item key="0" icon={<FileOutlined />}>
                        Resume
            </Menu.Item>
            <Menu.Item key="0" icon={<FileOutlined />}>
                        Portfolio
            </Menu.Item>
            <Menu.Item key="0" icon={<FileOutlined />}>
                    Service
            </Menu.Item>
                </Menu>
                <div className='footer'>© Copyright iPortfolio
Designed by <div className="text"> SheCanCode</div>
</div>


            </Sider>
            <Layout className="site-layout">
               {/* <Header className="site-layout-background" style={{ padding: 0 }}>
                  {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header> */}
                <content
                    className="site-layout-background"
                    style={{
                        margin: '0px 0px',
                        padding: 0,
                        minHeight: "100vh",
                    }}
                >
        {children}
          </content>
            </Layout>
        </Layout>
    );
}
export default MainLayout;