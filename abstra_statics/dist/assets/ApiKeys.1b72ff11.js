import{d as w,e as A,eu as x,f as _,W as k,b as l,u as i,w as d,aJ as C,eP as P,eI as v,o as h,cW as D,ax as y,cX as M,et as j,cA as N}from"./vue-router.9c724512.js";import{a as K}from"./asyncComputed.d4e68ae3.js";import{A as c}from"./apiKey.b0c1203e.js";import"./gateway.a7bf1a95.js";import{M as T}from"./member.de4a0fa3.js";import{P as V}from"./project.612260de.js";import"./tables.d760ceea.js";import{C as B}from"./CrudView.f1c2f3b9.js";import"./popupNotifcation.e0f463de.js";import"./record.f6d809e4.js";import"./string.549be225.js";import"./router.1f24b417.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c371c713.js";import"./BookOutlined.35aab5ae.js";import"./url.a7263749.js";import"./PhDotsThree.vue.e350b4a9.js";import"./index.8fcb9686.js";import"./index.553d3f24.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="127aeb37-56ef-45a4-9d25-b965525e2e24",n._sentryDebugIdIdentifier="sentry-dbid-127aeb37-56ef-45a4-9d25-b965525e2e24")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const o=A(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},b=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:P(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:v,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(h(),k(C,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:p,onCreate:I},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.1b72ff11.js.map
