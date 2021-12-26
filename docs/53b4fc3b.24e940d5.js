(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),i=(a(0),a(339)),c={id:"nodeStreams",title:"Streams(\u6d41)",hide_title:!0,sidebar_label:"Streams(\u6d41)"},b={unversionedId:"node/nodeStreams",id:"node/nodeStreams",isDocsHomePage:!1,title:"Streams(\u6d41)",description:"1. \u6570\u636e\u6d88\u8017\u6a21\u5f0f",source:"@site/docs/node/\u6d41Streams.md",slug:"/node/nodeStreams",permalink:"/docs/node/nodeStreams",version:"current",sidebar_label:"Streams(\u6d41)",sidebar:"nodedoc",previous:{title:"process(\u8fdb\u7a0b)",permalink:"/docs/node/nodeKnowledge"},next:{title:"node\u5982\u4f55\u5904\u7406ES6",permalink:"/docs/node/basic/nodeES6"}},o=[{value:"1. \u6570\u636e\u6d88\u8017\u6a21\u5f0f",id:"1-\u6570\u636e\u6d88\u8017\u6a21\u5f0f",children:[{value:"1.1 \u521d\u59cb\u6a21\u5f0f",id:"11-\u521d\u59cb\u6a21\u5f0f",children:[]},{value:"1.2 \u6d41\u52a8\u6a21\u5f0f",id:"12-\u6d41\u52a8\u6a21\u5f0f",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[{value:"1. Node.js Stream - \u8fdb\u9636\u7bc7",id:"1-nodejs-stream---\u8fdb\u9636\u7bc7",children:[]},{value:"2. \u300aNode.js\u8bbe\u8ba1\u6a21\u5f0f\u300b\u4f7f\u7528\u6d41\u8fdb\u884c\u7f16\u7801",id:"2-\u300anodejs\u8bbe\u8ba1\u6a21\u5f0f\u300b\u4f7f\u7528\u6d41\u8fdb\u884c\u7f16\u7801",children:[]},{value:"3. \u4f60\u4e0d\u77e5\u9053\u7684Node.js\u6027\u80fd\u4f18\u5316\uff0c\u8bfb\u4e86\u4e4b\u540e\u6c34\u5e73\u76f4\u7ebf\u4e0a\u5347",id:"3-\u4f60\u4e0d\u77e5\u9053\u7684nodejs\u6027\u80fd\u4f18\u5316\uff0c\u8bfb\u4e86\u4e4b\u540e\u6c34\u5e73\u76f4\u7ebf\u4e0a\u5347",children:[]}]}],l={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-\u6570\u636e\u6d88\u8017\u6a21\u5f0f"},"1. \u6570\u636e\u6d88\u8017\u6a21\u5f0f"),Object(i.b)("p",null,"\u53ef\u4ee5\u5728\u4e24\u79cd\u6a21\u5f0f\u4e0b\u6d88\u8017\u53ef\u8bfb\u6d41\u4e2d\u7684\u6570\u636e\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"\u6682\u505c\u6a21\u5f0f\uff08paused mode\uff09"),"\u548c\u6d41\u52a8\u6a21\u5f0f",Object(i.b)("inlineCode",{parentName:"p"},"\uff08flowing mode\uff09")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5224\u65ad\u6d41\u7684\u72b6\u6001")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u8bfb\u6d41\u5bf9\u8c61",Object(i.b)("inlineCode",{parentName:"li"},"readable"),"\u4e2d\u6709\u4e00\u4e2a\u7ef4\u62a4\u72b6\u6001\u7684\u5bf9\u8c61\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"readable._readableState"),", \u8fd9\u91cc\u7b80\u79f0\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"state"),"\u3002 \u5176\u4e2d\u6709\u4e00\u4e2a\u6807\u8bb0\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"state.flowing"),", \u53ef\u7528\u6765\u5224\u65ad\u6d41\u7684\u6a21\u5f0f\u3002"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u5171\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"true"),": \u6d41\u52a8\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"false"),": \u6682\u505c\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"null"),": \u521d\u59cb\u72b6\u6001")))),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const rs = fs.createReadStream('package.json')\nrs._readableState.flowing // null => \u521d\u59cb\u72b6\u6001\n")))),Object(i.b)("h3",{id:"11-\u521d\u59cb\u6a21\u5f0f"},"1.1 \u521d\u59cb\u6a21\u5f0f"),Object(i.b)("p",null,"\u4ece\u521d\u59cb\u6a21\u5f0f\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u662f\u4e3a\u5176\u9644\u52a0\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"\u53ef\u8bfb\u4e8b\u4ef6\u76d1\u542c\u5668(readable)"),"\uff0c\u7136\u540e\uff0c\u5728\u4e00\u4e2a\u5faa\u73af\u4e2d\uff0c\u6211\u4eec\u8bfb\u53d6\u6240\u6709\u7684\u6570\u636e\uff0c\u76f4\u5230\u5185\u90e8",Object(i.b)("inlineCode",{parentName:"p"},"buffer"),"\u88ab\u6e05\u7a7a\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"process.stdin\n  .on('readable', () => {\n    let chunk;\n    while ((chunk = process.stdin.read()) !== null) {\n      console.log(\n        `Chunk read: (${chunk.length}) \"${chunk.toString()}\"`\n      );\n    }\n  })\n  .on('end', () => process.stdout.write('End of stream'));\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\ud83d\udc46 \u91ca\u4e49")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6570\u636e\u662f\u4ece\u53ef\u8bfb\u7684\u4fa6\u542c\u5668\u4e2d\u8bfb\u53d6\u7684\uff0c\u53ea\u8981\u6709\u65b0\u7684\u6570\u636e\uff0c\u5c31\u4f1a\u8c03\u7528\u8fd9\u4e2a\u4fa6\u542c\u5668\u3002\u5f53\u5185\u90e8\u7f13\u51b2\u533a\u4e2d\u6ca1\u6709\u66f4\u591a\u6570\u636e\u53ef\u7528\u65f6\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"read()"),"\u65b9\u6cd5\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"p"},"null"),"\uff1b\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u5f97\u4e0d\u7b49\u5f85\u53e6\u4e00\u4e2a\u53ef\u8bfb\u7684\u4e8b\u4ef6\u88ab\u89e6\u53d1\uff0c\u544a\u8bc9\u6211\u4eec\u53ef\u4ee5\u518d\u6b21\u8bfb\u53d6\u6216\u8005\u7b49\u5f85\u8868\u793a",Object(i.b)("inlineCode",{parentName:"p"},"Streams"),"\u8bfb\u53d6\u8fc7\u7a0b\u7ed3\u675f\u7684",Object(i.b)("inlineCode",{parentName:"p"},"end"),"\u4e8b\u4ef6\u89e6\u53d1\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u63a7\u5236\u53f0\u4e2d\u952e\u5165\u4e00\u4e9b\u5b57\u7b26\uff0c\u7136\u540e\u6309",Object(i.b)("inlineCode",{parentName:"p"},"Enter"),"\u952e\u67e5\u770b\u56de\u663e\u5230\u6807\u51c6\u8f93\u51fa\u4e2d\u7684\u6570\u636e\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"readable"),"\u662f\u4e00\u4e2a\u53ef\u8bfb\u4e8b\u4ef6\u76d1\u542c\u5668"))),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const rs = fs.createReadStream('package-lock.json')\n\nrs.on('readable', () => {\n  console.log(rs.read().toString())\n})\n")))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5e72\u8d27")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"read()"),"\u65b9\u6cd5\u662f\u4e00\u4e2a\u540c\u6b65\u64cd\u4f5c\uff0c\u5b83\u4ece\u53ef\u8bfb",Object(i.b)("inlineCode",{parentName:"p"},"Streams"),"\u7684\u5185\u90e8",Object(i.b)("inlineCode",{parentName:"p"},"Buffers"),"\u533a\u4e2d\u63d0\u53d6\u6570\u636e\u5757\u3002\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u6570\u636e\u968f\u65f6\u53ef\u4ee5\u76f4\u63a5\u4ece",Object(i.b)("inlineCode",{parentName:"p"},"Streams"),"\u4e2d\u6309\u9700\u63d0\u53d6\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728\u4ee5\u4e8c\u8fdb\u5236\u6a21\u5f0f\u5de5\u4f5c\u7684\u53ef\u8bfb\u7684",Object(i.b)("inlineCode",{parentName:"p"},"Stream"),"\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728",Object(i.b)("inlineCode",{parentName:"p"},"Stream"),"\u4e0a\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"p"},"setEncoding(encoding)"),"\u6765\u8bfb\u53d6\u5b57\u7b26\u4e32\u800c\u4e0d\u662f",Object(i.b)("inlineCode",{parentName:"p"},"Buffer"),"\u5bf9\u8c61\uff0c\u5e76\u63d0\u4f9b\u6709\u6548\u7684\u7f16\u7801\u683c\u5f0f\uff08\u4f8b\u5982",Object(i.b)("inlineCode",{parentName:"p"},"utf8"),"\uff09\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const rs = fs.createReadStream('package-lock.json')\nrs.setEncoding('utf8')\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"Buffer.toString()"),"\u4e5f\u53ef\u4ee5\u8f6c\u6362\u6210\u5b57\u7b26\u4e32"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const rs = fs.createReadStream('package-lock.json')\nrs.setEncoding('utf8')\nrs.on('readable', () => {\n  console.log(rs.read().toString())\n})\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728",Object(i.b)("inlineCode",{parentName:"p"},"shell"),"\u4e2d\u4f7f\u7528\u7ba1\u9053\u8fd0\u7b97\u7b26",Object(i.b)("inlineCode",{parentName:"p"},"|"),"\uff0c\u5b83\u5c06\u7a0b\u5e8f\u7684\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u53e6\u4e00\u4e2a\u7a0b\u5e8f\u7684\u6807\u51c6\u8f93\u5165\u3002\u7528\u6765\u8fde\u63a5\u591a\u4e2a\u7a0b\u5e8f\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cat package-lock.json | node readStdin\n")))))),Object(i.b)("h3",{id:"12-\u6d41\u52a8\u6a21\u5f0f"},"1.2 \u6d41\u52a8\u6a21\u5f0f"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5982\u4f55\u8fdb\u5165\u6d41\u52a8\u6a21\u5f0f")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4e00\u822c\u521b\u5efa\u6d41\u540e\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u4f7f\u6d41\u8fdb\u5165",Object(i.b)("inlineCode",{parentName:"p"},"\u6d41\u52a8\u6a21\u5f0f"),"\uff1a"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u76d1\u542c",Object(i.b)("inlineCode",{parentName:"li"},"data"),"\u4e8b\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7",Object(i.b)("inlineCode",{parentName:"li"},"pipe"),"\u65b9\u6cd5\u5c06\u6570\u636e\u5bfc\u5411\u53e6\u4e00\u4e2a\u53ef\u5199\u6d41")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"data"),"\u4e8b\u4ef6"),Object(i.b)("p",{parentName:"li"},"\u5148\u770b\u4e00\u4e0b",Object(i.b)("inlineCode",{parentName:"p"},"Readable"),"\u662f\u5982\u4f55\u5904\u7406",Object(i.b)("inlineCode",{parentName:"p"},"data"),"\u4e8b\u4ef6\u7684\u76d1\u542c\u7684\uff1a"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Readable.prototype.on = function (ev, fn) {\n  var res = Stream.prototype.on.call(this, ev, fn)\n  if (ev === 'data' && false !== this._readableState.flowing) {\n    this.resume()\n  }\n}\n")),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\ud83d\udc46 \u91ca\u4e49")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728\u5c06",Object(i.b)("inlineCode",{parentName:"p"},"fn"),"\u52a0\u5165\u4e8b\u4ef6\u961f\u5217\u540e\uff0c\u5982\u679c\u662f",Object(i.b)("inlineCode",{parentName:"p"},"data"),"\u4e8b\u4ef6\u800c\u4e14\u6d41\u5904\u4e8e\u975e\u6682\u505c\u6a21\u5f0f\uff0c\u5219\u4f1a\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"p"},"this.resume()"),"\uff0c\u5f00\u59cb\u6d41\u52a8\u6a21\u5f0f\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"resume()"),"\u65b9\u6cd5\u5148\u5c06",Object(i.b)("inlineCode",{parentName:"p"},"state.flowing"),"\u8bbe\u4e3atrue\uff0c \u7136\u540e\u4f1a\u5728\u4e0b\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"tick"),"\u4e2d\u6267\u884c",Object(i.b)("inlineCode",{parentName:"p"},"flow"),"\uff0c\u8bd5\u56fe\u5c06\u7f13\u5b58\u8bfb\u7a7a\uff1a"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"if (state.flowing) do {\n  var chunk = stream.read()\n} while (null !== chunk && state.flowing)\n")))))),Object(i.b)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u6211\u4eec\u4e4b\u524d\u521b\u5efa\u7684",Object(i.b)("inlineCode",{parentName:"p"},"readStdin"),"\u5e94\u7528\u7a0b\u5e8f\u5c06\u4f7f\u7528\u6d41\u52a8\u6a21\u5f0f\uff1a"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"process.stdin\n  .on('data', chunk => {\n    console.log('New data available');\n    console.log(\n      `Chunk read: (${chunk.length}) \"${chunk.toString()}\"`\n    );\n  })\n  .on('end', () => process.stdout.write('End of stream'));\n")))),Object(i.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(i.b)("h3",{id:"1-nodejs-stream---\u8fdb\u9636\u7bc7"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"https://tech.meituan.com/2016/07/15/stream-internals.html"}),"1. Node.js Stream - \u8fdb\u9636\u7bc7")),Object(i.b)("h3",{id:"2-\u300anodejs\u8bbe\u8ba1\u6a21\u5f0f\u300b\u4f7f\u7528\u6d41\u8fdb\u884c\u7f16\u7801"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"https://zhuanlan.zhihu.com/p/32532984?utm_source=wechat_session&utm_medium=social&utm_oi=692679874405502976&utm_content=sec"}),"2. \u300aNode.js\u8bbe\u8ba1\u6a21\u5f0f\u300b\u4f7f\u7528\u6d41\u8fdb\u884c\u7f16\u7801")),Object(i.b)("h3",{id:"3-\u4f60\u4e0d\u77e5\u9053\u7684nodejs\u6027\u80fd\u4f18\u5316\uff0c\u8bfb\u4e86\u4e4b\u540e\u6c34\u5e73\u76f4\u7ebf\u4e0a\u5347"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"https://zhuanlan.zhihu.com/p/51847546?utm_source=wechat_session&utm_medium=social&utm_oi=692679874405502976&utm_content=sec"}),"3. \u4f60\u4e0d\u77e5\u9053\u7684Node.js\u6027\u80fd\u4f18\u5316\uff0c\u8bfb\u4e86\u4e4b\u540e\u6c34\u5e73\u76f4\u7ebf\u4e0a\u5347")))}p.isMDXComponent=!0},339:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,j=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return a?r.a.createElement(j,b(b({ref:t},l),{},{components:a})):r.a.createElement(j,b({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);