import{C as A}from"./CrudView.408a4461.js";import{d as _,e as k,ea as x,f as P,o as v,Y as C,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eI as K,ep as T}from"./index.0f630b70.js";import{a as V}from"./asyncComputed.2bec113c.js";import{A as c}from"./apiKey.d4ece619.js";import"./gateway.50cd3949.js";import{M as B}from"./member.60d3de62.js";import{P as E}from"./project.79269899.js";import"./tables.78c50568.js";import"./router.0f31f3f1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bf268869.js";import"./BookOutlined.89f2a8c6.js";import"./url.90c69b58.js";import"./PhDotsThreeVertical.vue.e2e73559.js";import"./Badge.ada44968.js";import"./index.1eaf0cd2.js";import"./popupNotifcation.dd76a56c.js";import"./record.f729e500.js";import"./string.532e13bb.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="c174d8a6-8d1d-4862-942e-42a78a7b3faa",n._sentryDebugIdIdentifier="sentry-dbid-c174d8a6-8d1d-4862-942e-42a78a7b3faa")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const o=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:I,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),b=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},w=P(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=I.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:K(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),C(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:b},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.b2864280.js.map
