import{d as b,r as h,o as w,L as v,b as r,c as s,w as e,aB as a,u as t,b_ as u,f as n,eB as m,cC as k}from"./outputWidgets.e1ef7566.js";import{A as C,a as g}from"./Text.d5ca2991.js";import{A as p}from"./index.5ef89a41.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[d]="5d263d26-3f17-4fbd-9c6a-df753c0179da",o._sentryDebugIdIdentifier="sentry-dbid-5d263d26-3f17-4fbd-9c6a-df753c0179da")}catch{}})();const I=b({__name:"Debugger",setup(o){async function d(){const f=await fetch("/_editor/api/debugger",{method:"GET"});if(!f.ok)throw new Error("Failed to check debugger connection");return await f.json()}async function i(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),_()}const c=h({connected:!1,port:0,is_launch_json_configured:!1});async function _(){c.value=await d()}let l=null;return w(()=>{l=setInterval(_,1e3)}),v(()=>{l&&clearInterval(l)}),(f,y)=>c.value.connected?(r(),s(t(u),{key:0,disabled:""},{default:e(()=>[a("VSCode connected")]),_:1})):(r(),s(t(k),{key:1},{content:e(()=>[n(t(p),{direction:"vertical"},{default:e(()=>[n(t(C),null,{default:e(()=>[a(" Abstra allows you to connect to your VSCode debugger ")]),_:1}),n(t(g),null,{default:e(()=>[a(" You're not connected ")]),_:1}),c.value.is_launch_json_configured?(r(),s(t(p),{key:0,direction:"vertical"},{default:e(()=>[n(t(g),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[a(m(c.value.port),1)]),_:1}),n(t(u),{href:"https://docs.abstra.io/debug/vscode",target:"_blank"},{default:e(()=>[a(" Learn how to connect to vscode ")]),_:1})]),_:1})):(r(),s(t(u),{key:1,onClick:i},{default:e(()=>[a("Configure launch.json")]),_:1}))]),_:1})]),default:e(()=>[n(t(u),null,{default:e(()=>[a("Connect to VSCode")]),_:1})]),_:1}))}});export{I as _};
//# sourceMappingURL=Debugger.vue_vue_type_script_setup_true_lang.207c7247.js.map
