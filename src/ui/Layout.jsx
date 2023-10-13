import { Outlet } from "react-router-dom";
import LeftBox from "../components/LeftBox";

export default function Layout() {
  return (
    <div className="loginPageBox">
      <main className="main">
        <div className="bodyBox">
          <LeftBox />
          <Outlet />
          {/* <RightBox /> */}
        </div>
        <footer className="footer">
          <a href="https://gitee.com/">© Gitee.com</a>
          <a href="https://gitee.com/about_us">关于我们</a>
          <a href="https://gitee.com/terms">使用条款</a>
          <a href="https://gitee.com/help">帮助文档</a>
          <a href="https://gitee.com/self_services">在线自助服务</a>
          <a href="https://gitee.com/user/activate">重发激活邮件</a>
        </footer>
      </main>
    </div>
  );
}
