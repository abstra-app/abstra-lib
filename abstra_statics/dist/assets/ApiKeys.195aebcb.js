import{d as A,e as b,ev as x,f as _,W as k,b as l,u as i,w as d,aJ as v,eQ as C,eJ as P,o as h,cX as D,ax as y,cY as M,eu as j,cA as N}from"./vue-router.28b113b5.js";import{a as K}from"./asyncComputed.a2be0755.js";import{A as c}from"./apiKey.9547cbf5.js";import"./gateway.c036da04.js";import{M as T}from"./member.5196b055.js";import{P as V}from"./project.20bfa210.js";import"./tables.a57cdc4a.js";import{C as B}from"./CrudView.f125f931.js";import"./popupNotifcation.08f5d811.js";import"./record.f6e9cbea.js";import"./string.0d5e6ffd.js";import"./router.2490aba0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.66c3e1cd.js";import"./BookOutlined.6ccce4a8.js";import"./url.c0fe2d6b.js";import"./PhDotsThree.vue.1de62c89.js";import"./index.b93b64d8.js";import"./index.88847a2c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="f7435948-a839-4a2f-96af-e739c2eea4b6",n._sentryDebugIdIdentifier="sentry-dbid-f7435948-a839-4a2f-96af-e739c2eea4b6")}catch{}})();const te=A({__name:"ApiKeys",setup(n){const o=b(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},w=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:C(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(h(),k(v,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,onCreate:I},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.195aebcb.js.map
