import{d as A,r as b,eE as _,J as k,b as x,ew as C,f as l,u as i,w as d,aE as h,eU as v,eS as P,as as y,eH as D}from"./outputWidgets.2c936b33.js";import{a as M}from"./asyncComputed.b227690c.js";import"./router.9a76cc66.js";import"./index.bd2be0a2.js";import{M as j}from"./member.d0e3fbae.js";import{A as p}from"./apiKey.d4566035.js";import{P as E}from"./project.d028a339.js";import{C as N}from"./CrudView.b9ba563d.js";import{A as T}from"./Paragraph.51f31516.js";import{A as K}from"./Text.a2f30647.js";import{M as U}from"./Modal.17cdde78.js";import"./Form.b5e24132.js";import"./hasIn.85b27717.js";import"./popupNotifcation.a42892dc.js";import"./record.210736c4.js";import"./pubsub.4c454988.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.dd7fbd1a.js";import"./BookOutlined.31cb7ffb.js";import"./url.a282f1d5.js";import"./index.18754ce2.js";import"./Title.6affb5db.js";import"./Base.7b44942c.js";import"./index.f0d39170.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="907a38db-408f-44c5-9af3-0d56d9676026",n._sentryDebugIdIdentifier="sentry-dbid-907a38db-408f-44c5-9af3-0d56d9676026")}catch{}})();const se=A({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),E.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:m,onCreate:I},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(T),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.5adaa11b.js.map
