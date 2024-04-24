import{d as A,r as b,eE as _,J as k,b as x,ew as C,f as l,u as i,w as d,aE as h,eU as v,eS as P,as as y,eH as D}from"./outputWidgets.7250f034.js";import{a as M}from"./asyncComputed.03680468.js";import"./router.26c23698.js";import"./index.65bc4fe4.js";import{M as j}from"./member.c38d3e06.js";import{A as p}from"./apiKey.d78609d3.js";import{P as E}from"./project.8ee2b360.js";import{C as N}from"./CrudView.46307b1e.js";import{A as T}from"./Paragraph.1b5db281.js";import{A as K}from"./Text.c39e2b03.js";import{M as U}from"./Modal.67b47861.js";import"./Form.06a4f839.js";import"./hasIn.042d0c87.js";import"./popupNotifcation.478bb57d.js";import"./record.5d048f41.js";import"./pubsub.a65a175e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.542c3b73.js";import"./BookOutlined.f2d46935.js";import"./url.1ce119bf.js";import"./index.b63ed3a3.js";import"./Title.2df51250.js";import"./Base.a1fd4e38.js";import"./index.59b5a763.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="0d58498d-aac0-48c0-8471-195114349976",n._sentryDebugIdIdentifier="sentry-dbid-0d58498d-aac0-48c0-8471-195114349976")}catch{}})();const se=A({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),E.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:m,onCreate:I},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(T),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.3b09df3f.js.map
