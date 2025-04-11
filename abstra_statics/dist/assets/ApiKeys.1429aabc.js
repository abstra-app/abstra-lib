import{C as A}from"./CrudView.abec7dee.js";import{d as _,e as k,ec as x,f as v,o as C,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,ea as j,cL as N,eM as K,eq as T}from"./index.ed5876d6.js";import{a as V}from"./asyncComputed.ef6b106a.js";import{A as c}from"./apiKey.17d9c0ec.js";import"./gateway.0da9f723.js";import{M as B}from"./member.ca9e7ae3.js";import{a as E}from"./project.afff710d.js";import"./tables.310dfb41.js";import"./router.a3f3262c.js";import"./Badge.0d76d0e0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.cfdcb975.js";import"./BookOutlined.1d0028e4.js";import"./url.28c9d07b.js";import"./PhDotsThreeVertical.vue.e3192744.js";import"./index.2e72325a.js";import"./index.71c666ad.js";import"./popupNotifcation.cf9b894a.js";import"./record.4267e1e3.js";import"./string.1ab10e12.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="963bd0b6-0797-496e-b249-a069ef1e78c1",n._sentryDebugIdIdentifier="sentry-dbid-963bd0b6-0797-496e-b249-a069ef1e78c1")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:b,result:g,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},w=v(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(b),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.1429aabc.js.map
