import{C as A}from"./CrudView.81370948.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.1786377c.js";import{a as V}from"./asyncComputed.c5835242.js";import{A as c}from"./apiKey.a804e31b.js";import"./gateway.ee8dae53.js";import{M as B}from"./member.766476db.js";import{a as E}from"./project.9c0ab3fe.js";import"./tables.dab4bfa5.js";import"./router.42f3329a.js";import"./Badge.95ac43a3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0eabef63.js";import"./BookOutlined.2c726947.js";import"./url.aaaf8413.js";import"./PhDotsThreeVertical.vue.154bc4eb.js";import"./index.baf90386.js";import"./index.6606fa30.js";import"./popupNotifcation.7b27b09f.js";import"./record.98dde63d.js";import"./string.aa856d61.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="7e892a66-3eb7-4682-a2bc-8e0c065289cb",n._sentryDebugIdIdentifier="sentry-dbid-7e892a66-3eb7-4682-a2bc-8e0c065289cb")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:b,result:g,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},w=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(b),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,create:I},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.279757b9.js.map
