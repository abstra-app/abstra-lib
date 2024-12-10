import{C as A}from"./CrudView.0f09fc7d.js";import{d as _,e as k,ea as x,f as v,o as C,Y as P,b as l,u as i,w as d,aS as h,dd as D,aG as y,de as M,e9 as N,cN as j,e_ as K,ep as T}from"./index.e1ec3e10.js";import{a as V}from"./asyncComputed.63476e9c.js";import{A as p}from"./apiKey.caec1219.js";import"./gateway.ab874197.js";import{M as B}from"./member.c5bc2b31.js";import{a as E}from"./project.54e1d92a.js";import"./tables.6ebfa228.js";import"./router.eb7833e2.js";import"./Badge.d52f888f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.74d2d7e6.js";import"./BookOutlined.24fb62d6.js";import"./url.ab92de50.js";import"./PhDotsThreeVertical.vue.4d71fc8b.js";import"./index.3b0dcd0b.js";import"./index.73a3b654.js";import"./popupNotifcation.29a171ed.js";import"./record.e1888f50.js";import"./string.569a6924.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="256d99ab-73de-4884-aa85-2b906e3fab5e",n._sentryDebugIdIdentifier="sentry-dbid-256d99ab-73de-4884-aa85-2b906e3fab5e")}catch{}})();const oe=_({__name:"ApiKeys",setup(n){const o=k(null),c=[{key:"name",label:"API key name"}],s=x().params.projectId,f=new B,{loading:g,result:b,refetch:u}=V(async()=>Promise.all([p.list(s),E.get(s).then(e=>f.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});u(),o.value=t.value},w=v(()=>{var e,t;return{columns:[{title:"Name"},{title:"Creation date"},{title:"Owner"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:K(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await p.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),P(h,null,[l(A,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(g),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:c,create:I},null,8,["loading","table"]),l(i(j),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(N(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{oe as default};
//# sourceMappingURL=ApiKeys.d294b935.js.map
