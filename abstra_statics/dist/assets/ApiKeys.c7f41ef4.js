import{C as A}from"./CrudView.b82f2b00.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as f,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.d72204b4.js";import{a as V}from"./asyncComputed.96d925ba.js";import{A as c}from"./apiKey.90ad0421.js";import"./gateway.ab47259d.js";import{M as B}from"./member.156285fd.js";import{a as E}from"./project.5e2e8c62.js";import"./tables.c497f1d7.js";import"./router.50caf1e3.js";import"./Badge.61e4646d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f7b5eb04.js";import"./BookOutlined.ee9568bf.js";import"./url.22bb5778.js";import"./PhDotsThreeVertical.vue.37b784ce.js";import"./index.d10dad63.js";import"./index.38814052.js";import"./popupNotifcation.54c2c554.js";import"./record.12a5aba4.js";import"./string.ce17c88b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="5e5ffe16-0cb0-46db-8336-f45a1283ffc3",n._sentryDebugIdIdentifier="sentry-dbid-5e5ffe16-0cb0-46db-8336-f45a1283ffc3")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,y=new B,{loading:g,result:b,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>y.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},w=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[f(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.c7f41ef4.js.map
