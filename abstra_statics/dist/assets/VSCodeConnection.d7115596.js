import{d as m,r as w,o as k,K as x,b as f,eu as C,f as o,w as e,u as t,aq as n,eD as _,c as y,bE as b,cA as p}from"./outputWidgets.6dcbe016.js";import{A as l}from"./Title.deb697cf.js";import{A as a}from"./Paragraph.51111f1d.js";import{A as r}from"./Text.f0fdc92a.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[s]="49545ba7-f38a-491f-863a-3c1cbd94ed21",d._sentryDebugIdIdentifier="sentry-dbid-49545ba7-f38a-491f-863a-3c1cbd94ed21")}catch{}})();const S={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},V=m({__name:"VSCodeConnection",setup(d){async function s(){const c=await fetch("/_editor/api/debugger",{method:"GET"});if(!c.ok)throw new Error("Failed to check debugger connection");return await c.json()}async function g(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),h()}const u=w({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function h(){u.value=await s()}let i=null;return k(()=>{i=setInterval(h,1e3)}),x(()=>{i&&clearInterval(i)}),(c,v)=>(f(),C("div",S,[o(t(l),null,{default:e(()=>[n("VS Code")]),_:1}),o(t(p),{direction:"vertical"},{default:e(()=>[o(t(a),null,{default:e(()=>[n(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),o(t(l),{level:3},{default:e(()=>[n("Project folder")]),_:1}),o(t(a),null,{default:e(()=>[n(" Make sure to open your VS Code in this directory: "),o(t(r),{code:""},{default:e(()=>[n(_(u.value.root),1)]),_:1})]),_:1}),o(t(a),null,{default:e(()=>[n(" This is important for the next settings work properly ")]),_:1}),o(t(l),{level:3},{default:e(()=>[n("Extension")]),_:1}),o(t(a),null,{default:e(()=>[n(" You should install the python extension")]),_:1}),o(t(l),{level:3},{default:e(()=>[n("Debugger")]),_:1}),u.value.is_launch_json_configured?(f(),y(t(p),{key:0,direction:"vertical"},{default:e(()=>[o(t(a),null,{default:e(()=>[n("Your debugger connection is configured")]),_:1}),o(t(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[n(_(u.value.port),1)]),_:1}),o(t(b),{href:"https://docs.abstra.io/debug/vscode",target:"_blank",type:"link",size:"small"},{default:e(()=>[n(" Learn how to connect to vscode ")]),_:1})]),_:1})):(f(),y(t(p),{key:1,direction:"vertical"},{default:e(()=>[o(t(r),null,{default:e(()=>[n(" Your debugger connection is not configured ")]),_:1}),o(t(b),{onClick:g},{default:e(()=>[n("Configure launch.json")]),_:1})]),_:1})),o(t(l),{level:3},{default:e(()=>[n("Interpreter")]),_:1}),o(t(a),null,{default:e(()=>[n(" This is the current python interpreter running abstra: "),o(t(r),{code:""},{default:e(()=>[n(_(u.value.interpreter),1)]),_:1})]),_:1}),o(t(l),{level:3},{default:e(()=>[n("Default editor")]),_:1}),o(t(a),null,{default:e(()=>[n(" Make sure to set VS Code as default application for "),o(t(r),{code:""},{default:e(()=>[n("*.py")]),_:1}),n(", "),o(t(r),{code:""},{default:e(()=>[n("requirements.txt")]),_:1}),n(" and "),o(t(r),{code:""},{default:e(()=>[n(".env")]),_:1}),n(" files ")]),_:1})]),_:1})]))}});export{V as default};
//# sourceMappingURL=VSCodeConnection.d7115596.js.map
