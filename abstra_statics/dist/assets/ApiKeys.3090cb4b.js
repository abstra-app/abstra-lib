import{d as w,e as A,eB as x,f as _,W as k,b as l,u as i,w as d,aJ as C,eW as v,eO as P,o as h,cU as D,ax as y,cV as M,eA as j,cy as N}from"./vue-router.e3a418ab.js";import{a as V}from"./asyncComputed.fdcbda70.js";import{A as c}from"./apiKey.384dde21.js";import"./gateway.ab7d8bad.js";import"./tables.662e288a.js";import{M as B}from"./member.7365df47.js";import{P as K}from"./project.00b85d24.js";import{C as T}from"./CrudView.d757a86c.js";import"./popupNotifcation.3097ef22.js";import"./record.3f1cee06.js";import"./string.5385dc37.js";import"./router.be53a969.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4ba5f12d.js";import"./BookOutlined.b020abeb.js";import"./url.fa4c0118.js";import"./PhDotsThree.vue.d16bd5f7.js";import"./index.0ce7e49d.js";import"./index.f3298670.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="747d7824-984c-4443-8a28-cae3fd4bbfc5",n._sentryDebugIdIdentifier="sentry-dbid-747d7824-984c-4443-8a28-cae3fd4bbfc5")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const o=A(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,{loading:f,result:g,refetch:u}=V(async()=>Promise.all([c.list(s),K.get(s).then(e=>B.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},b=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:v(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(h(),k(C,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:p,onCreate:I},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.3090cb4b.js.map
