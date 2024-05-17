import{d as A,r as b,eE as _,J as k,b as x,ew as C,f as l,u as i,w as d,aE as h,eU as v,eS as P,as as y,eH as D}from"./outputWidgets.6fa937e8.js";import{a as M}from"./asyncComputed.2efa6345.js";import"./router.7280623c.js";import"./index.cb8506f7.js";import{M as j}from"./member.db85a7c8.js";import{A as p}from"./apiKey.11b9ad3d.js";import{P as E}from"./project.fbd08084.js";import{C as N}from"./CrudView.ae9af4ed.js";import{A as T}from"./Paragraph.47e05b0e.js";import{A as K}from"./Text.cdfb5d38.js";import{M as U}from"./Modal.21b8b2b8.js";import"./Form.aac49e1e.js";import"./hasIn.9f9bff8d.js";import"./popupNotifcation.90dd819f.js";import"./record.abf4ce8f.js";import"./pubsub.0011874d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0ff54c71.js";import"./BookOutlined.c67d3dce.js";import"./url.de8fbff1.js";import"./index.b70fd8d3.js";import"./Title.ecf9f632.js";import"./Base.f7e3c4b9.js";import"./index.fb72c772.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="b3f7884e-38d1-4d1a-9a36-38d2152d52c6",n._sentryDebugIdIdentifier="sentry-dbid-b3f7884e-38d1-4d1a-9a36-38d2152d52c6")}catch{}})();const se=A({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),E.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:m,onCreate:I},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(T),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.dd96926d.js.map
