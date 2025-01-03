import{C as A}from"./CrudView.7acead7e.js";import{d as _,e as k,ea as x,f as v,o as C,Y as P,b as l,u as i,w as d,aS as h,dd as D,aG as f,de as M,e9 as N,cN as j,e_ as K,ep as T}from"./index.de630575.js";import{a as V}from"./asyncComputed.79f44c04.js";import{A as p}from"./apiKey.d789ca1c.js";import"./gateway.dc1ca1bd.js";import{M as B}from"./member.fabf6fe7.js";import{a as E}from"./project.d207a547.js";import"./tables.f560aa26.js";import"./router.94f6fd9a.js";import"./Badge.4f2dac36.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ff39f13a.js";import"./BookOutlined.b900553e.js";import"./url.703596b7.js";import"./PhDotsThreeVertical.vue.b21c03f8.js";import"./index.47ff6642.js";import"./index.7951fad5.js";import"./popupNotifcation.e48c3729.js";import"./record.85863f73.js";import"./string.a25ccb7b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="5aa64b75-207e-4f5f-99f8-1680b053cf9e",n._sentryDebugIdIdentifier="sentry-dbid-5aa64b75-207e-4f5f-99f8-1680b053cf9e")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),c=[{key:"name",label:"API key name"}],s=x().params.projectId,y=new B,{loading:g,result:I,refetch:u}=V(async()=>Promise.all([p.list(s),E.get(s).then(e=>y.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},w=v(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=I.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:c,create:b},null,8,["loading","table"]),l(i(j),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[f(N(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.b6d9e6f8.js.map
