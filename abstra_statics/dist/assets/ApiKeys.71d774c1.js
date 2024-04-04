import{d as I,r as w,eA as C,H as _,b as k,eu as x,f as l,u as i,w as d,aC as P,eS as h,eP as v,aq as y,eD as D}from"./outputWidgets.aa08cfde.js";import{a as M}from"./asyncComputed.a36cff4c.js";import"./router.61162211.js";import"./index.edc5f950.js";import{M as j}from"./member.ace716c0.js";import{A as p}from"./apiKey.90445e7d.js";import{P as N}from"./project.feb74bf0.js";import{C as T}from"./CrudView.2fe03d98.js";import{A as K}from"./Paragraph.f7753824.js";import{A as V}from"./Text.ac966cfe.js";import{M as B}from"./Modal.90359030.js";import"./Form.0ffc75a3.js";import"./hasIn.50bccb87.js";import"./popupNotifcation.8f72fa08.js";import"./index.cf4c23b9.js";import"./record.a4fffc79.js";import"./pubsub.6d169ac1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.29b47ffd.js";import"./BookOutlined.f841798d.js";import"./url.4fede55a.js";import"./index.b59e6a4e.js";import"./Title.ecd0d227.js";import"./index.41753166.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="5a170e07-b14a-4b45-bad1-83a9dd671939",n._sentryDebugIdIdentifier="sentry-dbid-5a170e07-b14a-4b45-bad1-83a9dd671939")}catch{}})();const se=I({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=C().params.projectId,{loading:f,result:g,refetch:u}=M(async()=>Promise.all([p.list(s),N.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},A=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var c;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(c=r==null?void 0:r.email)!=null?c:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:v,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(k(),x(P,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:b},null,8,["loading","table"]),l(i(B),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(K),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(V),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.71d774c1.js.map
