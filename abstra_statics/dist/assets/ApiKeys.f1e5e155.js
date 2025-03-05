import{C as A}from"./CrudView.aa3414d2.js";import{d as _,e as k,ea as x,f as C,o as v,Y as P,b as l,u as i,w as d,aS as h,db as D,aG as y,dc as M,e9 as j,cL as N,eC as K,ep as T}from"./index.c5058c37.js";import{a as V}from"./asyncComputed.8437af24.js";import{A as p}from"./apiKey.8cd21099.js";import"./gateway.52346402.js";import{M as B}from"./member.c2c1b3f9.js";import{a as E}from"./project.a76b4135.js";import"./tables.e340d533.js";import"./router.b16a3210.js";import"./Badge.f742d736.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7ff2b4ba.js";import"./BookOutlined.aa80ffaa.js";import"./url.289eb328.js";import"./PhDotsThreeVertical.vue.87bb66f0.js";import"./index.302ebb8b.js";import"./index.73a9d81c.js";import"./popupNotifcation.91c4e711.js";import"./record.a9a84c53.js";import"./string.7ede7c27.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="1bd2b3b2-5341-4f79-a518-601546e10b08",n._sentryDebugIdIdentifier="sentry-dbid-1bd2b3b2-5341-4f79-a518-601546e10b08")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),c=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:b,result:g,refetch:u}=V(async()=>Promise.all([p.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},w=C(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(b),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:c,create:I},null,8,["loading","table"]),l(i(N),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.f1e5e155.js.map
