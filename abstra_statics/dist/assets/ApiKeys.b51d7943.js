import{d as w,e as A,ed as _,f as k,X as x,b as l,u as i,w as d,aR as v,o as C,d7 as P,aF as y,d8 as h,ec as D,cH as M,eJ as j,er as N}from"./vue-router.761e79a7.js";import{a as K}from"./asyncComputed.b34ed11e.js";import{A as c}from"./apiKey.093a4524.js";import"./gateway.8391c675.js";import{M as T}from"./member.c889b251.js";import{P as V}from"./project.53b03555.js";import"./tables.432c4f2b.js";import{C as B}from"./CrudView.08ec9d8a.js";import"./popupNotifcation.7a4abfdb.js";import"./record.8a2e184a.js";import"./string.27ddc80e.js";import"./router.2bc27e21.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.087c656a.js";import"./BookOutlined.7cdad3ea.js";import"./url.a2dc4bb4.js";import"./PhDotsThreeVertical.vue.682800f0.js";import"./Badge.dc691113.js";import"./index.3e6ca4f1.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="9c91cd1f-14c2-4293-9bfd-25b3dca2b667",n._sentryDebugIdIdentifier="sentry-dbid-9c91cd1f-14c2-4293-9bfd-25b3dca2b667")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const a=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:j(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),x(v,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:p,create:b},null,8,["loading","table"]),l(i(M),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(P),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(h),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.b51d7943.js.map
