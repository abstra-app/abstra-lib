import{C as A}from"./CrudView.584de984.js";import{d as _,e as k,ea as x,f as v,o as C,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eI as K,eo as T}from"./index.3b97d6d5.js";import{a as V}from"./asyncComputed.d57a37fa.js";import{A as c}from"./apiKey.53b8557d.js";import"./gateway.3566cb4c.js";import{M as B}from"./member.b5bf2f7a.js";import{a as E}from"./project.af611658.js";import"./tables.93e32252.js";import"./router.0535baf1.js";import"./Badge.251df6e7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c57d5351.js";import"./BookOutlined.8de5b1e5.js";import"./url.802228fb.js";import"./PhDotsThreeVertical.vue.72df4f91.js";import"./index.65a10ed1.js";import"./index.6cb3df90.js";import"./popupNotifcation.44c3fcc0.js";import"./record.861d4b96.js";import"./string.ebac8c3b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="2ea74f84-8657-405d-89b7-d13cdc9c986a",n._sentryDebugIdIdentifier="sentry-dbid-2ea74f84-8657-405d-89b7-d13cdc9c986a")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:I,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},w=v(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=I.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:b},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.d7175a4b.js.map
