import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RightBox from "./components/RightBox";
import Layout from "./ui/layout";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RightBox />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <div className="loginPageBox">
    //   <main className="main">
    //     <div className="bodyBox">
    //       <LeftBox />
    //       <RightBox />
    //     </div>
    //     <footer className="footer">
    //       <a href="https://gitee.com/">© Gitee.com</a>
    //       <a href="https://gitee.com/about_us">关于我们</a>
    //       <a href="https://gitee.com/terms">使用条款</a>
    //       <a href="https://gitee.com/help">帮助文档</a>
    //       <a href="https://gitee.com/self_services">在线自助服务</a>
    //       <a href="https://gitee.com/user/activate">重发激活邮件</a>
    //     </footer>
    //   </main>
    // </div>
  );
}

export default App;
