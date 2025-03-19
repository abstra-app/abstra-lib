import{C as b}from"./CrudView.02c28fb9.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.f642553c.js";import{a as V}from"./asyncComputed.47ff725c.js";import{A as p}from"./apiKey.cef5d9b7.js";import"./gateway.d1732116.js";import{M as B}from"./member.daa978c0.js";import{a as E}from"./project.5bd3569c.js";import"./tables.80f07e68.js";import"./router.cd0be8d6.js";import"./Badge.7cb0aad6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.deb30b56.js";import"./BookOutlined.4710a705.js";import"./url.805125a0.js";import"./PhDotsThreeVertical.vue.c5095cdb.js";import"./index.1e400325.js";import"./index.3b613af3.js";import"./popupNotifcation.040c54ab.js";import"./record.f177349f.js";import"./string.df9f642e.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="6065f182-593e-49e0-a295-fa1711c10811",n._sentryDebugIdIdentifier="sentry-dbid-6065f182-593e-49e0-a295-fa1711c10811")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),c=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:I,refetch:u}=V(async()=>Promise.all([p.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),w=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},A=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=I.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(b,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:c,create:w},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.d2fe9e5e.js.map
