import{C as m}from"./ContentLayout.cf7ac4ae.js";import{d as v,r as w,o as C,R as k,b as f,c as _,w as e,f as o,au as t,u as n,eJ as p,cG as g,bI as x}from"./outputWidgets.bf420cfc.js";import{A as l}from"./Title.e483d25d.js";import{A as a}from"./Paragraph.a5b3b15b.js";import{A as r}from"./Text.2b6f61f8.js";import"./Base.71da3116.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[i]="1d72586b-96f8-4bbb-bc57-a69cde49260c",u._sentryDebugIdIdentifier="sentry-dbid-1d72586b-96f8-4bbb-bc57-a69cde49260c")}catch{}})();const j=v({__name:"VSCodeConnection",setup(u){async function i(){const c=await fetch("/_editor/api/debugger",{method:"GET"});if(!c.ok)throw new Error("Failed to check debugger connection");return await c.json()}async function b(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),h()}const d=w({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function h(){d.value=await i()}let s=null;return C(()=>{s=setInterval(h,1e3)}),k(()=>{s&&clearInterval(s)}),(c,y)=>(f(),_(m,null,{default:e(()=>[o(n(l),null,{default:e(()=>[t("VS Code")]),_:1}),o(n(g),{direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),o(n(r),{code:""},{default:e(()=>[t(p(d.value.root),1)]),_:1})]),_:1}),o(n(a),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),o(n(a),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(f(),_(n(g),{key:0,direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),o(n(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(p(d.value.port),1)]),_:1})]),_:1})):(f(),_(n(g),{key:1,direction:"vertical"},{default:e(()=>[o(n(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),o(n(x),{onClick:b},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),o(n(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),o(n(a),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),o(n(r),{code:""},{default:e(()=>[t(p(d.value.interpreter),1)]),_:1})]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),o(n(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),o(n(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),o(n(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{j as default};
//# sourceMappingURL=VSCodeConnection.c00a5ccc.js.map
