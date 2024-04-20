import {  Layout,theme } from 'antd';

const Header = (props) => {
  return (
    <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          color:'white',
          backgroundColor: '#f5cb42',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="demo-logo" />
        <h1>{props.title}</h1>
      </Layout.Header>
  )
}

export default Header