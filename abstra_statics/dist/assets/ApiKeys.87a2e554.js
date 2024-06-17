import{d as A,r as b,f1 as _,y as k,b as x,eV as C,f as l,u as i,w as d,ay as v,fj as P,fd as h,cU as D,am as y,cV as M,f4 as j}from"./outputWidgets.762923b6.js";import{a as V}from"./asyncComputed.1bd8db1f.js";import"./gateway.6c4fed37.js";import"./index.5f6c1ccf.js";import{M as N}from"./member.b7f812a1.js";import{A as c}from"./apiKey.5389a738.js";import{P as K}from"./project.b0351f9d.js";import{C as T}from"./CrudView.959480c7.js";import{M as U}from"./Modal.912ee887.js";import"./popupNotifcation.a288624c.js";import"./record.ac9412c3.js";import"./pubsub.fdea85b7.js";import"./string.a08f3e31.js";import"./router.3f349b4d.js";import"./Form.85226be7.js";import"./hasIn.4457547a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3648b852.js";import"./BookOutlined.f707b298.js";import"./url.7fdcb4d8.js";import"./index.7cc9f448.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="195f47e5-449d-4194-a97c-22c55a85e6d3",n._sentryDebugIdIdentifier="sentry-dbid-195f47e5-449d-4194-a97c-22c55a85e6d3")}catch{}})();const ae=A({__name:"ApiKeys",setup(n){const a=b(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:m}=V(async()=>Promise.all([c.list(s),K.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});m(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:h,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),m()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(v,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,onCreate:I},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.87a2e554.js.map
