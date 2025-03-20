import{C as A}from"./CrudView.ef230581.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.9ec4908b.js";import{a as V}from"./asyncComputed.dff47d77.js";import{A as p}from"./apiKey.0ebd72cd.js";import"./gateway.988e63eb.js";import{M as B}from"./member.0f16a11c.js";import{a as E}from"./project.6715e302.js";import"./tables.0793b146.js";import"./router.41752d66.js";import"./Badge.54c2a3b4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a2f555ac.js";import"./BookOutlined.fc1f41dc.js";import"./url.9b32da79.js";import"./PhDotsThreeVertical.vue.b32e24bb.js";import"./index.9d33ddfe.js";import"./index.8dd8b6be.js";import"./popupNotifcation.74211ce2.js";import"./record.82c779cf.js";import"./string.928c5604.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="eaae5b93-5b49-41a5-b5bb-83b53b4aab9b",n._sentryDebugIdIdentifier="sentry-dbid-eaae5b93-5b49-41a5-b5bb-83b53b4aab9b")}catch{}})();const oe=_({__name:"ApiKeys",setup(n){const o=k(null),c=[{key:"name",label:"API key name"}],s=x().params.projectId,b=new B,{loading:f,result:g,refetch:u}=V(async()=>Promise.all([p.list(s),E.get(s).then(e=>b.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});u(),o.value=t.value},w=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:K(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await p.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:c,create:I},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{oe as default};
//# sourceMappingURL=ApiKeys.6fcd50f8.js.map
