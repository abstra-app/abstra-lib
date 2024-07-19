import{d as w,e as A,eB as _,f as k,o as x,V as C,b as l,u as i,w as d,aI as h,eW as v,eO as P,cU as D,aw as y,cV as M,eA as V,cy as j}from"./vue-router.a333e065.js";import{a as N}from"./asyncComputed.77239fe2.js";import{A as c}from"./apiKey.f0ccb401.js";import"./gateway.1e297c44.js";import"./tables.8220507b.js";import{M as T}from"./member.c906a590.js";import{P as B}from"./project.43e6b6f1.js";import{C as K}from"./CrudView.7d7772b2.js";import"./popupNotifcation.32228270.js";import"./record.d2fa9f98.js";import"./string.ba08fe0f.js";import"./router.d60ced1a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.768d8419.js";import"./BookOutlined.8fb1197e.js";import"./url.30f67d32.js";import"./index.d9df5c28.js";import"./index.e9f1c85a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="ee6ce9ad-aff2-4bb6-942b-59104b7bc78b",n._sentryDebugIdIdentifier="sentry-dbid-ee6ce9ad-aff2-4bb6-942b-59104b7bc78b")}catch{}})();const ee=w({__name:"ApiKeys",setup(n){const o=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:b,refetch:u}=N(async()=>Promise.all([c.list(s),B.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),g=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:v(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(K,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:p,onCreate:g},null,8,["loading","table"]),l(i(j),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(V(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ee as default};
//# sourceMappingURL=ApiKeys.90eeb8ae.js.map
