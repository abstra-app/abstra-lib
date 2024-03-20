import{d as w,r as b,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,eP as P,ar as y,eD as h}from"./outputWidgets.1ef04d57.js";import{i as D}from"./icons.3f955d82.js";import{a as M}from"./asyncComputed.15a9be40.js";import"./router.cb36ddc1.js";import"./index.b9ddb2e2.js";import{M as N}from"./member.d6106fa6.js";import{A as p}from"./apiKey.f600797c.js";import{P as T}from"./project.8b92f60d.js";import{C as j}from"./CrudView.0f94b004.js";import{A as B}from"./Paragraph.6405c43f.js";import{A as K}from"./Text.efe7cb2d.js";import{M as V}from"./Modal.28eb4475.js";import"./Form.68d4a592.js";import"./hasIn.a4efa85f.js";import"./popupNotifcation.1338278e.js";import"./index.cf4c23b9.js";import"./record.dd52fa30.js";import"./pubsub.b5598a30.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3e0a7f4f.js";import"./url.75236009.js";import"./index.003a8e9b.js";import"./Title.406aa905.js";import"./Base.d3185fc8.js";import"./Typography.b9421ace.js";import"./index.42b8de03.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="4e07dc7a-6318-482d-98e6-6d5da0efbc13",n._sentryDebugIdIdentifier="sentry-dbid-4e07dc7a-6318-482d-98e6-6d5da0efbc13")}catch{}})();const le=w({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[y(h(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.2d2824fb.js.map
