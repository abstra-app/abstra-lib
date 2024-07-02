import{d as b,r as A,eC as C,K as P,b as _,eu as k,f as l,u as d,w as i,aD as x,eU as v,eP as h,cP as D,ar as y,cQ as M,eG as j,ct as K}from"./vue-router.4490dbb9.js";import{a as N}from"./asyncComputed.2c959e2d.js";import"./gateway.58285849.js";import"./index.d6f5efd8.js";import{M as T}from"./member.bcc86a3f.js";import{A as c}from"./apiKey.4697f2e0.js";import{P as U}from"./project.c652ebea.js";import{C as V}from"./CrudView.618e4d2d.js";import"./popupNotifcation.8bac2a75.js";import"./record.012acb3c.js";import"./string.37a04027.js";import"./router.4ba29f8c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d66aa7b9.js";import"./BookOutlined.b1930c6a.js";import"./url.04d89d54.js";import"./index.73a21444.js";import"./index.1177ba14.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="6dc2ed29-ad99-474e-9104-4bffd1cd88a8",n._sentryDebugIdIdentifier="sentry-dbid-6dc2ed29-ad99-474e-9104-4bffd1cd88a8")}catch{}})();const ee=b({__name:"ApiKeys",setup(n){const o=A(null),p=[{key:"name",label:"API key name"}],s=C().params.projectId,{loading:f,result:g,refetch:u}=N(async()=>Promise.all([c.list(s),U.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},w=P(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:v(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:h,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(_(),k(x,null,[l(V,{"entity-name":"API key","create-button-text":"Create API Key",loading:d(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,onCreate:I},null,8,["loading","table"]),l(d(K),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:i(()=>[]),default:i(()=>[l(d(D),null,{default:i(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(d(M),{code:"",copyable:""},{default:i(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ee as default};
//# sourceMappingURL=ApiKeys.959d36d0.js.map
