import{C as b}from"./CrudView.090483ba.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.e518893e.js";import{a as V}from"./asyncComputed.44479c03.js";import{A as c}from"./apiKey.520bf7fa.js";import"./gateway.080e8b04.js";import{M as B}from"./member.438848ed.js";import{a as E}from"./project.94b2571d.js";import"./tables.78bb8d83.js";import"./router.0f53f9e1.js";import"./Badge.f15ae695.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.04cf3ab2.js";import"./BookOutlined.d5c60e0a.js";import"./url.832506c3.js";import"./PhDotsThreeVertical.vue.33ee8419.js";import"./index.e258b452.js";import"./index.7a046453.js";import"./popupNotifcation.f74a336d.js";import"./record.782ef8ce.js";import"./string.9c5be47d.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="71452291-0045-4914-91d8-5c2c96052c08",n._sentryDebugIdIdentifier="sentry-dbid-71452291-0045-4914-91d8-5c2c96052c08")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:I,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),w=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},A=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=I.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(b,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:p,create:w},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.2d39d8e5.js.map
