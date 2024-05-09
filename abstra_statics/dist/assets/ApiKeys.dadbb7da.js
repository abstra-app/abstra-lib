import{d as w,r as A,eE as _,J as k,b as x,ew as C,f as l,u as i,w as d,aE as h,eU as v,eS as P,as as y,eH as D}from"./outputWidgets.c3ee551f.js";import{a as M}from"./asyncComputed.4114f461.js";import"./router.18bd2c01.js";import"./index.5a128e43.js";import{M as j}from"./member.4420cf2a.js";import{A as p}from"./apiKey.8cf28b06.js";import{P as E}from"./project.4baf7058.js";import{C as N}from"./CrudView.595e58bf.js";import{A as T}from"./Paragraph.c8128976.js";import{A as K}from"./Text.294d3e39.js";import{M as U}from"./Modal.a620fbc9.js";import"./Form.b156c688.js";import"./hasIn.72a7d98b.js";import"./popupNotifcation.e158f52f.js";import"./record.c306734b.js";import"./pubsub.ab0201c0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9102d5d5.js";import"./BookOutlined.6e0ab7e8.js";import"./url.a3857130.js";import"./index.9fa50e04.js";import"./Title.a3c129e5.js";import"./Base.22df74fd.js";import"./index.1f55aa42.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="14f3ed00-8e19-47fb-a746-a1bda3b8da74",n._sentryDebugIdIdentifier="sentry-dbid-14f3ed00-8e19-47fb-a746-a1bda3b8da74")}catch{}})();const se=w({__name:"ApiKeys",setup(n){const a=A(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=M(async()=>Promise.all([p.list(s),E.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var c;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(c=r==null?void 0:r.email)!=null?c:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:b},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(T),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.dadbb7da.js.map
