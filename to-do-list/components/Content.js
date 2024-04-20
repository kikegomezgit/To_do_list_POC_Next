"use client"
import {  Layout,theme } from 'antd';

const Content = (props) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Layout.Content
        style={{
          padding: '0 20px',
          marginTop:'10px',
        }}
      >
        <div
          style={{
            background: 'transparent',
            minHeight: 400,
            padding: 22,
          }}
        >
          <div>{props.content}</div>
        </div>
      </Layout.Content>
  )
}

export default Content