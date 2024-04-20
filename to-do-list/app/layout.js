"use client";
import AntdStyledComponentsRegistry from "../components/AntdStyledComponentsRegistry";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { Layout } from "antd"
import { Provider } from "react-redux";
import store from "../store/index";
import {Inter,Roboto} from 'next/font/google'
const inter = Inter({ subsets: ['latin'],weight:'400' })
const roboto = Roboto({ subsets: ['latin'], weight:'400' })
import { Layout, theme } from "antd";

export default function RootLayout({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0, boxSizing: "borderbox" }}>
        <AntdStyledComponentsRegistry>
          <Provider store={store}>
            {/* <Layout style={{ minHeight: "100vh" }}> */}
            <Layout
              style={{
                minHeight: "100vh",
                backgroundImage:
                  'url("https://www.transparenttextures.com/patterns/cubes.png")',
              }}
            >
              <Header title="ToDoList" className={roboto.className} />
              {children}
              <Footer title="Ant Design ©2023 Created by Ant UED" />
            </Layout>
            {/* </Layout> */}
          </Provider>
        </AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
