import{d as A,r as w,eB as _,H as h,b as k,ev as v,f as l,u as i,w as d,a$ as x,f7 as C,ar as y,eD as P}from"./outputWidgets.65314838.js";import{o as D}from"./icons.273c97a3.js";import{a as M}from"./asyncComputed.223cd718.js";import"./router.816e015d.js";import"./index.b4329a73.js";import{M as T}from"./member.0af08b4a.js";import{A as p}from"./apiKey.83007222.js";import{P as N}from"./project.9b0dcfac.js";import{C as j}from"./CrudView.7d5462c4.js";import{A as B}from"./Paragraph.8de48e53.js";import{A as K}from"./Text.171782d7.js";import{M as V}from"./Modal.80efbd65.js";import"./FormItem.d018a0cf.js";import"./hasIn.c524fe42.js";import"./index.cf4c23b9.js";import"./record.2b771177.js";import"./pubsub.07a23b99.js";import"./Form.61485628.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f5720da4.js";import"./url.209588c6.js";import"./index.5a0acee3.js";import"./Title.465916fc.js";import"./Base.c866b7a3.js";import"./index.673377ae.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="a8ad3db1-68c2-43cd-9ee3-d2b5f8df591d",n._sentryDebugIdIdentifier="sentry-dbid-a8ad3db1-68c2-43cd-9ee3-d2b5f8df591d")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),N.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},b=h(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:C(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(k(),v(x,null,[l(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:m,onCreate:I},null,8,["loading","table"]),l(i(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.dcd5d6dc.js.map
