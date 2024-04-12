import{d as A,r as w,eD as _,I as k,b as v,ev as x,f as l,u as i,w as d,aD as C,eT as h,eR as P,ar as y,eG as D}from"./outputWidgets.65744ed0.js";import{a as M}from"./asyncComputed.150ba6d4.js";import"./router.2b802b19.js";import"./index.ce1da4b1.js";import{M as T}from"./member.9d38bc05.js";import{A as p}from"./apiKey.50e334ce.js";import{P as j}from"./project.1fc06158.js";import{C as N}from"./CrudView.7807ee20.js";import{A as K}from"./Paragraph.5e52f285.js";import{A as V}from"./Text.9e44794c.js";import{M as B}from"./Modal.b5c448c3.js";import"./Form.fec6ea0c.js";import"./hasIn.5464a049.js";import"./popupNotifcation.572a98ed.js";import"./record.172839ee.js";import"./pubsub.4ac834a7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.432052e4.js";import"./BookOutlined.0ab01bee.js";import"./url.873dab98.js";import"./index.b4ca7d1c.js";import"./Title.9a138151.js";import"./index.85c0a5fd.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="08f0f7bb-57cd-4634-9312-4054b38c281d",n._sentryDebugIdIdentifier="sentry-dbid-08f0f7bb-57cd-4634-9312-4054b38c281d")}catch{}})();const re=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),j.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:b},null,8,["loading","table"]),l(i(B),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(K),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(V),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{re as default};
//# sourceMappingURL=ApiKeys.11921ed0.js.map
