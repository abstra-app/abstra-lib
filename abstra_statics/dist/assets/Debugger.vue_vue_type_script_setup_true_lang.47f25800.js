import{d as b,r as h,o as w,L as v,b as d,c as s,w as e,aB as n,u as t,b_ as u,f as o,eB as m,cC as k}from"./outputWidgets.2df9e511.js";import{A as C,a as g}from"./Text.cf87271e.js";import{A as p}from"./index.55f34527.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="e7f3c911-1d83-44fe-9208-5754001ffde8",a._sentryDebugIdIdentifier="sentry-dbid-e7f3c911-1d83-44fe-9208-5754001ffde8")}catch{}})();const I=b({__name:"Debugger",setup(a){async function r(){const f=await fetch("/_editor/api/debugger",{method:"GET"});if(!f.ok)throw new Error("Failed to check debugger connection");return await f.json()}async function i(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),_()}const c=h({connected:!1,port:0,is_launch_json_configured:!1});async function _(){c.value=await r()}let l=null;return w(()=>{l=setInterval(_,1e3)}),v(()=>{l&&clearInterval(l)}),(f,y)=>c.value.connected?(d(),s(t(u),{key:0,disabled:""},{default:e(()=>[n("VSCode connected")]),_:1})):(d(),s(t(k),{key:1},{content:e(()=>[o(t(p),{direction:"vertical"},{default:e(()=>[o(t(C),null,{default:e(()=>[n(" Abstra allows you to connect to your VSCode debugger ")]),_:1}),o(t(g),null,{default:e(()=>[n(" You're not connected ")]),_:1}),c.value.is_launch_json_configured?(d(),s(t(p),{key:0,direction:"vertical"},{default:e(()=>[o(t(g),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[n(m(c.value.port),1)]),_:1}),o(t(u),{href:"https://docs.abstra.io/debug/vscode",target:"_blank"},{default:e(()=>[n(" Learn how to connect to vscode ")]),_:1})]),_:1})):(d(),s(t(u),{key:1,onClick:i},{default:e(()=>[n("Configure launch.json")]),_:1}))]),_:1})]),default:e(()=>[o(t(u),null,{default:e(()=>[n("Connect to VSCode")]),_:1})]),_:1}))}});export{I as _};
//# sourceMappingURL=Debugger.vue_vue_type_script_setup_true_lang.47f25800.js.map
