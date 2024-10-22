import{d as w,e as A,ed as _,f as k,X as x,b as l,u as i,w as d,aR as v,o as C,d7 as P,aF as y,d8 as h,ec as D,cH as M,eJ as j,er as N}from"./vue-router.27f33804.js";import{a as K}from"./asyncComputed.aea712fd.js";import{A as c}from"./apiKey.e6b166aa.js";import"./gateway.fb29fd93.js";import{M as T}from"./member.c9b5ab88.js";import{P as V}from"./project.3d173e65.js";import"./tables.1ebdcf04.js";import{C as B}from"./CrudView.1c1445f7.js";import"./popupNotifcation.9f19c28e.js";import"./record.5868fbe8.js";import"./string.1845dc76.js";import"./router.00159154.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8c17c4d5.js";import"./BookOutlined.f998c13f.js";import"./url.cd5a1677.js";import"./PhDotsThreeVertical.vue.8c3e0cdb.js";import"./Badge.d41d9583.js";import"./index.3f6df8b2.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="033a87e5-7550-46fa-8a8b-01bcee19f424",n._sentryDebugIdIdentifier="sentry-dbid-033a87e5-7550-46fa-8a8b-01bcee19f424")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const o=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:j(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),x(v,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:p,create:I},null,8,["loading","table"]),l(i(M),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(P),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(h),{code:"",copyable:""},{default:d(()=>[y(D(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.f507b936.js.map
