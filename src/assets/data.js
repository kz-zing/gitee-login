const proData = {
  user: { userName: "admin", password: "123456" },
  randomInfo: [
    {
      name: "韩卿",
      tag: "Apache Kylin",
      text: "Gitee 为中国开发者提供了更好的本地化能力和服务，在促进中国开源发展上贡献巨大，非常期待 Gitee 更上层楼。",
    },
    {
      name: "阮一峰",
      tag: "知名技术博主",
      text: "码云是国内代码托管服务的领先者，很认真的产品。适合国内程序员习惯，访问速度极快。",
    },
    {
      name: "阴明",
      tag: "掘金创始人",
      text: "许多年轻的开发者使用码云共享和协作，码云也是难得的为中国开发者的软件服务。期待未来码云继续发展，成为中国开发行业发展之基石！",
    },
    {
      name: "李铭健",
      tag: "骑鹅旅行 Head of PMO",
      text: "Gitee 企业版不只是一个代码托管的工具，更是带着深深 Geek 文化的项目管理平台。在 Gitee 企业版上，iGola.com 的团队协作变得更加容易，整个流程管理变得更加透明流畅。",
    },
    {
      name: "熊平",
      tag: "51CTO创始人",
      text: "与其说喜欢 Gitee，其实更喜欢 Gitee 的团队。红薯是我见过的最幽默而执着的程序员，认真做产品，有耐心不功利，所以我相信 Gitee 一定会做的很好。",
    },
    {
      name: "霍泰稳",
      tag: "极客邦科技创始人",
      text: "类似 GitHub 这样的代码托管服务，是软件研发过程中不可缺少的一环，在国内目前还没有特别好的服务，Gitee 很好地填补了这个空白。一起努力，越来越好，为中国技术人群提供更多更贴心的服务。",
    },
  ],
};
export function getRandomText() {
  let index = Math.floor(Math.random() * proData.randomInfo.length);
  return proData.randomInfo[index];
}
export function checkUser(user) {
  if (
    user.userName === proData.user.userName &&
    user.password === proData.user.password
  )
    return true;
  else return false;
}
