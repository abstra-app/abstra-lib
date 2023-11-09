import{d as B,r as D,ez as A,ey as C,u as e,b as c,c as d,w as a,f as u,aB as r,b_ as s,cB as I,cn as j,v as x}from"./outputWidgets.e1ef7566.js";import{W as P}from"./workspaces.8db5b540.js";import{l as p}from"./DocsButton.vue_vue_type_script_setup_true_lang.a95abf5a.js";import{p as R}from"./popupNotifcation.e9d5e0df.js";import{a as U}from"./asyncComputed.7df7ace6.js";import"./index.2ab10e7c.js";import{M as b}from"./transButton.8c2deff8.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[l]="6c5b00ee-007a-4e77-a1a6-83bda3421176",n._sentryDebugIdIdentifier="sentry-dbid-6c5b00ee-007a-4e77-a1a6-83bda3421176")}catch{}})();const M=B({__name:"LoginBlock",setup(n){const l="https://cloud.abstra.io/api-key?"+new URLSearchParams({redirect:location.href}),i=D(!1),{loading:f,result:t,refetch:y}=U(()=>p.get()),m=A(),h=C();function k(){const o=new URL(location.href);o.searchParams.delete("api-key"),h.replace(o.pathname+o.search)}function w(){var o;(o=t.value)!=null&&o.logged?b.success({title:"You're logged in!",content:"You can now deploy your project to Abstra Cloud."}):b.error({title:"Login failed",content:"Please try again. If the problem persists, contact help@abstra.io."})}const g=m.query["api-key"];typeof g=="string"&&p.create(g).then(y).then(k).then(w);async function v(){!t.value||(await p.delete(),y())}async function L(){if(!!t.value){i.value=!0;try{await P.deploy(),window.open(`https://cloud.abstra.io/projects/${t.value.logged&&t.value.project_id}/builds`,"_blank")}catch(o){R("Deploy failed",String(o))}i.value=!1}}return(o,E)=>{var _;return(_=e(t))!=null&&_.logged?(c(),d(e(j),{key:0},{default:a(()=>[u(e(s),{href:`https://cloud.abstra.io/projects/${e(t).project_id}`,target:"_blank"},{default:a(()=>[r(" Go to console ")]),_:1},8,["href"]),i.value?(c(),d(e(s),{key:1,loading:""},{default:a(()=>[r("Deploying")]),_:1})):(c(),d(e(I),{key:0,title:"Are you sure you want to deploy this project to Abstra Cloud?",onConfirm:L},{default:a(()=>[u(e(s),null,{default:a(()=>[r("Deploy")]),_:1})]),_:1})),u(e(s),{onClick:v},{default:a(()=>[r("Logout")]),_:1})]),_:1})):(c(),d(e(s),{key:1,href:l,loading:e(f),disabled:e(f)},{default:a(()=>[r(" Login to deploy ")]),_:1},8,["loading","disabled"]))}}});const $=x(M,[["__scopeId","data-v-a737d90d"]]);export{$ as L};
//# sourceMappingURL=LoginBlock.b379b103.js.map
