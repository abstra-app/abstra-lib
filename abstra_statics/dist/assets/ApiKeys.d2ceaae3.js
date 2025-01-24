import{C as A}from"./CrudView.d9c6841f.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as c,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.e38040c8.js";import{a as V}from"./asyncComputed.92d1924c.js";import{A as d}from"./apiKey.8fe00c08.js";import"./gateway.98631429.js";import{M as B}from"./member.53bd7cde.js";import{a as E}from"./project.ee2726e2.js";import"./tables.63df2bd6.js";import"./router.0cb10d18.js";import"./Badge.a4da4a0c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a04fadc9.js";import"./BookOutlined.e876f54c.js";import"./url.2544de04.js";import"./PhDotsThreeVertical.vue.f47fe248.js";import"./index.a27f6cc4.js";import"./index.7044000f.js";import"./popupNotifcation.9ff4d240.js";import"./record.45045ec1.js";import"./string.b73f517b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="9bc3316a-c1be-43cf-81f7-58048f8c0901",n._sentryDebugIdIdentifier="sentry-dbid-9bc3316a-c1be-43cf-81f7-58048f8c0901")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:b,refetch:u}=V(async()=>Promise.all([d.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await d.create({projectId:s,name:e.name});u(),a.value=t.value},w=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await d.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:c(()=>[]),default:c(()=>[l(i(D),null,{default:c(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:c(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.d2ceaae3.js.map
