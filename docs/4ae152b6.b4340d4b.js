(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=(n(0),n(292));const c={id:"tsAdvanceType",title:"ts\u9ad8\u7ea7\u7c7b\u578b",hide_title:!0,sidebar_label:"\u9ad8\u7ea7\u7c7b\u578b"},b={unversionedId:"ts/goods/tsAdvanceType",id:"ts/goods/tsAdvanceType",isDocsHomePage:!1,title:"ts\u9ad8\u7ea7\u7c7b\u578b",description:"\u81ea\u5b9a\u4e49\u7c7b\u578b",source:"@site/docs/ts/goods/\u9ad8\u7ea7\u7c7b\u578b.md",slug:"/ts/goods/tsAdvanceType",permalink:"/docs/ts/goods/tsAdvanceType",version:"current",sidebar_label:"\u9ad8\u7ea7\u7c7b\u578b",sidebar:"tsdoc",previous:{title:"ts\u914d\u7f6e\u6280\u5de7",permalink:"/docs/ts/goods/tsConfig"},next:{title:"ts\u4e2d\u7684class",permalink:"/docs/ts/goods/tsClass"}},i=[{value:"\u81ea\u5b9a\u4e49\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",children:[{value:"1. XOR \u4e92\u65a5\u7c7b\u578b",id:"1-xor-\u4e92\u65a5\u7c7b\u578b",children:[]},{value:"2. const \u65ad\u8a00",id:"2-const-\u65ad\u8a00",children:[]},{value:"3. NoInfer \u8ba9\u6cdb\u578b\u4e3a\u5fc5\u4f20\u9879",id:"3-noinfer-\u8ba9\u6cdb\u578b\u4e3a\u5fc5\u4f20\u9879",children:[]},{value:"4. \u6761\u4ef6\u7c7b\u578b",id:"4-\u6761\u4ef6\u7c7b\u578b",children:[]}]}],o={rightToc:i};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u81ea\u5b9a\u4e49\u7c7b\u578b"},"\u81ea\u5b9a\u4e49\u7c7b\u578b"),Object(r.b)("h3",{id:"1-xor-\u4e92\u65a5\u7c7b\u578b"},"1. XOR \u4e92\u65a5\u7c7b\u578b"),Object(r.b)("p",null,"\u5982\u679c\u662f\u7c7b\u578b",Object(r.b)("inlineCode",{parentName:"p"},"A"),"\uff0c\u5c31\u4e0d\u80fd\u662f\u7c7b\u578b",Object(r.b)("inlineCode",{parentName:"p"},"B")),Object(r.b)("p",null,"\u5177\u4f53\u5b9e\u73b0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/issues/14094#issuecomment-373782604"}),"\u53c2\u8003"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }\ntype XOR<T, U> = (T | U) extends object\n  ? (Without<T, U> & U) | (Without<U, T> & T)\n  : T | U\n")),Object(r.b)("p",null,"\u4f8b\u5b50:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface Person {\n  ethnicity: string\n}\ninterface Pet {\n  breed: string\n}\nfunction getOrigin(value: XOR<Person, Pet>) {}\n\ngetOrigin({}) //Error\ngetOrigin({ ethnicity: 'abc' }) //OK\ngetOrigin({ breed: 'def' }) //OK\ngetOrigin({ ethnicity: 'abc', breed: 'def' }) //Error\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"A")," | ",Object(r.b)("inlineCode",{parentName:"p"},"B"),"\u662f\u8fbe\u4e0d\u5230\u8fd9\u6837\u7684\u6548\u679c"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"|"),"\u5728\u53ea\u8981\u6ee1\u8db3\u5176\u4e2d\u4e00\u79cd\u7c7b\u578b\u7684\u60c5\u51b5\u4e0b\u5c31\u6210\u7acb\uff0c\u4f46\u662f\u4e5f\u53ef\u4ee5",Object(r.b)("inlineCode",{parentName:"p"},"\u540c\u65f6\u6ee1\u8db3\u4e24\u79cd\u7c7b\u578b"),"\uff0c\u4e0d\u80fd\u8fbe\u5230\u4e92\u65a5\u6548\u679c"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface ITest1 {\n  name: string\n}\ninterface ITest2 {\n  age: number\n}\nconst a: ITest1 | ITest2 = { name: '\u5d14\u6d77\u5cf0', age: 26 } // OK\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5927\u4e8e2\u4e2a\u7684\u4e92\u65a5\u7c7b\u578b\u8be5\u600e\u4e48\u5b9a\u4e49"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type Test = XOR<A, XOR<B, C>>\n")))))),Object(r.b)("h3",{id:"2-const-\u65ad\u8a00"},"2. const \u65ad\u8a00"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7c7b\u578b\u6269\u5c55")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let x = 'x' // x\u7684\u7c7b\u578b\uff1astring\n\nconst x = 'x' // x\u7684\u7c7b\u578b: 'x'\n")),Object(r.b)("p",{parentName:"div"},"\u53d8\u91cf",Object(r.b)("inlineCode",{parentName:"p"},"x"),"\u7684\u7c7b\u578b\u4f1a\u88ab\u81ea\u52a8\u6269\u5c55\u4e3a\u201c\u5b57\u7b26\u4e32\u201d\u7c7b\u578b\uff0c\u8fd9\u5c31\u662f",Object(r.b)("inlineCode",{parentName:"p"},"\u7c7b\u578b\u6269\u5c55")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),Object(r.b)("inlineCode",{parentName:"h5"},"const"),"\u65ad\u8a00\u7684\u5f71\u54cd")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"const"),"\u65ad\u8a00\u540e\uff0c\u6240\u6709\u7684\u6570\u636e\u90fd\u4e0d\u80fd\u518d\u88ab\u6269\u5c55"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let x = 'x' // x\u7684\u7c7b\u578b\uff1astring\nlet x = 'x' as const // x\u7684\u7c7b\u578b\uff1a 'x'\n\nconst obj = { name: '\u5d14\u6d77\u5cf0' } // obj\u7684\u7c7b\u578b: { name: string }\nconst obj = { name: '\u5d14\u6d77\u5cf0' } as const // obj\u7684\u7c7b\u578b: { readonly name: '\u5d14\u6d77\u5cf0' }\n")),Object(r.b)("p",{parentName:"li"},"\u53ef\u4ee5\u53d1\u73b0\u53ea\u8981\u4f7f\u7528\u4e86",Object(r.b)("inlineCode",{parentName:"p"},"const"),"\u65ad\u8a00\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5b57\u9762\u91cf\u7684\u7c7b\u578b\u5c31\u4e0d\u4f1a\u88ab",Object(r.b)("inlineCode",{parentName:"p"},"\u81ea\u52a8\u6269\u5c55"),"\u4e86\uff0c\u8fd9\u4e2a\u5b57\u9762\u91cf\u7684\u7c7b\u578b\u5c31\u56fa\u5316\u4e86")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5bf9\u9762\u5b57\u9762\u91cf\u7c7b\u578b\u53d8\u6210",Object(r.b)("inlineCode",{parentName:"p"},"\u53ea\u8bfb"),"\u6a21\u5f0f"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const obj = { name: '\u5d14\u6d77\u5cf0' } // obj\u7684\u7c7b\u578b: { name: string }\nconst obj = { name: '\u5d14\u6d77\u5cf0' } as const // obj\u7684\u7c7b\u578b: { readonly name: '\u5d14\u6d77\u5cf0' }\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\u7684\u7c7b\u578b\u6dfb\u52a0\u4e86",Object(r.b)("inlineCode",{parentName:"p"},"readonly"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6570\u7ec4\u5b57\u9762\u91cf\u7c7b\u578b\u53d8\u6210",Object(r.b)("inlineCode",{parentName:"p"},"\u53ea\u8bfb"),"\u6a21\u5f0f\uff0c\u800c\u4e14\u53d8\u6210",Object(r.b)("inlineCode",{parentName:"p"},"\u5143\u7ec4"),"(\u5143\u7ec4\u7c7b\u578b\u5141\u8bb8\u8868\u793a\u4e00\u4e2a\u5df2\u77e5\u5143\u7d20\u6570\u91cf\u548c\u7c7b\u578b\u7684\u6570\u7ec4)"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const arr = ['\u5d14\u6d77\u5cf0'] // arr\u7684\u7c7b\u578b: string[]\nconst arr = ['\u5d14\u6d77\u5cf0'] as const // obj\u7684\u7c7b\u578b: [ readonly '\u5d14\u6d77\u5cf0' ]\n")),Object(r.b)("p",{parentName:"li"},"\u9996\u5148",Object(r.b)("inlineCode",{parentName:"p"},"arr"),"\u7684\u7c7b\u578b\u53d8\u6210\u4e86",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple"}),"\u5143\u7ec4"),"\uff0c\u5176\u6b21\u662f\u6dfb\u52a0\u4e86",Object(r.b)("inlineCode",{parentName:"p"},"readonly"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6240\u6709\u5c42\u7ea7\u7684\u5b50\u5c5e\u6027\u90fd\u4f1a\u53d8\u6210",Object(r.b)("inlineCode",{parentName:"p"},"readonly")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let obj = {\n  x: 10,\n  y: [20, 30],\n  z: {\n    a:\n      {  b: 42 }\n  }\n} as const;\n\n// obj\u7684\u7c7b\u578b\nlet obj: {\n  readonly x: 10;\n  readonly y: readonly [20, 30];\n  readonly z: {\n    readonly a: {\n      readonly b: 42;\n    }\n  }\n}\n")),Object(r.b)("p",{parentName:"li"},"\u53ef\u4ee5\u770b\u5230\u65e0\u8bba\u662f\u5bf9\u8c61\u8fd8\u662f\u6570\u7ec4\uff0c\u90a3\u4e48\u4e0b\u9762\u6240\u6709\u7684\u5b50\u5c5e\u6027\u90fd\u4f1a\u53d8\u6210",Object(r.b)("inlineCode",{parentName:"p"},"readonly")))))),Object(r.b)("h3",{id:"3-noinfer-\u8ba9\u6cdb\u578b\u4e3a\u5fc5\u4f20\u9879"},"3. NoInfer \u8ba9\u6cdb\u578b\u4e3a\u5fc5\u4f20\u9879"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type NoInfer<T> = [T][T extends any ? 0 : never]\n\nfunction test<P = never>(data: NoInfer<P>) {}\n\ntest(1)\ntest<number>(1)\n")),Object(r.b)("h3",{id:"4-\u6761\u4ef6\u7c7b\u578b"},"4. \u6761\u4ef6\u7c7b\u578b"),Object(r.b)("p",null,"\u5f53\u67d0\u4e2a\u5c5e\u6027\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"\u7279\u6027\u503c")," \uff0c\u624d\u5141\u8bb8\u8bbe\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"\u53e6\u4e00\u4e2a\u5c5e\u6027")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4f8b\u5982\u6709\u4e2a ",Object(r.b)("inlineCode",{parentName:"p"},"Text")," \u7ec4\u4ef6\uff0c\u5141\u8bb8\u8bbe\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"truncate")," \u8bbe\u7f6e\u6587\u672c\u622a\u65ad\uff0c\u5f53\u8fd9\u4e2a\u7ec4\u4ef6\u53ea\u6709\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"\u6587\u672c\u622a\u65ad\u4e5f\u5c31\u662f truncate=true")," \u7684\u65f6\u5019\uff0c\u624d\u80fd\u8bbe\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"showExpanded")," \u6765\u8bbe\u7f6e \u70b9\u51fb\u5c55\u5f00\u66f4\u591a\u7684\u529f\u80fd\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Text truncate={false} showExpand>not truncated w/ expand option?</Text>\n")),Object(r.b)("p",null,"\u50cf\u8fd9\u79cd\u60c5\u51b5\u662f\u4e0d\u5141\u8bb8\u7684\uff0c\u6240\u4ee5\u600e\u4e48\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"ts")," \u6765\u63d0\u793a\u5c5e\u6027\u5462\uff1f"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{5-7}","{5-7}":!0}),"interface CommonProps {\n  children: React.ReactNode\n}\n\ntype TruncateProps =\n  | { truncate?: false; showExpanded?: never }\n  | { truncate: true; showExpanded?: boolean }\n\ntype Props = CommonProps & TruncateProps\n\nconst Text = ({ children, showExpanded, truncate }: Props) => {\n}\n")),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u601d\u60f3")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u7b2c\u4e00\u4e2a\u8bbe\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"\u6761\u4ef6\u6210\u7acb")," \u60c5\u51b5\u4e0b\u7684\u5c5e\u6027\u7c7b\u578b"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type TruncateProps = { truncate: true; showExpanded?: boolean }\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6700\u540e\u8bbe\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"\u6761\u4ef6\u4e0d\u6210\u7acb")," \u4f9d\u8d56\u7684\u5c5e\u6027\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"never")," \u8bbe\u7f6e"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type TruncateProps = { truncate?: false; showExpanded?: never }\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"\u8054\u5408\u7c7b\u578b")," \u7ec4\u5408\u8d77\u6765"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type TruncateProps =\n  | { truncate: true; showExpanded?: boolean }\n  | { truncate?: false; showExpanded?: never }\n")))))))}p.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=s(n),m=a,O=l["".concat(b,".").concat(m)]||l[m]||d[m]||c;return n?r.a.createElement(O,i(i({ref:t},p),{},{components:n})):r.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<c;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);