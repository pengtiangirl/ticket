import React from 'react'
import DocumentTitle from 'react-document-title'

export default function About() {
  return <div>
    <DocumentTitle title='关于 - LeanTicket' />
    <h1 className='font-logo'>LeanCloud Ticket</h1>
    <hr />
    <p>&nbsp; &nbsp; LeanTicket系统是一款基于云架构和微服务开发的WEB工单管理系统，前端页面使用Javascipt、css实现，通过Ajax和Json实现数据同步，同时使用云函数和 hook 函数简化客户端逻辑，使用LeanTicket能够高效的服务客户，实现企业IT运营和信息化。</p>
    <p>&nbsp; &nbsp; 在这里您可以以工单的形式提交您的咨询、问题、建议等，系统会自动把工单分配给专业的客服人员，我们收到后会尽快处理您的问题，欢迎您来使用。 </p>
    <p>&nbsp; &nbsp; 温馨提示：尊敬的客户，若遇到不会的问题可以先看下用户使用手册或者百度解决，勿做伸手党哦!</p>
  </div>
}

About.displayName = 'About'
