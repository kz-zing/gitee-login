import { Link, useNavigate } from "react-router-dom";
import OtherLogin from "./OtherLogin";
import { useState, useRef } from "react";

export default function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    userName: "",
    phoneOrEmail: "",
    personalAddr: "",
    vCode: "",
    password: "",
    isAgree: false,
  });
  const [isEmpty, setIsEmpty] = useState({
    userName: false,
    phoneOrEmail: false,
    vCode: false,
    password: false,
    isAgree: false,
  });
  const [isShow, setIsShow] = useState(false);
  const vCodeRef = useRef(null);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value, checked } = e.target;
    if (value) setIsEmpty((prev) => ({ ...prev, [name]: false }));
    console.log(name, value, checked);
    if (name === "isAgree") {
      setRegisterInfo((prev) => ({ ...prev, [name]: checked }));
    } else {
      setRegisterInfo((prev) => ({ ...prev, [name]: value }));
    }
  }
  function handleBlur(e) {
    const { name, value } = e.target;
    if (!value) {
      setIsEmpty((prev) => ({ ...prev, [name]: true }));
    } else if (name === "userName") {
      setRegisterInfo((prev) => ({ ...prev, personalAddr: value }));
    }
  }
  function clickSendCode() {
    if (registerInfo.phoneOrEmail === "") {
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
  function handleSubmit(e) {
    e.preventDefault();
    let flag = true;
    for (const key in registerInfo) {
      if (!registerInfo[key]) {
        flag = false;
        setIsEmpty((prev) => ({ ...prev, [key]: true }));
      }
    }
    if (flag) {
      navigate("/");
    }
  }
  return (
    <div className="right loginBox">
      <div className="signupBranch">
        <div className="row spaceBetween header">
          <div className="title">注册</div>
          <div className="subTitle">
            已有帐号？
            <Link to="/" className="changeRouter">
              点此登录
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="ignupRow">
            <div className="nameBox">
              <input
                id="signupName"
                className={isEmpty.userName ? "inputError" : ""}
                type="text"
                name="userName"
                value={registerInfo.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="姓 名"
                maxLength="6"
                autoComplete="off"
              />
              {isEmpty.userName ? (
                <div className="errorInfo">姓名为必填项</div>
              ) : null}
            </div>
          </div>
          <div className="ignupRow">
            <div className="userDomainBox">
              <div className="leftLabel">https://gitee.com/</div>
              <input
                id="signupDomain"
                type="text"
                value={registerInfo.personalAddr}
                readOnly
                placeholder="个人空间地址"
                autoComplete="off"
              />
              <div className="questionIcon">
                <div className="questionIconTootip">
                  <div className="item">
                    这是您注册帐号主页的地址，可用作推拉代码或登录码云的用户名
                  </div>
                  <div className="item">
                    个人空间地址 是用户在码云上的唯一标识，在开通码云帐号时填写
                  </div>
                  <div className="item">
                    您可以将个人空间地址分享给朋友，让他们通过您的个人空间地址访问您的码云主页
                  </div>
                  <div className="item">
                    每个帐号只能对应一个个人空间地址，建议您在注册时为您的帐号精心起一个好名字
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ignupRow">
            <div className="phoneEmailBox">
              <input
                id="phoneEmail"
                type="text"
                name="phoneOrEmail"
                className={isEmpty.phoneOrEmail ? "inputError" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="手机 或  邮 箱"
                autoComplete="off"
              />
              {isEmpty.phoneOrEmail ? (
                <div className="errorInfo">手机或邮箱为必填项</div>
              ) : null}
            </div>
          </div>
          <div className="ignupRow">
            <div className="vCodeBox">
              <div className="vCodeBoxBody">
                <input
                  id="signupVCode"
                  type="text"
                  className={isEmpty.vCode ? "inputError" : ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="vCode"
                  placeholder="手机验证码"
                  maxLength="6"
                  autoComplete="off"
                />
                <div
                  id="signupSendVcode"
                  onClick={clickSendCode}
                  ref={vCodeRef}
                  className="sendVcode"
                >
                  发送验证码
                </div>
                <div className="help">
                  收不到验证码?
                  <a href="https://gitee.com/self_services">获取帮助</a>
                </div>
              </div>
              {isEmpty.vCode ? (
                <div className="errorInfo">验证码为必填项</div>
              ) : null}
            </div>
          </div>
          <div className="ignupRow">
            <div className="passwordBox">
              <input
                id="signupPassword"
                type={isShow ? "text" : "password"}
                name="password"
                className={isEmpty.password ? "inputError" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="密码不少于6位"
                autoComplete="off"
              />
              {isEmpty.password ? (
                <div className="errorInfo">密码为必填项</div>
              ) : null}
            </div>
            <div
              className={isShow ? "closeEyeIcon" : "eyeIcon"}
              onClick={() => setIsShow((prev) => !prev)}
            ></div>
          </div>
          <div className="ignupRow">
            <div className="left">
              <input
                type="checkbox"
                name="isAgree"
                checked={registerInfo.isAgree}
                onChange={handleChange}
                id="agree"
              />
              <label className="agreeLabel" htmlFor="agree">
                <div className="checkboxUi"></div>
                我已阅读并同意
                <a href="https://gitee.com/terms">使用条款</a>及
                <a href="https://gitee.com/inactive_accounts">
                  非活跃帐号处理规范
                </a>
              </label>
              {registerInfo.isAgree ? null : (
                <div className="errorInfo">请阅读并同意我们的服务条款</div>
              )}
            </div>
          </div>
          <div className="errorInfo"></div>
          <div className="row">
            <button id="submitSignup" type="submit" className="submit">
              立即注册
            </button>
          </div>
        </form>
      </div>
      <a className="row forgetPassword" href="https://gitee.com/password/new">
        已有账号，忘记密码?
      </a>
      <OtherLogin />
    </div>
  );
}
