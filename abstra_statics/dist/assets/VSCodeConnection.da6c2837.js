import{C as v}from"./ContentLayout.31deb6d6.js";import{d as m,e as w,V as C,a7 as k,c as f,w as e,o as _,b as n,ax as t,u as a,cY as l,cW as o,cX as r,et as p,bL as x}from"./vue-router.3ce524c3.js";import{A as g}from"./index.cb8712f4.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[s]="807bdace-3f36-456f-a1a4-6a5da3b6f8fa",u._sentryDebugIdIdentifier="sentry-dbid-807bdace-3f36-456f-a1a4-6a5da3b6f8fa")}catch{}})();const I=m({__name:"VSCodeConnection",setup(u){async function s(){const c=await fetch("/_editor/api/debugger",{method:"GET"});if(!c.ok)throw new Error("Failed to check debugger connection");return await c.json()}async function h(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),b()}const d=w({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function b(){d.value=await s()}let i=null;return C(()=>{i=setInterval(b,1e3)}),k(()=>{i&&clearInterval(i)}),(c,y)=>(_(),f(v,null,{default:e(()=>[n(a(l),null,{default:e(()=>[t("VS Code")]),_:1}),n(a(g),{direction:"vertical"},{default:e(()=>[n(a(o),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),n(a(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),n(a(o),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),n(a(r),{code:""},{default:e(()=>[t(p(d.value.root),1)]),_:1})]),_:1}),n(a(o),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),n(a(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),n(a(o),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),n(a(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(_(),f(a(g),{key:0,direction:"vertical"},{default:e(()=>[n(a(o),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),n(a(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(p(d.value.port),1)]),_:1})]),_:1})):(_(),f(a(g),{key:1,direction:"vertical"},{default:e(()=>[n(a(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),n(a(x),{onClick:h},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),n(a(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),n(a(o),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),n(a(r),{code:""},{default:e(()=>[t(p(d.value.interpreter),1)]),_:1})]),_:1}),n(a(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),n(a(o),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),n(a(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),n(a(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),n(a(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{I as default};
//# sourceMappingURL=VSCodeConnection.da6c2837.js.map
