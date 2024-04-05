import{d as b,r as w,eA as C,H as _,b as k,eu as x,f as l,u as i,w as d,aC as h,eS as v,eQ as P,aq as f,eD as D}from"./outputWidgets.016a0a74.js";import{a as M}from"./asyncComputed.ff823c56.js";import"./router.16de0972.js";import"./index.240ffb00.js";import{M as j}from"./member.7019f2c6.js";import{A as p}from"./apiKey.7a15068f.js";import{P as N}from"./project.35ab93cb.js";import{C as T}from"./CrudView.3d9ffd01.js";import{A as K}from"./Paragraph.b77a9187.js";import{A as V}from"./Text.77623a14.js";import{M as B}from"./Modal.2e131920.js";import"./Form.df36f2fb.js";import"./hasIn.cfb7c175.js";import"./popupNotifcation.b56015cb.js";import"./index.cf4c23b9.js";import"./record.d9fa21f2.js";import"./pubsub.5cb9d31c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e38fca08.js";import"./BookOutlined.b538e438.js";import"./url.36477c8b.js";import"./index.06165680.js";import"./Title.d98381dd.js";import"./index.96d5ee4c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="cecd449f-1fd3-4fff-b23f-26b595373c5d",n._sentryDebugIdIdentifier="sentry-dbid-cecd449f-1fd3-4fff-b23f-26b595373c5d")}catch{}})();const se=b({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=C().params.projectId,{loading:y,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),N.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),A=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},I=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(k(),x(h,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:A},null,8,["loading","table"]),l(i(B),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(K),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(V),{code:"",copyable:""},{default:d(()=>[f(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.42b07bc7.js.map
