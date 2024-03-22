import{d as w,r as b,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,eQ as h,ar as y,eD as P}from"./outputWidgets.0f64c0ca.js";import{i as D}from"./icons.c1d6ac8a.js";import{a as M}from"./asyncComputed.000b8070.js";import"./router.9f37cdbf.js";import"./index.a0d6977d.js";import{M as N}from"./member.c4c5c5ea.js";import{A as p}from"./apiKey.9002cd4f.js";import{P as T}from"./project.72661fc9.js";import{C as j}from"./CrudView.78dbda90.js";import{A as B}from"./Paragraph.1db8011f.js";import{A as K}from"./Text.5aa5a918.js";import{M as V}from"./Modal.2d283281.js";import"./Form.860c6110.js";import"./hasIn.aeec045b.js";import"./popupNotifcation.d6e14b07.js";import"./index.cf4c23b9.js";import"./record.20fd2b06.js";import"./pubsub.dc6b9ced.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6cd9cfb6.js";import"./url.0326eedc.js";import"./index.f01a2fca.js";import"./Title.9534048d.js";import"./Base.1eabb82b.js";import"./Typography.24ee99af.js";import"./index.52d657ec.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="7a369e86-e725-4a50-85c9-dcde15d8c026",n._sentryDebugIdIdentifier="sentry-dbid-7a369e86-e725-4a50-85c9-dcde15d8c026")}catch{}})();const le=w({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[y(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.a2692176.js.map
