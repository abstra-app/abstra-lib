import{C as A}from"./CrudView.22a8146f.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.0acc7dee.js";import{a as V}from"./asyncComputed.10df99d2.js";import{A as c}from"./apiKey.77f3ab03.js";import"./gateway.6f8554f2.js";import{M as B}from"./member.206a7407.js";import{a as E}from"./project.938443a2.js";import"./tables.70f1ab32.js";import"./router.8eb46d69.js";import"./Badge.056c3c67.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6f011de2.js";import"./BookOutlined.0b4ea393.js";import"./url.e96dfef4.js";import"./PhDotsThreeVertical.vue.9dc7fb0a.js";import"./index.31e81278.js";import"./index.26a1f633.js";import"./popupNotifcation.4eb9f17c.js";import"./record.0239351b.js";import"./string.63b45449.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="baa4c7b3-094b-46bb-a1ca-70d3348b522c",n._sentryDebugIdIdentifier="sentry-dbid-baa4c7b3-094b-46bb-a1ca-70d3348b522c")}catch{}})();const oe=_({__name:"ApiKeys",setup(n){const o=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:b,result:g,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},w=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:K(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(b),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{oe as default};
//# sourceMappingURL=ApiKeys.e28287af.js.map
