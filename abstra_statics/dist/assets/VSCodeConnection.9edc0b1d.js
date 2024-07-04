import{C as v}from"./ContentLayout.c9c57b8b.js";import{d as m,e as w,$ as C,a1 as k,o as f,c as _,w as e,b as a,as as t,u as n,cS as l,cQ as o,cR as r,eA as p,bH as S}from"./vue-router.7730510e.js";import{A as g}from"./index.dec0903c.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[s]="f6893421-4c4d-4e00-96a5-7cf8af03782e",u._sentryDebugIdIdentifier="sentry-dbid-f6893421-4c4d-4e00-96a5-7cf8af03782e")}catch{}})();const V=m({__name:"VSCodeConnection",setup(u){async function s(){const c=await fetch("/_editor/api/debugger",{method:"GET"});if(!c.ok)throw new Error("Failed to check debugger connection");return await c.json()}async function h(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),y()}const d=w({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function y(){d.value=await s()}let i=null;return C(()=>{i=setInterval(y,1e3)}),k(()=>{i&&clearInterval(i)}),(c,b)=>(f(),_(v,null,{default:e(()=>[a(n(l),null,{default:e(()=>[t("VS Code")]),_:1}),a(n(g),{direction:"vertical"},{default:e(()=>[a(n(o),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),a(n(o),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),a(n(r),{code:""},{default:e(()=>[t(p(d.value.root),1)]),_:1})]),_:1}),a(n(o),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),a(n(o),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(f(),_(n(g),{key:0,direction:"vertical"},{default:e(()=>[a(n(o),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),a(n(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(p(d.value.port),1)]),_:1})]),_:1})):(f(),_(n(g),{key:1,direction:"vertical"},{default:e(()=>[a(n(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),a(n(S),{onClick:h},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),a(n(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),a(n(o),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),a(n(r),{code:""},{default:e(()=>[t(p(d.value.interpreter),1)]),_:1})]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),a(n(o),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),a(n(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),a(n(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),a(n(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{V as default};
//# sourceMappingURL=VSCodeConnection.9edc0b1d.js.map
