import{d as A,r as w,eB as _,H as h,b as k,ev as v,f as l,u as i,w as p,a$ as x,f7 as C,ar as f,eD as P}from"./outputWidgets.2096912b.js";import{o as D}from"./icons.e6f1393c.js";import{a as M}from"./asyncComputed.7ba20277.js";import"./router.ec793a32.js";import"./index.1e0d0d09.js";import{M as T}from"./member.cb09bf7c.js";import{A as d}from"./apiKey.66b50112.js";import{P as N}from"./project.eb89821e.js";import{C as j}from"./CrudView.c9fd091e.js";import{A as B}from"./Paragraph.144ab0b0.js";import{A as K}from"./Text.2528d1f7.js";import{M as V}from"./Modal.1ff3292e.js";import"./FormItem.52d606d6.js";import"./hasIn.3063693a.js";import"./index.cf4c23b9.js";import"./record.a78568e3.js";import"./pubsub.29d64bef.js";import"./Form.effee9fb.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.69c0b93f.js";import"./url.9f77d2c5.js";import"./index.b16b39d7.js";import"./Title.5e6ffead.js";import"./Base.33ff443a.js";import"./index.39b4efaf.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="27f1f8fc-b92b-4bbe-a49d-787694b58995",n._sentryDebugIdIdentifier="sentry-dbid-27f1f8fc-b92b-4bbe-a49d-787694b58995")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:b,refetch:c}=M(async()=>Promise.all([d.list(s),N.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),g=async e=>{const t=await d.create({projectId:s,name:e.name});c(),a.value=t.value},I=h(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:C(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await d.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(k(),v(x,null,[l(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:g},null,8,["loading","table"]),l(i(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:p(()=>[]),default:p(()=>[l(i(B),null,{default:p(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:p(()=>[f(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.b6aacdff.js.map
