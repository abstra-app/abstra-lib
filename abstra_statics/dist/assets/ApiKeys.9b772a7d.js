import{d as w,r as A,f1 as _,y as k,b as x,eV as C,f as l,u as i,w as d,ay as v,fj as P,fd as h,cU as D,am as f,cV as M,f4 as j}from"./outputWidgets.e875cc52.js";import{a as V}from"./asyncComputed.1bd921ff.js";import"./gateway.e7ede1fb.js";import"./index.6d16075e.js";import{M as N}from"./member.c1736278.js";import{A as p}from"./apiKey.076eadfb.js";import{P as K}from"./project.e1376f6d.js";import{C as T}from"./CrudView.23d2cab3.js";import{M as U}from"./Modal.2f4e1218.js";import"./popupNotifcation.5334800d.js";import"./record.af6fc363.js";import"./pubsub.aefef9ae.js";import"./string.aa35f56d.js";import"./router.22f3bd60.js";import"./Form.582dbf5a.js";import"./hasIn.6f71cdb7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f9a20795.js";import"./BookOutlined.95d0ead0.js";import"./url.32aa5cd1.js";import"./index.0dfdaea0.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="1ca97aaf-a5b3-4f63-ad58-f565bdea4aad",n._sentryDebugIdIdentifier="sentry-dbid-1ca97aaf-a5b3-4f63-ad58-f565bdea4aad")}catch{}})();const oe=w({__name:"ApiKeys",setup(n){const o=A(null),c=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:m}=V(async()=>Promise.all([p.list(s),K.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});m(),o.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var u;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:P(a.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:h,dangerous:!0,onClick:async()=>{await p.delete(s,a.id),m()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(v,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:c,onCreate:I},null,8,["loading","table"]),l(i(U),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[f(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{oe as default};
//# sourceMappingURL=ApiKeys.9b772a7d.js.map
