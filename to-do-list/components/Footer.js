import {  Layout,theme } from 'antd';

const Footer = (props) => {
  return (
    <Layout.Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'transparent',
        }}
      >
        <p>{props.title}</p>
      </Layout.Footer>
  )
}

export default Footer