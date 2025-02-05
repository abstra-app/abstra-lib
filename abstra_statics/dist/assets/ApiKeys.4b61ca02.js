import{C as A}from"./CrudView.3371c174.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.fa78dbc3.js";import{a as V}from"./asyncComputed.12aeb11c.js";import{A as c}from"./apiKey.c970fb7a.js";import"./gateway.ae4a1089.js";import{M as B}from"./member.e5c11eb7.js";import{a as E}from"./project.41657932.js";import"./tables.b8cdb7fe.js";import"./router.00aed407.js";import"./Badge.fb885d78.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.16ee81e0.js";import"./BookOutlined.86c7be2a.js";import"./url.d89d37ba.js";import"./PhDotsThreeVertical.vue.33bf4e0e.js";import"./index.83e500e3.js";import"./index.112a2a7d.js";import"./popupNotifcation.42d265d2.js";import"./record.0f0973ec.js";import"./string.2d4a8451.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="d5cab38b-04db-4ac9-b64a-678006af3848",n._sentryDebugIdIdentifier="sentry-dbid-d5cab38b-04db-4ac9-b64a-678006af3848")}catch{}})();const oe=_({__name:"ApiKeys",setup(n){const o=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:b,result:g,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},w=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:K(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(b),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{oe as default};
//# sourceMappingURL=ApiKeys.4b61ca02.js.map
