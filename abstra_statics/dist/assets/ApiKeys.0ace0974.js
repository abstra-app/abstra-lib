import{d as w,r as b,eG as _,y as k,b as x,ey as C,f as i,u as l,w as d,aG as v,eX as P,eS as h,au as y,eJ as D}from"./outputWidgets.d33a61bd.js";import{a as M}from"./asyncComputed.4657309e.js";import"./gateway.30b21540.js";import"./index.06532aec.js";import{M as j}from"./member.72ccdc05.js";import{A as p}from"./apiKey.12879ee1.js";import{P as N}from"./project.6910d4a3.js";import{C as G}from"./CrudView.184e6512.js";import{A as K}from"./Paragraph.6e3c34f9.js";import{A as T}from"./Text.7588bb7f.js";import{M as V}from"./Modal.3a17d8d4.js";import"./popupNotifcation.dd994e4f.js";import"./record.4dc67282.js";import"./pubsub.b428bf0f.js";import"./router.bfd42852.js";import"./Form.41dae759.js";import"./hasIn.657bf603.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b8f40ee0.js";import"./BookOutlined.258e4769.js";import"./url.8c754a91.js";import"./index.5d628308.js";import"./Title.51239574.js";import"./Base.d60172c6.js";import"./index.789baac6.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="222962e2-2ae6-40e0-a148-817844759307",n._sentryDebugIdIdentifier="sentry-dbid-222962e2-2ae6-40e0-a148-817844759307")}catch{}})();const ie=w({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=M(async()=>Promise.all([p.list(s),N.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var c;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(c=r==null?void 0:r.email)!=null?c:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:h,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(v,null,[i(G,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(K),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(T),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ie as default};
//# sourceMappingURL=ApiKeys.0ace0974.js.map
