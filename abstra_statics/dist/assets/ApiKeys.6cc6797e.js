import{d as w,r as A,eE as _,J as k,b as x,ew as C,f as l,u as i,w as d,aE as h,eU as v,eS as P,as as y,eH as D}from"./outputWidgets.28c0c3b5.js";import{a as M}from"./asyncComputed.402c6983.js";import"./router.40113c1e.js";import"./index.827ac0c2.js";import{M as j}from"./member.87426d92.js";import{A as p}from"./apiKey.075167b5.js";import{P as E}from"./project.7aa33104.js";import{C as N}from"./CrudView.349d6323.js";import{A as T}from"./Paragraph.17d381da.js";import{A as K}from"./Text.d10ee3ab.js";import{M as U}from"./Modal.68700914.js";import"./Form.e9cb5ccc.js";import"./hasIn.19bf6707.js";import"./popupNotifcation.0fa1b81f.js";import"./record.5a773c18.js";import"./pubsub.90f25461.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.36c900b6.js";import"./BookOutlined.88014440.js";import"./url.47a8d791.js";import"./index.59141b39.js";import"./Title.1f709414.js";import"./Base.f2f4d0da.js";import"./index.8bcb837d.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="ce1342a1-0df7-4b72-92bd-9c8079e01693",n._sentryDebugIdIdentifier="sentry-dbid-ce1342a1-0df7-4b72-92bd-9c8079e01693")}catch{}})();const se=w({__name:"ApiKeys",setup(n){const a=A(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),E.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:v(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:P,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(x(),C(h,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:m,onCreate:I},null,8,["loading","table"]),l(i(U),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(T),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.6cc6797e.js.map
