import{C as v}from"./ContentLayout.37847a6f.js";import{d as m,r as w,o as C,R as k,b as f,c as _,w as e,f as a,am as t,u as n,cW as l,cU as o,cV as r,f4 as p,cH as g,bF as x}from"./outputWidgets.fb72f334.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[c]="500ce9f0-c1a7-40e2-abc3-6e6f3c0d9906",u._sentryDebugIdIdentifier="sentry-dbid-500ce9f0-c1a7-40e2-abc3-6e6f3c0d9906")}catch{}})();const D=m({__name:"VSCodeConnection",setup(u){async function c(){const i=await fetch("/_editor/api/debugger",{method:"GET"});if(!i.ok)throw new Error("Failed to check debugger connection");return await i.json()}async function h(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),y()}const d=w({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function y(){d.value=await c()}let s=null;return C(()=>{s=setInterval(y,1e3)}),k(()=>{s&&clearInterval(s)}),(i,b)=>(f(),_(v,null,{default:e(()=>[a(n(l),null,{default:e(()=>[t("VS Code")]),_:1}),a(n(g),{direction:"vertical"},{default:e(()=>[a(n(o),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),a(n(o),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),a(n(r),{code:""},{default:e(()=>[t(p(d.value.root),1)]),_:1})]),_:1}),a(n(o),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),a(n(o),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(f(),_(n(g),{key:0,direction:"vertical"},{default:e(()=>[a(n(o),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),a(n(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(p(d.value.port),1)]),_:1})]),_:1})):(f(),_(n(g),{key:1,direction:"vertical"},{default:e(()=>[a(n(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),a(n(x),{onClick:h},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),a(n(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),a(n(o),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),a(n(r),{code:""},{default:e(()=>[t(p(d.value.interpreter),1)]),_:1})]),_:1}),a(n(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),a(n(o),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),a(n(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),a(n(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),a(n(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{D as default};
//# sourceMappingURL=VSCodeConnection.cb469613.js.map
