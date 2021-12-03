(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(314));const c={id:"reactUseReducer",title:"react useReducer",hide_title:!0,sidebar_label:"useReducer"},o={unversionedId:"react/advance/reactUseReducer",id:"react/advance/reactUseReducer",isDocsHomePage:!1,title:"react useReducer",description:"\u57fa\u7840\u4f7f\u7528",source:"@site/docs/react/advance/useReducer.md",slug:"/react/advance/reactUseReducer",permalink:"/docs/react/advance/reactUseReducer",version:"current",sidebar_label:"useReducer",sidebar:"reactdoc",previous:{title:"react context",permalink:"/docs/react/advance/reactContext"},next:{title:"react\u5143\u7d20\u5bf9\u8c61",permalink:"/docs/react/advance/reactElementObject"}},u=[{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",children:[]},{value:"dispatch \u4f20\u9012\u51fd\u6570",id:"dispatch-\u4f20\u9012\u51fd\u6570",children:[]},{value:"\u5c01\u88c5\u5f02\u6b65\u8bf7\u6c42",id:"\u5c01\u88c5\u5f02\u6b65\u8bf7\u6c42",children:[{value:"1. \u7533\u660e\u5f02\u6b65\u72b6\u6001 reducer",id:"1-\u7533\u660e\u5f02\u6b65\u72b6\u6001-reducer",children:[]},{value:"2. hook \u5c01\u88c5 promise \u548c reducer",id:"2-hook-\u5c01\u88c5-promise-\u548c-reducer",children:[]},{value:"3. \u4f7f\u7528 hook \u8fd4\u56de\u7684\u65b9\u6cd5\u548c state",id:"3-\u4f7f\u7528-hook-\u8fd4\u56de\u7684\u65b9\u6cd5\u548c-state",children:[]}]}],i={rightToc:u};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u57fa\u7840\u4f7f\u7528"},"\u57fa\u7840\u4f7f\u7528"),Object(a.b)("p",null,"\u5b83\u63a5\u6536\u4e00\u4e2a\u5f62\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"(state, action) => newState")," \u7684 \u65b9\u6cd5\uff0c\u5e76\u8fd4\u56de\u5f53\u524d\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"state")," \u4ee5\u53ca\u4e0e\u5176\u914d\u5957\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," \u65b9\u6cd5\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"/**\n * initialArg\uff1a\u521d\u59cb\u72b6\u6001\n * init\uff1a\u53ef\u9009\u503c\uff0c\u662f\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u683c\u5f0f\u5316\u521d\u59cb\u503c\n */\nconst [state, dispatch] = useReducer(reducer, initialArg, init)\n")),Object(a.b)("p",null,"\u7528\u6cd5\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const initialState = {count: 0};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return {count: state.count + 1};\n    case 'decrement':\n      return {count: state.count - 1};\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({type: 'decrement'})}>-</button>\n      <button onClick={() => dispatch({type: 'increment'})}>+</button>\n    </>\n  );\n}\n")),Object(a.b)("h2",{id:"dispatch-\u4f20\u9012\u51fd\u6570"},"dispatch \u4f20\u9012\u51fd\u6570"),Object(a.b)("p",null,"\u5f62\u5f0f\u5982\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const [state, setState] = useState({});\nsetState(prevState => {\n  return prevState + 1\n});\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{3, 11}","{3,":!0,"11}":!0}),"const countReducer = (state, action) => ({\n  ...state,\n  ...action(state)\n})\n\nfunction Counter({initialCount = 0, step = 1}) {\n  const [state, dispatch] = React.useReducer(countReducer, {\n    count: initialCount,\n  })\n\n  const increment = () => dispatch(currentState => ({count: currentState.count + step}))\n  return <button onClick={increment}>{count}</button>\n}\n")),Object(a.b)("h2",{id:"\u5c01\u88c5\u5f02\u6b65\u8bf7\u6c42"},"\u5c01\u88c5\u5f02\u6b65\u8bf7\u6c42"),Object(a.b)("h3",{id:"1-\u7533\u660e\u5f02\u6b65\u72b6\u6001-reducer"},"1. \u7533\u660e\u5f02\u6b65\u72b6\u6001 reducer"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function asyncReducer(state, action) {\n  switch (action.type) {\n    case 'pending': {\n      return {status: 'pending', data: null, error: null}\n    }\n    case 'resolved': {\n      return {status: 'resolved', data: action.data, error: null}\n    }\n    case 'rejected': {\n      return {status: 'rejected', data: null, error: action.error}\n    }\n    default: {\n      throw new Error(`Unhandled action type: ${action.type}`)\n    }\n  }\n}\n")),Object(a.b)("h3",{id:"2-hook-\u5c01\u88c5-promise-\u548c-reducer"},"2. hook \u5c01\u88c5 promise \u548c reducer"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function useAsync(initialState) {\n  const [state, dispatch] = React.useReducer(asyncReducer, {\n    status: 'idle',\n    data: null,\n    error: null,\n    ...initialState,\n  })\n\n  const {data, error, status} = state\n\n  const run = React.useCallback(promise => {\n    dispatch({type: 'pending'})\n    promise.then(\n      data => {\n        dispatch({type: 'resolved', data})\n      },\n      error => {\n        dispatch({type: 'rejected', error})\n      },\n    )\n  }, [])\n\n  return {\n    error,\n    status,\n    data,\n    run,\n  }\n}\n")),Object(a.b)("h3",{id:"3-\u4f7f\u7528-hook-\u8fd4\u56de\u7684\u65b9\u6cd5\u548c-state"},"3. \u4f7f\u7528 hook \u8fd4\u56de\u7684\u65b9\u6cd5\u548c state"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function PokemonInfo({pokemonName}) {\n  const {data: pokemon, status, error, run} = useAsync({\n    status: pokemonName ? 'pending' : 'idle',\n  })\n\n  React.useEffect(() => {\n    if (!pokemonName) {\n      return\n    }\n    run(fetchPokemon(pokemonName))\n  }, [pokemonName, run])\n\n  if (status === 'idle') {\n    return 'Submit a pokemon'\n  } else if (status === 'pending') {\n    return <PokemonInfoFallback name={pokemonName} />\n  } else if (status === 'rejected') {\n    throw error\n  } else if (status === 'resolved') {\n    return <PokemonDataView pokemon={pokemon} />\n  }\n\n  throw new Error('This should be impossible')\n}\n")))}s.isMDXComponent=!0},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,m=l["".concat(o,".").concat(b)]||l[b]||p[b]||c;return n?a.a.createElement(m,u(u({ref:t},s),{},{components:n})):a.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);