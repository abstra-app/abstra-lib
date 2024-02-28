import{d as A,r as w,eB as _,H as k,b as v,ev as x,f as i,u as l,w as p,a$ as C,f7 as h,ar as y,eD as P}from"./outputWidgets.9a751704.js";import{i as D}from"./icons.52647ede.js";import{a as M}from"./asyncComputed.c0b7f526.js";import"./router.2ed86b1e.js";import"./index.1dbbc1f9.js";import{M as N}from"./member.5586a9df.js";import{A as d}from"./apiKey.94a5e177.js";import{P as T}from"./project.30dc1906.js";import{C as j}from"./CrudView.294fb79e.js";import{A as B}from"./Paragraph.ee49e077.js";import{A as K}from"./Text.0538649f.js";import{M as V}from"./Modal.34cd8ce8.js";import"./Form.b9d05841.js";import"./hasIn.c089c9ed.js";import"./index.cf4c23b9.js";import"./record.91b90880.js";import"./pubsub.f352a300.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a42500bf.js";import"./url.a9a0a879.js";import"./index.6edb660d.js";import"./Title.9671cb18.js";import"./Base.083cbb66.js";import"./Typography.c485b72c.js";import"./index.b69d7ab2.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="b8abb341-931a-47bf-bb79-ae87289bc706",n._sentryDebugIdIdentifier="sentry-dbid-b8abb341-931a-47bf-bb79-ae87289bc706")}catch{}})();const ie=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:b,refetch:c}=M(async()=>Promise.all([d.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),g=async e=>{const t=await d.create({projectId:s,name:e.name});c(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await d.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:g},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:p(()=>[]),default:p(()=>[i(l(B),null,{default:p(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:p(()=>[y(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ie as default};
//# sourceMappingURL=ApiKeys.e5a6ec74.js.map
