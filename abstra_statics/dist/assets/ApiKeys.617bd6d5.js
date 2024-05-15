import{d as w,r as A,eE as _,J as k,b as x,ew as C,f as l,u as i,w as d,aE as h,eU as v,eS as P,as as f,eH as D}from"./outputWidgets.456f91fe.js";import{a as M}from"./asyncComputed.40ccc1a0.js";import"./router.3f9a5280.js";import"./index.d03863d1.js";import{M as j}from"./member.ab83e55a.js";import{A as p}from"./apiKey.3c81289e.js";import{P as E}from"./project.44c2a316.js";import{C as N}from"./CrudView.71a9fa9d.js";import{A as T}from"./Paragraph.40860d19.js";import{A as K}from"./Text.45bbb15e.js";import{M as U}from"./Modal.7e5e37b6.js";import"./Form.5725f9a2.js";import"./hasIn.73fe7ed5.js";import"./popupNotifcation.a3dda4d3.js";import"./record.f036d116.js";import"./pubsub.c5b25f3b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.41d18658.js";import"./BookOutlined.7cb20358.js";import"./url.25ef260e.js";import"./index.11617ce9.js";import"./Title.e2ac9093.js";import"./Base.32dca6a0.js";import"./index.37fcc072.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="f2fb41a0-0487-4d7d-9401-b084e2eaabfe",n._sentryDebugIdIdentifier="sentry-dbid-f2fb41a0-0487-4d7d-9401-b084e2eaabfe")}catch{}})();const se=w({__name:"ApiKeys",setup(n){const a=A(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:u}=M(async()=>Promise.all([p.list(s),E.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var c;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(c=r==null?void 0:r.email)!=null?c:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:b},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(T),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[f(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.617bd6d5.js.map
