import{d as w,e as A,eu as x,f as _,W as k,b as l,u as d,w as i,aJ as C,eP as P,eI as v,o as h,cW as D,ax as y,cX as M,et as j,cA as N}from"./vue-router.baf1d741.js";import{a as K}from"./asyncComputed.e6f95505.js";import{A as c}from"./apiKey.56748271.js";import"./gateway.6b762f3b.js";import{M as T}from"./member.5aeb970f.js";import{P as V}from"./project.d27d89ae.js";import"./tables.eaf3b06a.js";import{C as B}from"./CrudView.35735c2a.js";import"./popupNotifcation.84f234cb.js";import"./record.8bf1b0c2.js";import"./string.9dc28347.js";import"./router.ebe13d37.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9e1a73e4.js";import"./BookOutlined.d4deed48.js";import"./url.52798630.js";import"./PhDotsThree.vue.d9bb9b26.js";import"./index.8b300810.js";import"./index.a446ad50.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="cb87bfaa-d026-4ddf-834b-696bd2b689de",n._sentryDebugIdIdentifier="sentry-dbid-cb87bfaa-d026-4ddf-834b-696bd2b689de")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const o=A(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,{loading:f,result:b,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),g=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},I=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:P(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:v,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(h(),k(C,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:d(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:p,onCreate:g},null,8,["loading","table"]),l(d(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:i(()=>[]),default:i(()=>[l(d(D),null,{default:i(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(d(M),{code:"",copyable:""},{default:i(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.621094b1.js.map
