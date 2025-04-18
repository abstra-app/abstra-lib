import{C as A}from"./CrudView.06083adb.js";import{d as _,e as k,ef as x,f as v,o as C,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,ea as N,cL as j,eN as K,er as T}from"./index.2fc74dd1.js";import{a as V}from"./asyncComputed.824b6048.js";import{A as c}from"./apiKey.44b179d2.js";import"./gateway.5ba60833.js";import{M as B}from"./member.d68dce6f.js";import{a as E}from"./project.8a6e5d4b.js";import"./tables.0a3b3c90.js";import"./router.5a7fde00.js";import"./Badge.01cfb048.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7da8c51b.js";import"./BookOutlined.9a619a88.js";import"./url.6e6d4fc2.js";import"./PhDotsThreeVertical.vue.6da65d7c.js";import"./index.9bef3060.js";import"./index.c6077bb0.js";import"./popupNotifcation.fa876393.js";import"./record.66ed9723.js";import"./string.a2bdfae1.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="b957dd2e-88e0-4a80-ac47-7d1e2361cdfb",n._sentryDebugIdIdentifier="sentry-dbid-b957dd2e-88e0-4a80-ac47-7d1e2361cdfb")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:b,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},w=v(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(j),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(N(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.0d0aed4d.js.map
