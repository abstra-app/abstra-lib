import{d as A,e as b,eB as _,f as k,o as x,eu as C,b as l,u as i,w as d,aE as v,eV as P,eN as h,cQ as D,as as f,cR as M,eA as N,cu as j}from"./vue-router.1f4b1c24.js";import{a as V}from"./asyncComputed.335e7d63.js";import"./gateway.f4e667c2.js";import"./index.9c925377.js";import{M as B}from"./member.bd7f2c59.js";import{A as c}from"./apiKey.1eb5dd06.js";import{P as E}from"./project.26e88cd7.js";import{C as K}from"./CrudView.cd161fdc.js";import"./popupNotifcation.7bd199ca.js";import"./record.bedd37e3.js";import"./string.308574fb.js";import"./router.aefa2813.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0e19bf33.js";import"./BookOutlined.1d2fea93.js";import"./url.634d17c0.js";import"./index.4fa3c0a8.js";import"./index.ebd4b3d4.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="54f58512-e042-447f-a901-855c2ef4bf0f",n._sentryDebugIdIdentifier="sentry-dbid-54f58512-e042-447f-a901-855c2ef4bf0f")}catch{}})();const ee=A({__name:"ApiKeys",setup(n){const a=b(null),u=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:p}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>B.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});p(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:h,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),p()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(v,null,[l(K,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:u,onCreate:I},null,8,["loading","table"]),l(i(j),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[f(N(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ee as default};
//# sourceMappingURL=ApiKeys.eb481e83.js.map
