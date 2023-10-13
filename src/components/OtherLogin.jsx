export default function OtherLogin() {
  return (
    <>
      <a className="row oschinaLogin" href="https://gitee.com/auth/oschina">
        <img
          src="../../public/img/oschina(1).png"
          className="logo"
          alt="开源中国"
        />
        <span className="text">使用OSChina 帐号登录</span>
      </a>
      <div className="row otherLoginType">
        <div className="text">其他方式登录</div>
      </div>
      <div className="row otherLoginList">
        <img src="../../public/img/wx.png" className="item logo" alt="微信" />
        <img src="../../public/img/QQ.png" className="item logo" alt="QQ" />
        <img
          src="../../public/img/github.png"
          className="item logo"
          alt="github"
        />
        <div className="item more">
          <img src="../../public/img/more.png" className="logo" alt="更多" />
          <div className="moreListBox">
            <div className="moreList">
              <img
                src="../../public/img/gitlab-hover.png"
                className="item logo"
                alt="gitlab"
              />
              <img
                src="../../public/img/钉钉.png"
                className="item logo"
                alt="钉钉"
              />
              <img
                src="../../public/img/阿里云.png"
                className="item logo"
                alt="阿里云"
              />
              <img
                src="../../public/img/微博.png"
                className="item logo"
                alt="微博"
              />
              <img
                src="../../public/img/windows_icon.png"
                className="item logo"
                alt="windowsLive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
