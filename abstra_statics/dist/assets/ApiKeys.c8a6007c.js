import{d as w,r as b,eB as _,H as k,b as v,ev as x,f as i,u as l,w as p,a$ as C,f8 as h,ar as y,eD as P}from"./outputWidgets.108432da.js";import{i as D}from"./icons.9db31d3d.js";import{a as M}from"./asyncComputed.9818a09a.js";import"./router.2ffebeb2.js";import"./index.23178e03.js";import{M as N}from"./member.11c6cd91.js";import{A as d}from"./apiKey.57a8ca5e.js";import{P as T}from"./project.5003895c.js";import{C as j}from"./CrudView.a9daec59.js";import{A as B}from"./Paragraph.d17409a8.js";import{A as K}from"./Text.1a62e50a.js";import{M as V}from"./Modal.efcd7ec2.js";import"./Form.a76f1164.js";import"./hasIn.7973e16b.js";import"./index.cf4c23b9.js";import"./record.15041cf5.js";import"./pubsub.98ab975f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c535f159.js";import"./url.42281f8e.js";import"./index.3d290fbb.js";import"./Title.98d4c800.js";import"./Base.f7c93d8e.js";import"./Typography.6afbacd7.js";import"./index.5578279a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="50581c77-ab96-461c-a447-ac5f50615e15",n._sentryDebugIdIdentifier="sentry-dbid-50581c77-ab96-461c-a447-ac5f50615e15")}catch{}})();const ie=w({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([d.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await d.create({projectId:s,name:e.name});c(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await d.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:p(()=>[]),default:p(()=>[i(l(B),null,{default:p(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:p(()=>[y(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ie as default};
//# sourceMappingURL=ApiKeys.c8a6007c.js.map
