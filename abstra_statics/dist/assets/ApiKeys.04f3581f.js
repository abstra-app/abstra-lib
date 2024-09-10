import{d as A,e as b,ed as _,f as k,X as x,b as l,u as d,w as i,aR as C,o as v,d9 as P,aF as y,da as h,ec as D,cK as M,eJ as j,er as K}from"./vue-router.36bc5188.js";import{a as N}from"./asyncComputed.37a42e7b.js";import{A as c}from"./apiKey.00336cec.js";import"./gateway.6a3fe533.js";import{M as T}from"./member.89290655.js";import{P as V}from"./project.61147eb5.js";import"./tables.d43a3134.js";import{C as B}from"./CrudView.cec93544.js";import"./popupNotifcation.a7b5eb5c.js";import"./record.2cf5df84.js";import"./string.8a83f3d1.js";import"./router.748a95a3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7b7ee2ef.js";import"./BookOutlined.de962338.js";import"./url.a7891bdc.js";import"./PhDotsThreeVertical.vue.ac77e5a6.js";import"./index.87f1e4b3.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="0007103d-85ad-4ecf-ad00-057680cd67e7",n._sentryDebugIdIdentifier="sentry-dbid-0007103d-85ad-4ecf-ad00-057680cd67e7")}catch{}})();const ee=A({__name:"ApiKeys",setup(n){const o=b(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=N(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:j(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:K,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:d(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,onCreate:I},null,8,["loading","table"]),l(d(M),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:i(()=>[]),default:i(()=>[l(d(P),null,{default:i(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(d(h),{code:"",copyable:""},{default:i(()=>[y(D(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ee as default};
//# sourceMappingURL=ApiKeys.04f3581f.js.map
