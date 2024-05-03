import{C as m}from"./ContentLayout.ea29d80f.js";import{d as v,r as w,o as C,O as k,b as f,c as _,w as e,f as o,as as t,u as n,eH as p,cC as g,bG as x}from"./outputWidgets.eae74f87.js";import{A as l}from"./Title.f21d4af5.js";import{A as a}from"./Paragraph.9553ecfa.js";import{A as r}from"./Text.2973c02c.js";import"./Base.1f77227e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[s]="359d5d10-1d16-4cee-8785-aaf5d6356831",u._sentryDebugIdIdentifier="sentry-dbid-359d5d10-1d16-4cee-8785-aaf5d6356831")}catch{}})();const j=v({__name:"VSCodeConnection",setup(u){async function s(){const c=await fetch("/_editor/api/debugger",{method:"GET"});if(!c.ok)throw new Error("Failed to check debugger connection");return await c.json()}async function h(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),y()}const d=w({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function y(){d.value=await s()}let i=null;return C(()=>{i=setInterval(y,1e3)}),k(()=>{i&&clearInterval(i)}),(c,b)=>(f(),_(m,null,{default:e(()=>[o(n(l),null,{default:e(()=>[t("VS Code")]),_:1}),o(n(g),{direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),o(n(r),{code:""},{default:e(()=>[t(p(d.value.root),1)]),_:1})]),_:1}),o(n(a),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),o(n(a),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(f(),_(n(g),{key:0,direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),o(n(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(p(d.value.port),1)]),_:1})]),_:1})):(f(),_(n(g),{key:1,direction:"vertical"},{default:e(()=>[o(n(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),o(n(x),{onClick:h},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),o(n(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),o(n(a),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),o(n(r),{code:""},{default:e(()=>[t(p(d.value.interpreter),1)]),_:1})]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),o(n(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),o(n(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),o(n(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{j as default};
//# sourceMappingURL=VSCodeConnection.b4861541.js.map
