import{d as w,e as A,ed as _,f as k,X as x,b as l,u as i,w as d,aR as v,o as C,d7 as P,aF as y,d8 as h,ec as D,cH as M,eJ as j,er as N}from"./vue-router.fe0bc544.js";import{a as K}from"./asyncComputed.53e9b892.js";import{A as p}from"./apiKey.7422f1bc.js";import"./gateway.78355a86.js";import{M as T}from"./member.aba101b3.js";import{P as V}from"./project.9c08259a.js";import"./tables.e449cf24.js";import{C as B}from"./CrudView.b8176e64.js";import"./popupNotifcation.57b6939d.js";import"./record.06edd183.js";import"./string.04de8d98.js";import"./router.91c3a20d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.111fd7fe.js";import"./BookOutlined.15a5fc3a.js";import"./url.f2182192.js";import"./PhDotsThreeVertical.vue.7efa34f9.js";import"./Badge.6c368b20.js";import"./index.91ba14f5.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="4a6e3d52-4484-40af-9a1a-bbaa2fe8f5a4",n._sentryDebugIdIdentifier="sentry-dbid-4a6e3d52-4484-40af-9a1a-bbaa2fe8f5a4")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const o=A(null),c=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([p.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});u(),o.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:j(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await p.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),x(v,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:c,create:I},null,8,["loading","table"]),l(i(M),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(P),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(h),{code:"",copyable:""},{default:d(()=>[y(D(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.e2d17edc.js.map
