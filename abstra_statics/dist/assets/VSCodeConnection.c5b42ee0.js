import{C as v}from"./ContentLayout.0216496c.js";import{u as w}from"./polling.eb4713b3.js";import{d as k,e as C,W as x,ag as S,c,w as e,o as f,b as o,aF as t,u as n,d9 as l,d7 as a,d8 as r,ec as _,bP as D}from"./vue-router.a2e43274.js";import{A as g}from"./index.bf133760.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[s]="13edb0d2-99c3-4916-b0b7-0046b25b66fc",u._sentryDebugIdIdentifier="sentry-dbid-13edb0d2-99c3-4916-b0b7-0046b25b66fc")}catch{}})();const I=k({__name:"VSCodeConnection",setup(u){async function s(){const i=await fetch("/_editor/api/debugger",{method:"GET"});if(!i.ok)throw new Error("Failed to check debugger connection");return await i.json()}async function p(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),b()}const d=C({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function b(){d.value=await s()}const{startPolling:h,endPolling:y}=w({task:b});return x(()=>h()),S(()=>y()),(i,m)=>(f(),c(v,null,{default:e(()=>[o(n(l),null,{default:e(()=>[t("VS Code")]),_:1}),o(n(g),{direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),o(n(r),{code:""},{default:e(()=>[t(_(d.value.root),1)]),_:1})]),_:1}),o(n(a),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),o(n(a),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(f(),c(n(g),{key:0,direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),o(n(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(_(d.value.port),1)]),_:1})]),_:1})):(f(),c(n(g),{key:1,direction:"vertical"},{default:e(()=>[o(n(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),o(n(D),{onClick:p},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),o(n(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),o(n(a),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),o(n(r),{code:""},{default:e(()=>[t(_(d.value.interpreter),1)]),_:1})]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),o(n(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),o(n(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),o(n(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{I as default};
//# sourceMappingURL=VSCodeConnection.c5b42ee0.js.map
