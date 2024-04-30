import{d as A,r as b,eE as _,J as k,b as x,ew as C,f as l,u as i,w as d,aE as h,eU as v,eS as P,as as y,eH as D}from"./outputWidgets.f5ba2323.js";import{a as M}from"./asyncComputed.5f5ea003.js";import"./router.fe894852.js";import"./index.bc0e6e47.js";import{M as j}from"./member.4816fe4a.js";import{A as p}from"./apiKey.8279e65b.js";import{P as E}from"./project.f1be77f9.js";import{C as N}from"./CrudView.bc8e557e.js";import{A as T}from"./Paragraph.ce0caa03.js";import{A as K}from"./Text.f641a2d6.js";import{M as U}from"./Modal.fb8afa74.js";import"./Form.ed28d0df.js";import"./hasIn.1bb5fe48.js";import"./popupNotifcation.65e9e0a6.js";import"./record.166bf930.js";import"./pubsub.de391e8b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4d28a6b1.js";import"./BookOutlined.4ada3bfa.js";import"./url.8ace32ac.js";import"./index.48271178.js";import"./Title.c4ac1775.js";import"./Base.2adca053.js";import"./index.350ecbbe.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="d181aca2-4fe4-4930-833d-4e9e303a0733",n._sentryDebugIdIdentifier="sentry-dbid-d181aca2-4fe4-4930-833d-4e9e303a0733")}catch{}})();const se=A({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),E.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:m,onCreate:I},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(T),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.16af2da9.js.map
