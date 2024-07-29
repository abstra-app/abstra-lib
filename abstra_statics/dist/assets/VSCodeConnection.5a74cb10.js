import{C as v}from"./ContentLayout.26a258ee.js";import{d as m,e as w,V as C,a7 as k,c as f,w as e,o as _,b as a,ax as t,u as n,cW as l,cU as o,cV as r,eA as p,bL as x}from"./vue-router.39119ee1.js";import{A as g}from"./index.77098606.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[s]="178a2327-2108-4b93-8565-23551681acd1",u._sentryDebugIdIdentifier="sentry-dbid-178a2327-2108-4b93-8565-23551681acd1")}catch{}})();const I=m({__name:"VSCodeConnection",setup(u){async function s(){const c=await fetch("/_editor/api/debugger",{method:"GET"});if(!c.ok)throw new Error("Failed to check debugger connection");return await c.json()}async function h(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),y()}const d=w({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function y(){d.value=await s()}let i=null;return C(()=>{i=setInterval(y,1e3)}),k(()=>{i&&clearInterval(i)}),(c,b)=>(_(),f(v,null,{default:e(()=>[a(n(l),null,{default:e(()=>[t("VS Code")]),_:1}),a(n(g),{direction:"vertical"},{default:e(()=>[a(n(o),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),a(n(o),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),a(n(r),{code:""},{default:e(()=>[t(p(d.value.root),1)]),_:1})]),_:1}),a(n(o),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),a(n(o),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(_(),f(n(g),{key:0,direction:"vertical"},{default:e(()=>[a(n(o),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),a(n(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(p(d.value.port),1)]),_:1})]),_:1})):(_(),f(n(g),{key:1,direction:"vertical"},{default:e(()=>[a(n(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),a(n(x),{onClick:h},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),a(n(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),a(n(o),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),a(n(r),{code:""},{default:e(()=>[t(p(d.value.interpreter),1)]),_:1})]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),a(n(o),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),a(n(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),a(n(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),a(n(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{I as default};
//# sourceMappingURL=VSCodeConnection.5a74cb10.js.map
