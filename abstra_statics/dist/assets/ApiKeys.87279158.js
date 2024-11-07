import{d as w,e as A,ea as _,f as k,o as x,X as v,b as l,u as i,w as d,aR as C,d7 as P,aF as y,d8 as h,e9 as D,cH as M,eI as j,ep as N}from"./vue-router.f3b8067f.js";import{a as K}from"./asyncComputed.8aeb1fce.js";import{A as p}from"./apiKey.9560a7c4.js";import"./gateway.dd6f9499.js";import{M as T}from"./member.3c9d54e7.js";import{P as V}from"./project.90e809a5.js";import"./tables.be274d96.js";import{C as B}from"./CrudView.ed043adf.js";import"./popupNotifcation.174b4f16.js";import"./record.02c0d6ad.js";import"./string.e32a79c7.js";import"./router.f5254068.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d474e883.js";import"./BookOutlined.1d570488.js";import"./url.bdfe831c.js";import"./PhDotsThreeVertical.vue.08ddab00.js";import"./Badge.b10e917a.js";import"./index.1c54fb32.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="894ebc62-f447-4de3-84b3-07477692227b",n._sentryDebugIdIdentifier="sentry-dbid-894ebc62-f447-4de3-84b3-07477692227b")}catch{}})();const te=w({__name:"ApiKeys",setup(n){const a=A(null),c=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([p.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:j(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),v(C,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:c,create:b},null,8,["loading","table"]),l(i(M),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(P),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(h),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.87279158.js.map
