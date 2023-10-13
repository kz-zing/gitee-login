import { useRef, useState } from "react";
import OtherLogin from "./OtherLogin";
import { checkUser } from "../assets/data";
import { Link } from "react-router-dom";

export default function RightBox() {
  const [isMessage, setIsMessage] = useState(false);
  const [user, setUser] = useState({ userName: "", password: "" });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isTrue, setIsTrue] = useState(true);
  const [isEmpty, setIsEmpty] = useState({
    userName: true,
    password: true,
    phoneNumber: true,
    vCode: true,
  });
  const [code, setCode] = useState(false);
  const vCodeRef = useRef(null);
  const errorPhone = useRef(null);

  function changeUserInfo(e) {
    const { name, value } = e.target;
    if (value) setIsEmpty((prev) => ({ ...prev, [name]: true }));
    setUser((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (checkUser(user)) {
      console.log("true");
      setIsTrue(true);
      window.location.href = "https://www.gitee.com";
    } else {
      setIsTrue(false);
    }
  }
  function handleBlur(e) {
    const { name, value } = e.target;
    if (!value) {
      setIsEmpty((prev) => ({ ...prev, [name]: false }));
    }
  }
  function handlePhoneNumber(e) {
    if (!isEmpty.phoneNumber) {
      if (e.target.value) {
        errorPhone.current.innerText = "手机号码格式错误";
      } else {
        errorPhone.current.innerText = "手机号码为必填项";
      }
    }

    setPhoneNumber(e.target.value);

    if (!checkPhone(e.target.value)) {
      setIsEmpty((prev) => ({ ...prev, [e.target.name]: false }));
    } else {
      setIsEmpty((prev) => ({ ...prev, [e.target.name]: true }));
    }
  }
  function checkPhone(value) {
    if (!value) {
      console.error("params error:" + value);
      return false;
    }
    if (!/^1[3456789]\d{9}$/.test(value)) {
      return false;
    }
    return true;
  }
  function clickSendCode() {
    if (phoneNumber === "") {
      setIsEmpty((prev) => ({ ...prev, phoneNumber: false }));
      return;
    }

    if (
      vCodeRef.current.innerText !== "发送验证码" &&
      vCodeRef.current.innerText !== "重发验证码"
    ) {
      return;
    }
    let time = 60;
    const timer = setInterval(() => {
      if (time > 0) {
        vCodeRef.current.innerText = `${time}秒后可重新发送`;
        time--;
      } else {
        clearInterval(timer);
        vCodeRef.current.innerText = "重发验证码";
      }
    }, 1000);
  }
  return (
    <div className="right loginBox">
      <div className="row spaceBetween header">
        <div className="title">登录</div>
        <div className="subTitle">
          没有帐号？
          <Link to="/register" className="changeRouter">
            点此注册
          </Link>
          {/* <a className="changeRouter">点此注册</a> */}
        </div>
      </div>
      {isMessage ? (
        <div className="shortmessageLogin">
          <div className="row ">
            <div className="">
              <input
                id="shortmessagePhone"
                type="text"
                name="phoneNumber"
                className={isEmpty.phoneNumber ? "" : "inputError"}
                placeholder="手机号码"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                onBlur={handleBlur}
                maxLength="11"
                autoComplete="off"
              />
              {isEmpty.phoneNumber ? null : (
                <div ref={errorPhone} className="errorInfo">
                  手机号码为必填项
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="vCodeBox">
              <div className="vCodeBoxBody">
                <input
                  id="vCode"
                  type="text"
                  name="vCode"
                  disabled={code}
                  placeholder="手机验证码"
                  maxLength="6"
                  autoComplete="off"
                />
                <div
                  id="sendVcode"
                  onClick={clickSendCode}
                  className="sendVcode"
                  ref={vCodeRef}
                >
                  发送验证码
                </div>
                <div className="help">
                  收不到验证码?
                  <a href="https://gitee.com/self_services">获取帮助</a>
                </div>
              </div>
              <div className="errorInfo"></div>
            </div>
          </div>
          <div className="row spaceBetween rememberAndShortmessage">
            <div className="left">
              <input type="checkbox" id="remember" value="记住我" />
              <label className="rememberLabel" htmlFor="remember">
                <div className="checkboxUi"></div>
                记住我
              </label>
            </div>
            <a
              onClick={() => setIsMessage(false)}
              className="right shortmessageSignup changeShortmessageLogin"
            >
              用户名密码登录
            </a>
          </div>
          <div className="row">
            <button id="submitLogin" type="submit" className="submit">
              登 录
            </button>
          </div>
        </div>
      ) : (
        <div className="normalLogin">
          <form onSubmit={handleSubmit}>
            {isTrue ? null : (
              <div className="errorTip">
                <div>账号或密码错误</div>
              </div>
            )}

            <div className="row ">
              <div className="userNameBox">
                <input
                  id="userName"
                  className={isEmpty.userName ? "" : "inputError"}
                  type="text"
                  name="userName"
                  value={user.userName}
                  onChange={changeUserInfo}
                  onBlur={handleBlur}
                  placeholder="手机／邮箱／个人空间地址"
                  autoComplete="off"
                />
                {isEmpty.userName ? null : (
                  <div className="errorInfo userName">用户名为必填项</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="passwordBox	">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className={isEmpty.password ? "" : "inputError"}
                  value={user.password}
                  onChange={changeUserInfo}
                  onBlur={handleBlur}
                  placeholder="请输入密码"
                  maxLength="32"
                  autoComplete="off"
                />
              </div>
              {isEmpty.password ? null : (
                <div className="errorInfo">密码为必填项</div>
              )}
            </div>

            <div className="row spaceBetween rememberAndShortmessage">
              <div className="left">
                <input type="checkbox" id="remember" value="记住我" />
                <label className="rememberLabel" htmlFor="remember">
                  <div className="checkboxUi"></div>
                  记住我
                </label>
              </div>
              <a
                onClick={() => setIsMessage(true)}
                className="right shortmessageSignup changeShortmessageLogin"
              >
                短信验证登录
              </a>
            </div>
            <div className="row">
              <button id="submitLogin" type="submit" className="submit">
                登 录
              </button>
            </div>
          </form>
        </div>
      )}
      <a className="row forgetPassword" href="https://gitee.com/password/new">
        已有账号，忘记密码?
      </a>
      <OtherLogin />
    </div>
  );
}
