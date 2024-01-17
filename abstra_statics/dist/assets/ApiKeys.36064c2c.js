import{d as b,r as w,eB as _,G as k,b as v,ev as C,f as i,u as l,w as d,bq as h,aq as f,eD as P}from"./outputWidgets.d8bae2da.js";import{d as x}from"./index.f8871454.js";import{o as D}from"./icons.1fc41da3.js";import{a as M}from"./asyncComputed.868fb674.js";import"./authorManager.dcca9f91.js";import"./index.ee946d35.js";import{M as N}from"./member.d3b1e42d.js";import{A as m}from"./apiKey.f60c292f.js";import{P as T}from"./project.89ab416a.js";import{C as j}from"./CrudView.ca03bf1f.js";import{A as B}from"./Title.928e5f4e.js";import{A as K}from"./Text.ba8103bd.js";import{M as V}from"./Modal.668eaad5.js";import"./index.cf4c23b9.js";import"./record.2969580d.js";import"./pubsub.09619200.js";import"./FormItem.a3b4aba8.js";import"./hasIn.7cea517d.js";import"./Form.4e1e575d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.62329a67.js";import"./router.6f0d3ccf.js";import"./url.05a33538.js";import"./index.c2b0ad52.js";import"./index.c2cc7342.js";import"./index.23ef4641.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="55e3831d-ba5e-4151-9821-23e0f7e72a08",n._sentryDebugIdIdentifier="sentry-dbid-55e3831d-ba5e-4151-9821-23e0f7e72a08")}catch{}})();const le=b({__name:"ApiKeys",setup(n){const a=w(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:c}=M(async()=>Promise.all([m.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await m.create({projectId:s,name:e.name});c(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{text:o.name},{text:x(o.createdAt)},{text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await m.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),C(h,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:p,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[f(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.36064c2c.js.map
