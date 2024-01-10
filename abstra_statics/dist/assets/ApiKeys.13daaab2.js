import{d as A,r as w,eB as _,G as k,b as v,ev as C,f as i,u as l,w as d,bq as h,aq as f,eD as P}from"./outputWidgets.f2ae36a0.js";import{d as x}from"./index.2a7bba2b.js";import{o as D}from"./icons.630387be.js";import{a as M}from"./asyncComputed.543cc13a.js";import"./authorManager.39a8ddb8.js";import"./index.d218deb1.js";import{M as N}from"./member.025eb716.js";import{A as m}from"./apiKey.25bea4ce.js";import{P as T}from"./project.3b339c84.js";import{C as j}from"./CrudView.8a2cea74.js";import{A as B,M as K}from"./Title.1747a412.js";import{A as V}from"./Text.17250f4c.js";import"./index.cf4c23b9.js";import"./record.104738e2.js";import"./pubsub.815fdbd4.js";import"./gateway.168406cd.js";import"./FormItem.a1fd3798.js";import"./hasIn.8c7e2228.js";import"./Form.47de7bd6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5d18dbfa.js";import"./router.4a7d2453.js";import"./url.157ba346.js";import"./index.7b7ef859.js";import"./index.e300b0a9.js";import"./index.0f393774.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="3c83150c-f98d-4d5c-9567-eb220791eb0d",n._sentryDebugIdIdentifier="sentry-dbid-3c83150c-f98d-4d5c-9567-eb220791eb0d")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:c}=M(async()=>Promise.all([m.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await m.create({projectId:s,name:e.name});c(),a.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{text:o.name},{text:x(o.createdAt)},{text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await m.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),C(h,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:p,onCreate:I},null,8,["loading","table"]),i(l(K),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(V),{code:"",copyable:""},{default:d(()=>[f(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.13daaab2.js.map
