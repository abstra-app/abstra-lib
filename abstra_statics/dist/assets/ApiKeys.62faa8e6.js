import{d as A,r as w,ez as _,F as h,b as k,et as x,f as l,u as i,w as p,bo as C,ao as y,eB as v}from"./outputWidgets.7ee1756b.js";import{d as P}from"./index.58e1a282.js";import{o as D}from"./icons.585003a3.js";import{a as M}from"./asyncComputed.794f0362.js";import"./router.3c970a49.js";import"./jwt-decode.esm.74bd4619.js";import"./index.ea08ffce.js";import{M as T}from"./member.e9a4a39e.js";import{A as d}from"./apiKey.fa4d8be2.js";import{P as N}from"./project.7cef57ec.js";import{C as j}from"./CrudView.c009ea30.js";import{A as B}from"./Title.b0edd946.js";import{A as K}from"./Text.521fd491.js";import{M as V}from"./Modal.219ca627.js";import"./FormItem.8fc4846a.js";import"./hasIn.07bf6468.js";import"./storage.622dbde6.js";import"./index.cf4c23b9.js";import"./record.e7d815e3.js";import"./pubsub.d041bfb3.js";import"./Form.37419728.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.27cdda90.js";import"./url.6dccf316.js";import"./index.5015fd70.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="c1b9e849-b5f4-4fe0-8a3e-236b3b769393",n._sentryDebugIdIdentifier="sentry-dbid-c1b9e849-b5f4-4fe0-8a3e-236b3b769393")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([d.list(s),N.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await d.create({projectId:s,name:e.name});c(),a.value=t.value},I=h(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await d.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(k(),x(C,null,[l(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:b},null,8,["loading","table"]),l(i(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:p(()=>[]),default:p(()=>[l(i(B),null,{default:p(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:p(()=>[y(v(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.62faa8e6.js.map
