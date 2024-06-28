import{d as A,r as b,f3 as _,H as k,b as x,eX as C,f as l,u as i,w as d,b3 as v,fi as P,fc as h,d7 as D,aV as y,d8 as M,f6 as j}from"./outputWidgets.b678220b.js";import{a as N}from"./asyncComputed.6b2d2005.js";import"./gateway.6d714d69.js";import"./index.e4a8a856.js";import{M as V}from"./member.4327e288.js";import{A as c}from"./apiKey.a2379e94.js";import{P as K}from"./project.81201f49.js";import{C as T}from"./CrudView.13b3e56b.js";import{M as B}from"./Modal.09fb05db.js";import"./popupNotifcation.43d34198.js";import"./index.dced3071.js";import"./record.fb2962ab.js";import"./pubsub.add1e181.js";import"./string.c700b739.js";import"./router.59d08db9.js";import"./Form.aeb1e92c.js";import"./hasIn.db467704.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fca1b76c.js";import"./BookOutlined.0ac53d20.js";import"./url.8d6c7054.js";import"./index.e7fc7f4f.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="84e62878-cdc5-4949-8d5e-424ca7892ea9",n._sentryDebugIdIdentifier="sentry-dbid-84e62878-cdc5-4949-8d5e-424ca7892ea9")}catch{}})();const ne=A({__name:"ApiKeys",setup(n){const a=b(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:m}=N(async()=>Promise.all([c.list(s),K.get(s).then(e=>V.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});m(),a.value=t.value},w=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:h,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),m()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(v,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,onCreate:I},null,8,["loading","table"]),l(i(B),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ne as default};
//# sourceMappingURL=ApiKeys.c876fd79.js.map
