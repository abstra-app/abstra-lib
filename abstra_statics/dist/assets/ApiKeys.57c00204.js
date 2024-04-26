import{d as w,r as A,eE as _,J as k,b as x,ew as C,f as l,u as i,w as d,aE as h,eU as v,eS as P,as as y,eH as D}from"./outputWidgets.7dd23d3d.js";import{a as M}from"./asyncComputed.8f047c40.js";import"./router.55ae8196.js";import"./index.c33cd5e4.js";import{M as j}from"./member.cf76d687.js";import{A as p}from"./apiKey.2cc1f042.js";import{P as E}from"./project.ba3d0743.js";import{C as N}from"./CrudView.5a4776e3.js";import{A as T}from"./Paragraph.7df229fc.js";import{A as K}from"./Text.8f0caa1d.js";import{M as U}from"./Modal.5fb5fcda.js";import"./Form.9f41d3b4.js";import"./hasIn.7d5dcda7.js";import"./popupNotifcation.f54fc99f.js";import"./record.4544f931.js";import"./pubsub.692bcdfa.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e5b6cc98.js";import"./BookOutlined.ecab59cc.js";import"./url.6301f7e9.js";import"./index.8d63ab0d.js";import"./Title.0952eb37.js";import"./Base.4bf9624b.js";import"./index.a5cb16ca.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="b974c5ff-2bc1-4d20-8587-9e4e07113ceb",n._sentryDebugIdIdentifier="sentry-dbid-b974c5ff-2bc1-4d20-8587-9e4e07113ceb")}catch{}})();const se=w({__name:"ApiKeys",setup(n){const a=A(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),E.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:b},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(T),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.57c00204.js.map
