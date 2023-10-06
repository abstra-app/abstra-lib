import{d as L,r as v,b as u,et as P,u as a,c,w as o,f as s,aJ as r,c4 as p,cH as A,ct as N,cz as D,ew as C,bg as T,eD as E,eE as S,e as U,x as B}from"./outputWidgets.6d878336.js";import{W as K}from"./workspaces.f0937796.js";import{l as f}from"./DocsButton.vue_vue_type_script_setup_true_lang.ff363d27.js";import{p as M}from"./popupNotifcation.e8c15d84.js";import{a as O}from"./asyncComputed.f4e8f601.js";import{A as x}from"./index.4179d6a8.js";import{A as j,M as F}from"./Title.7777f40a.js";import"./index.ddda7671.js";import{F as V}from"./Form.9dbabc14.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[d]="d26045c5-4932-4d24-8f34-b8d79a09dc34",t._sentryDebugIdIdentifier="sentry-dbid-d26045c5-4932-4d24-8f34-b8d79a09dc34")}catch{}})();const G=t=>(E("data-v-5c1cce26"),t=t(),S(),t),W=G(()=>U("a",{href:"https://cloud.abstra.io",target:"_blank"},"cloud.abstra.io",-1)),$=L({__name:"LoginBlock",setup(t){const d=v(!1),e=v({state:"CLOSED"}),{loading:g,result:i,refetch:_}=O(()=>f.get());function m(){e.value={state:"INPUT",apiKey:"",loading:!1}}function I(){e.value={state:"CLOSED"}}async function b(){if(e.value.state!=="INPUT")return;const l=e.value.apiKey;try{e.value={state:"INPUT",apiKey:l,loading:!0};const n=await f.create(l);n.logged?(e.value={state:"CLOSED"},_()):n.reason==="INVALID_API_TOKEN"?e.value={state:"INPUT",apiKey:l,errorMessage:"Invalid API Token",loading:!1}:n.reason==="NO_API_TOKEN"?e.value={state:"INPUT",apiKey:l,errorMessage:"No API Token provided",loading:!1}:e.value={state:"INPUT",apiKey:l,errorMessage:"Unknown error",loading:!1}}catch(n){e.value={state:"INPUT",apiKey:l,errorMessage:String(n),loading:!1}}}async function k(){!i.value||(await f.delete(),_())}async function w(){if(!!i.value){d.value=!0;try{await K.deploy(),window.open(`https://cloud.abstra.io/projects/${i.value.logged&&i.value.project_id}/builds`,"_blank")}catch(l){M("Deploy failed",String(l))}d.value=!1}}return(l,n)=>{var y;return u(),P(T,null,[(y=a(i))!=null&&y.logged?(u(),c(a(N),{key:0},{default:o(()=>[s(a(p),{href:`https://cloud.abstra.io/projects/${a(i).project_id}`,target:"_blank"},{default:o(()=>[r("Go to console ")]),_:1},8,["href"]),d.value?(u(),c(a(p),{key:1,loading:""},{default:o(()=>[r("Deploying")]),_:1})):(u(),c(a(A),{key:0,title:"Are you sure you want to deploy this project to Abstra Cloud?",onConfirm:w},{default:o(()=>[s(a(p),null,{default:o(()=>[r("Deploy")]),_:1})]),_:1})),s(a(p),{onClick:k},{default:o(()=>[r("Logout")]),_:1})]),_:1})):(u(),c(a(p),{key:1,loading:a(g),disabled:a(g),onClick:m},{default:o(()=>[r("Login to deploy")]),_:1},8,["loading","disabled"])),s(a(F),{open:e.value.state!=="CLOSED",title:"Login","confirm-loading":e.value.state!=="CLOSED"&&e.value.loading,onCancel:I,onOk:b},{default:o(()=>[e.value.state==="INPUT"?(u(),c(a(V),{key:0,layout:"vertical"},{default:o(()=>[s(a(x),null,{default:o(()=>[r(" Login to our console at "),W,r(" and get an API Key to deploy your Projects. ")]),_:1}),s(a(j),{label:"API Key",help:e.value.errorMessage,"validate-status":e.value.errorMessage&&"error"},{default:o(()=>[s(a(D),{value:e.value.apiKey,"onUpdate:value":n[0]||(n[0]=h=>e.value.apiKey=h),disabled:e.value.loading},null,8,["value","disabled"])]),_:1},8,["help","validate-status"])]),_:1})):C("",!0)]),_:1},8,["open","confirm-loading"])],64)}}});const ee=B($,[["__scopeId","data-v-5c1cce26"]]);export{ee as L};
//# sourceMappingURL=LoginBlock.81989eb7.js.map
