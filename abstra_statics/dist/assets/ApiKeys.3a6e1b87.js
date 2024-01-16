import{d as A,r as w,eB as _,G as k,b as v,ev as C,f as i,u as l,w as d,bq as h,aq as f,eD as P}from"./outputWidgets.544a1a04.js";import{d as x}from"./index.a41d30f6.js";import{o as D}from"./icons.fca83af6.js";import{a as M}from"./asyncComputed.8cb44100.js";import"./authorManager.b05b8d25.js";import"./index.512d1137.js";import{M as N}from"./member.3c31470f.js";import{A as c}from"./apiKey.e45ed2d5.js";import{P as T}from"./project.accfafeb.js";import{C as j}from"./CrudView.cbd5cf6d.js";import{A as B,M as K}from"./Title.ab58e29a.js";import{A as V}from"./Text.392bf8f9.js";import"./index.cf4c23b9.js";import"./record.7026b145.js";import"./pubsub.de712bd5.js";import"./FormItem.88d9f692.js";import"./hasIn.e29e01a4.js";import"./Form.bf3703e4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e21b3b82.js";import"./router.859af25f.js";import"./url.e9f12c8c.js";import"./index.996d5cae.js";import"./index.4244092d.js";import"./index.283ba854.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="37ad03c8-532b-4427-8e13-cb70d7cf23cc",n._sentryDebugIdIdentifier="sentry-dbid-37ad03c8-532b-4427-8e13-cb70d7cf23cc")}catch{}})();const ie=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:p}=M(async()=>Promise.all([c.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});p(),a.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{text:o.name},{text:x(o.createdAt)},{text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),p()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),C(h,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(K),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(V),{code:"",copyable:""},{default:d(()=>[f(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ie as default};
//# sourceMappingURL=ApiKeys.3a6e1b87.js.map
