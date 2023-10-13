import { getRandomText } from "../assets/data";

export default function LeftBox() {
  const comment = getRandomText();

  return (
    <div className="left randomBox">
      <img id="logo" src="../public/img/logo.svg" alt="logo" />
      <h2 className="title">云端软件开发协作平台</h2>
      <div className="content">
        <div className="row nameAndTag">
          <div className="name">{comment.name}</div>
          <div className="tag">{comment.tag}</div>
        </div>
        <div className="row text">{comment.text}</div>
      </div>
      <a className="footer" href="https://gitee.com/enterprises?from=login">
        <strong className="bold">码云企业版</strong>
        <span className="connector">-</span>
        企业级软件协作开发管理平台
        <span className="iconArrowRight">›</span>
      </a>
    </div>
  );
}
