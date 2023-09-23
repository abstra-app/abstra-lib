import{d as b,r as k,u as e,b as s,c as l,bP as m,w as o,f as u,b0 as c,cb as d,cM as w,cy as h,v}from"./registerWidgets.32a97516.js";import{W as L}from"./workspaces.5df11ee4.js";import{L as f}from"./DocsButton.vue_vue_type_script_setup_true_lang.25cff74e.js";import{p as I}from"./popupNotifcation.70b10846.js";import{a as D}from"./asyncComputed.9b3e19e4.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="5ee1444a-6d17-4aa3-ab0e-4ab867ae3f58",n._sentryDebugIdIdentifier="sentry-dbid-5ee1444a-6d17-4aa3-ab0e-4ab867ae3f58")}catch{}})();const B=b({__name:"LoginBlock",setup(n){const t=k(!1),{loading:i,result:a,refetch:p}=D(()=>f.get());async function y(){const r=prompt(`Login to our console at https://cloud.abstra.io and get an API Key to deploy your Projects.

Enter your API Key here:`);!r||(await f.create(r),p())}async function _(){!a.value||(await a.value.delete(),p())}async function g(){if(!!a.value){t.value=!0;try{await L.deploy(),window.open(`https://cloud.abstra.io/projects/${a.value.projectId}/builds`,"_blank")}catch(r){I("Deploy failed",String(r))}t.value=!1}}return(r,C)=>e(i)?(s(),l(e(m),{key:0})):e(a)?(s(),l(e(h),{key:1},{default:o(()=>[u(e(d),{href:`https://cloud.abstra.io/projects/${e(a).projectId}`,target:"_blank"},{default:o(()=>[c("Go to console ")]),_:1},8,["href"]),t.value?(s(),l(e(d),{key:1},{default:o(()=>[c("Deploying ...")]),_:1})):(s(),l(e(w),{key:0,title:"Are you sure you want to deploy this project to Abstra Cloud?",onConfirm:g},{default:o(()=>[u(e(d),null,{default:o(()=>[c("Deploy")]),_:1})]),_:1})),u(e(d),{onClick:_},{default:o(()=>[c("Logout")]),_:1})]),_:1})):(s(),l(e(d),{key:2,onClick:y},{default:o(()=>[c("Login to deploy")]),_:1}))}});const M=v(B,[["__scopeId","data-v-227d4310"]]);export{M as L};
//# sourceMappingURL=LoginBlock.ade00dc0.js.map
