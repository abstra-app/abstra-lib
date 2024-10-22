import{d as b,e as A,ed as _,f as k,X as x,b as l,u as i,w as d,aR as v,o as C,d7 as P,aF as y,d8 as h,ec as D,cH as M,eJ as j,er as N}from"./vue-router.c501632a.js";import{a as K}from"./asyncComputed.247c469c.js";import{A as c}from"./apiKey.0f7a4a32.js";import"./gateway.edd18cce.js";import{M as T}from"./member.a6eef9f8.js";import{P as V}from"./project.9ec84533.js";import"./tables.64b0ef1b.js";import{C as B}from"./CrudView.2cafc94c.js";import"./popupNotifcation.98ca2965.js";import"./record.44113d31.js";import"./string.79fc4c81.js";import"./router.52435bb2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1c207de2.js";import"./BookOutlined.a5899c8c.js";import"./url.06bf8bf3.js";import"./PhDotsThreeVertical.vue.01a81b38.js";import"./Badge.3fa0ed8b.js";import"./index.1370fad5.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="e40013a7-17ac-4dc5-a370-8e126fb25a66",n._sentryDebugIdIdentifier="sentry-dbid-e40013a7-17ac-4dc5-a370-8e126fb25a66")}catch{}})();const te=b({__name:"ApiKeys",setup(n){const o=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:j(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),x(v,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(M),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(P),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(h),{code:"",copyable:""},{default:d(()=>[y(D(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.24499d09.js.map
