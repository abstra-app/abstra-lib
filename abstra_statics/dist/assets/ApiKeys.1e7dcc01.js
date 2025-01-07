import{C as A}from"./CrudView.d2fe179d.js";import{d as _,e as k,ea as x,f as v,o as C,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,e_ as K,ep as T}from"./index.c093892f.js";import{a as V}from"./asyncComputed.c20e9b65.js";import{A as p}from"./apiKey.eac77e30.js";import"./gateway.398bf4cd.js";import{M as B}from"./member.fae839bb.js";import{a as E}from"./project.981ffcf0.js";import"./tables.09b81475.js";import"./router.fc037b60.js";import"./Badge.6fe17d0a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f0ff0f8d.js";import"./BookOutlined.d58fb569.js";import"./url.b4f46c51.js";import"./PhDotsThreeVertical.vue.4a611dc0.js";import"./index.628070ce.js";import"./index.189745e7.js";import"./popupNotifcation.b38b8600.js";import"./record.99cc12e7.js";import"./string.0a7c8737.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="8a5c4524-86a7-43f3-8e37-2da9b656a6a3",n._sentryDebugIdIdentifier="sentry-dbid-8a5c4524-86a7-43f3-8e37-2da9b656a6a3")}catch{}})();const oe=_({__name:"ApiKeys",setup(n){const o=k(null),c=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:I,refetch:u}=V(async()=>Promise.all([p.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});u(),o.value=t.value},w=v(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=I.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:K(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await p.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:c,create:b},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{oe as default};
//# sourceMappingURL=ApiKeys.1e7dcc01.js.map
