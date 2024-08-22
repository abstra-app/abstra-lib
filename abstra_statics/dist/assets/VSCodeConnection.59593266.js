import{C as v}from"./ContentLayout.81ad2c3f.js";import{u as w}from"./polling.4cd72f79.js";import{d as k,e as C,V as x,a7 as S,c,w as e,o as f,b as o,ax as t,u as n,d5 as l,d3 as a,d4 as r,e6 as _,bL as V}from"./vue-router.8691855a.js";import{A as g}from"./index.e89afae5.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[s]="ae285c50-9f29-4709-8406-0f5f313b6efc",u._sentryDebugIdIdentifier="sentry-dbid-ae285c50-9f29-4709-8406-0f5f313b6efc")}catch{}})();const P=k({__name:"VSCodeConnection",setup(u){async function s(){const i=await fetch("/_editor/api/debugger",{method:"GET"});if(!i.ok)throw new Error("Failed to check debugger connection");return await i.json()}async function p(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),h()}const d=C({connected:!1,port:0,is_launch_json_configured:!1,interpreter:"",root:""});async function h(){d.value=await s()}const{startPolling:y,endPolling:b}=w({task:h});return x(()=>y()),S(()=>b()),(i,m)=>(f(),c(v,null,{default:e(()=>[o(n(l),null,{default:e(()=>[t("VS Code")]),_:1}),o(n(g),{direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t(" General settings to get the most out of Abstra + VS Code together ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Project folder")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to open your VS Code in this directory: "),o(n(r),{code:""},{default:e(()=>[t(_(d.value.root),1)]),_:1})]),_:1}),o(n(a),null,{default:e(()=>[t(" This is important for the next settings work properly ")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Extension")]),_:1}),o(n(a),null,{default:e(()=>[t(" You should install the python extension")]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Debugger")]),_:1}),d.value.is_launch_json_configured?(f(),c(n(g),{key:0,direction:"vertical"},{default:e(()=>[o(n(a),null,{default:e(()=>[t("Your debugger connection is configured")]),_:1}),o(n(r),{style:{"font-size":"24px"},copyable:"",code:""},{default:e(()=>[t(_(d.value.port),1)]),_:1})]),_:1})):(f(),c(n(g),{key:1,direction:"vertical"},{default:e(()=>[o(n(r),null,{default:e(()=>[t(" Your debugger connection is not configured ")]),_:1}),o(n(V),{onClick:p},{default:e(()=>[t("Configure launch.json")]),_:1})]),_:1})),o(n(l),{level:3},{default:e(()=>[t("Interpreter")]),_:1}),o(n(a),null,{default:e(()=>[t(" This is the current python interpreter running abstra: "),o(n(r),{code:""},{default:e(()=>[t(_(d.value.interpreter),1)]),_:1})]),_:1}),o(n(l),{level:3},{default:e(()=>[t("Default editor")]),_:1}),o(n(a),null,{default:e(()=>[t(" Make sure to set VS Code as default application for "),o(n(r),{code:""},{default:e(()=>[t("*.py")]),_:1}),t(", "),o(n(r),{code:""},{default:e(()=>[t("requirements.txt")]),_:1}),t(" and "),o(n(r),{code:""},{default:e(()=>[t(".env")]),_:1}),t(" files ")]),_:1})]),_:1})]),_:1}))}});export{P as default};
//# sourceMappingURL=VSCodeConnection.59593266.js.map
