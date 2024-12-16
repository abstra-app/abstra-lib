import{C as b}from"./CrudView.fdf2a3ee.js";import{d as _,e as k,ea as x,f as v,o as C,Y as P,b as l,u as i,w as d,aS as h,dd as D,aG as f,de as M,e9 as N,cN as j,e_ as K,ep as T}from"./index.f0b92b7e.js";import{a as V}from"./asyncComputed.451e9a72.js";import{A as c}from"./apiKey.df798544.js";import"./gateway.dd2bcb1f.js";import{M as B}from"./member.155dbe62.js";import{a as E}from"./project.30b2603f.js";import"./tables.cf074385.js";import"./router.b636156b.js";import"./Badge.503c1d1d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a2d15d8f.js";import"./BookOutlined.109c3ef4.js";import"./url.a5f3da23.js";import"./PhDotsThreeVertical.vue.0215e6b6.js";import"./index.26805589.js";import"./index.33db5ee2.js";import"./popupNotifcation.1a1aff4d.js";import"./record.aae20370.js";import"./string.1b82e875.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="0c856122-0f0a-4f57-bf0e-19ed0ceec40f",n._sentryDebugIdIdentifier="sentry-dbid-0c856122-0f0a-4f57-bf0e-19ed0ceec40f")}catch{}})();const ae=_({__name:"ApiKeys",setup(n){const a=k(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,y=new B,{loading:g,result:I,refetch:u}=V(async()=>Promise.all([c.list(s),E.get(s).then(e=>y.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),w=async e=>{const t=await c.create({projectId:s,name:e.name});u(),a.value=t.value},A=v(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=I.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var m;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:K(o.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),P(h,null,[l(b,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:p,create:w},null,8,["loading","table"]),l(i(j),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[f(N(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ae as default};
//# sourceMappingURL=ApiKeys.bc057f95.js.map
