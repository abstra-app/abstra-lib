import{d as A,r as w,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,a$ as C,f7 as h,ar as f,eD as P}from"./outputWidgets.02d7c6ab.js";import{d as D}from"./icons.d148c279.js";import{a as M}from"./asyncComputed.6ba28f12.js";import"./router.1ffd6f3d.js";import"./index.91e5c23a.js";import{M as N}from"./member.5d1953e8.js";import{A as p}from"./apiKey.d48dce77.js";import{P as T}from"./project.1a795ad6.js";import{C as j}from"./CrudView.9686d7bc.js";import{A as B}from"./Paragraph.fbd3cedb.js";import{A as K}from"./Text.4830f6bb.js";import{M as V}from"./Modal.04499883.js";import"./FormItem.08e761e4.js";import"./hasIn.16bcfc34.js";import"./index.cf4c23b9.js";import"./record.4bf6e864.js";import"./pubsub.ee609699.js";import"./Form.ad29b3fb.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.754dc12b.js";import"./url.425ecd45.js";import"./index.3efceebc.js";import"./Title.5b74a8b2.js";import"./Base.a464e3b8.js";import"./Typography.9f15a3fb.js";import"./index.48b86b74.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="95acb4f8-6181-44d5-bdce-ad594f14eee4",n._sentryDebugIdIdentifier="sentry-dbid-95acb4f8-6181-44d5-bdce-ad594f14eee4")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[f(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.583b9b01.js.map
