import{d as y,r as h,o as w,K as v,b as d,c as s,w as e,aA as a,u as t,b$ as u,f as n,cK as g,eD as k,cG as m}from"./outputWidgets.969742a9.js";import{a as C,b}from"./Text.104ae35a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[c]="68900faf-1868-41a5-b425-2d714b04aaee",o._sentryDebugIdIdentifier="sentry-dbid-68900faf-1868-41a5-b425-2d714b04aaee")}catch{}})();const I=y({__name:"Debugger",setup(o){async function c(){const i=await fetch("/_editor/api/debugger",{method:"GET"});if(!i.ok)throw new Error("Failed to check debugger connection");return await i.json()}async function f(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),_()}const r=h({connected:!1,port:0,is_launch_json_configured:!1});async function _(){r.value=await c()}let l=null;return w(()=>{l=setInterval(_,1e3)}),v(()=>{l&&clearInterval(l)}),(i,p)=>r.value.connected?(d(),s(t(u),{key:0,disabled:""},{default:e(()=>[a("VSCode connected")]),_:1})):(d(),s(t(m),{key:1},{content:e(()=>[n(t(g),{direction:"vertical"},{default:e(()=>[n(t(C),null,{default:e(()=>[a(" Abstra allows you to connect to your VSCode debugger ")]),_:1}),n(t(b),null,{default:e(()=>[a(" You're not connected ")]),_:1}),r.value.is_launch_json_configured?(d(),s(t(g),{key:0,direction:"vertical"},{default:e(()=>[n(t(b),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[a(k(r.value.port),1)]),_:1}),n(t(u),{href:"https://docs.abstra.io/debug/vscode",target:"_blank"},{default:e(()=>[a(" Learn how to connect to vscode ")]),_:1})]),_:1})):(d(),s(t(u),{key:1,onClick:f},{default:e(()=>[a("Configure launch.json")]),_:1}))]),_:1})]),default:e(()=>[n(t(u),null,{default:e(()=>[a("Connect to VSCode")]),_:1})]),_:1}))}});export{I as _};
//# sourceMappingURL=Debugger.vue_vue_type_script_setup_true_lang.e64050d0.js.map
