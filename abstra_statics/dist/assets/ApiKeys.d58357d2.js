import{C as A}from"./CrudView.6cf4d61e.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.43e493da.js";import{a as V}from"./asyncComputed.7a3a32a5.js";import{A as p}from"./apiKey.3c86f593.js";import"./gateway.6fd495e2.js";import{M as B}from"./member.381ebf4a.js";import{a as E}from"./project.ecd7802d.js";import"./tables.398843bd.js";import"./router.fcf57198.js";import"./Badge.8e4666b0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2d0d4eb6.js";import"./BookOutlined.8ec4ffd1.js";import"./url.affe4585.js";import"./PhDotsThreeVertical.vue.9282b3e2.js";import"./index.8031feac.js";import"./index.94d2ea88.js";import"./popupNotifcation.fe222321.js";import"./record.7875e700.js";import"./string.93875efd.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="efad0e61-b884-4281-86a1-2b871fbd0351",n._sentryDebugIdIdentifier="sentry-dbid-efad0e61-b884-4281-86a1-2b871fbd0351")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),c=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:b,result:g,refetch:u}=V(async()=>Promise.all([p.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},w=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(b),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:c,create:I},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.d58357d2.js.map
