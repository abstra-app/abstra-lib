import{C as v}from"./ContentLayout.2a376971.js";import{d as m,r as w,o as C,R as k,b as c,c as _,w as e,f as o,am as t,u as n,cW as l,cU as a,cV as r,f4 as p,cH as g,bF as x}from"./outputWidgets.049ac64d.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[s]="fd36d6bb-b074-4763-91bb-f8450f5d060f",u._sentryDebugIdIdentifier="sentry-dbid-fd36d6bb-b074-4763-91bb-f8450f5d060f")}catch{}})();const D=m({__name:"VSCodeConnection",setup(u){async function s(){const f=await fetch("/_editor/api/debugger",{method:"GET"});if(!f.ok)throw new Error("Failed to check debugger connection");return await f.json()}async function b(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),h()}const d=w({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function h(){d.value=await s()}let i=null;return C(()=>{i=setInterval(h,1e3)}),k(()=>{i&&clearInterval(i)}),(f,y)=>(c(),_(v,null,{default:e(()=>[o(n(l),null,{default:e(()=>[t("VS Code")]),_:1}),o(n(g),{direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),o(n(r),{code:""},{default:e(()=>[t(p(d.value.root),1)]),_:1})]),_:1}),o(n(a),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),o(n(a),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(c(),_(n(g),{key:0,direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),o(n(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(p(d.value.port),1)]),_:1})]),_:1})):(c(),_(n(g),{key:1,direction:"vertical"},{default:e(()=>[o(n(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),o(n(x),{onClick:b},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),o(n(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),o(n(a),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),o(n(r),{code:""},{default:e(()=>[t(p(d.value.interpreter),1)]),_:1})]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),o(n(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),o(n(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),o(n(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{D as default};
//# sourceMappingURL=VSCodeConnection.b5c1d3d2.js.map
