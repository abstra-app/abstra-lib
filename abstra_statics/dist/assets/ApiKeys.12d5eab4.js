import{C as A}from"./CrudView.d389ccbc.js";import{d as _,e as k,ea as x,f as v,o as C,Y as P,b as l,u as i,w as d,aS as h,dd as D,aG as y,de as M,e9 as N,cN as j,e_ as K,ep as T}from"./index.aaa5ea50.js";import{a as V}from"./asyncComputed.b796d4e5.js";import{A as c}from"./apiKey.e307579a.js";import"./gateway.ca8f9e95.js";import{M as B}from"./member.dd84b8b7.js";import{a as E}from"./project.e481756e.js";import"./tables.d7f10cb2.js";import"./router.e7a97bc1.js";import"./Badge.f28ece3a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6164294d.js";import"./BookOutlined.716b021c.js";import"./url.8dd8ad4c.js";import"./PhDotsThreeVertical.vue.ceec6acf.js";import"./index.c1fd0d5a.js";import"./index.ac02b15d.js";import"./popupNotifcation.cee72ce4.js";import"./record.3b51fd54.js";import"./string.2dfb3834.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="58cf87c7-b044-4eeb-9b78-07cf138e1479",n._sentryDebugIdIdentifier="sentry-dbid-58cf87c7-b044-4eeb-9b78-07cf138e1479")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:b,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},w=v(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(j),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(N(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.12d5eab4.js.map
