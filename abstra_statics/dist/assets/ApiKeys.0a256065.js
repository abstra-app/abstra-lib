import{d as A,r as w,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,eP as P,ar as y,eD as h}from"./outputWidgets.e0c11cdd.js";import{i as D}from"./icons.befd8bc2.js";import{a as M}from"./asyncComputed.5ea7d449.js";import"./router.8caa76ef.js";import"./index.707e31af.js";import{M as N}from"./member.ef94120a.js";import{A as p}from"./apiKey.86eb54d4.js";import{P as T}from"./project.388751f9.js";import{C as j}from"./CrudView.8f57802f.js";import{A as B}from"./Paragraph.a6af9ff9.js";import{A as K}from"./Text.e195aa2c.js";import{M as V}from"./Modal.61b0ecfd.js";import"./Form.428a6b36.js";import"./hasIn.0414f6e1.js";import"./popupNotifcation.4fe272f4.js";import"./index.cf4c23b9.js";import"./record.304d717d.js";import"./pubsub.68c6155a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b9290cb4.js";import"./url.18ce12ae.js";import"./index.daca4dc1.js";import"./Title.aa774db6.js";import"./Base.2e36cd58.js";import"./Typography.657cdef3.js";import"./index.69d093e7.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="1bebd1b4-0580-4c5e-ba8e-f800eb1c2865",n._sentryDebugIdIdentifier="sentry-dbid-1bebd1b4-0580-4c5e-ba8e-f800eb1c2865")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:b,refetch:c}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),g=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:g},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[y(h(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.0a256065.js.map
