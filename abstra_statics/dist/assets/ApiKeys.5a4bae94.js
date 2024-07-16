import{d as w,e as A,eA as _,f as k,o as x,et as C,b as l,u as i,w as d,aD as P,eV as h,eN as v,cP as D,ar as f,cQ as M,ez as N,ct as j}from"./vue-router.c7ba630a.js";import{a as T}from"./asyncComputed.b9493832.js";import{A as c}from"./apiKey.3e291733.js";import"./gateway.1024262b.js";import"./tables.64e93005.js";import{M as V}from"./member.ffdb70b2.js";import{P as K}from"./project.03b6f470.js";import{C as z}from"./CrudView.75ddbfbc.js";import"./popupNotifcation.18f73640.js";import"./record.a3b680fd.js";import"./string.d5317057.js";import"./router.93ea8584.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ccd35256.js";import"./BookOutlined.cb5b3694.js";import"./url.17d1230f.js";import"./index.8b557dda.js";import"./index.20a8ffb8.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="2a5d920f-c998-47fb-ad4f-26f870559f3b",n._sentryDebugIdIdentifier="sentry-dbid-2a5d920f-c998-47fb-ad4f-26f870559f3b")}catch{}})();const ee=w({__name:"ApiKeys",setup(n){const o=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:u}=T(async()=>Promise.all([c.list(s),K.get(s).then(e=>V.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:h(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:v,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(P,null,[l(z,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:p,onCreate:I},null,8,["loading","table"]),l(i(j),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[f(N(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ee as default};
//# sourceMappingURL=ApiKeys.5a4bae94.js.map
