import{d as b,r as A,f1 as _,y as k,b as x,eV as C,f as l,u as i,w as d,ay as v,fj as P,fd as h,cU as D,am as y,cV as M,f4 as j}from"./outputWidgets.1789f8c8.js";import{a as V}from"./asyncComputed.7bd05b92.js";import"./gateway.1c21f93b.js";import"./index.9b281827.js";import{M as N}from"./member.8117be29.js";import{A as p}from"./apiKey.9d4d891a.js";import{P as K}from"./project.ee056b9c.js";import{C as T}from"./CrudView.ef1410b5.js";import{M as U}from"./Modal.1346a243.js";import"./popupNotifcation.809a9bf1.js";import"./record.cc64da4a.js";import"./pubsub.6b578d09.js";import"./string.1336f283.js";import"./router.21b46f4e.js";import"./Form.8f9fa73b.js";import"./hasIn.d99e5ace.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8fd5d86e.js";import"./BookOutlined.d2dfaea6.js";import"./url.14e350e0.js";import"./index.afabd9f5.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="7f112698-3342-4225-8788-47a0328cdb79",n._sentryDebugIdIdentifier="sentry-dbid-7f112698-3342-4225-8788-47a0328cdb79")}catch{}})();const ae=b({__name:"ApiKeys",setup(n){const a=A(null),c=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:m}=V(async()=>Promise.all([p.list(s),K.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});m(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:h,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),m()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(v,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:c,onCreate:I},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.eef4376c.js.map
