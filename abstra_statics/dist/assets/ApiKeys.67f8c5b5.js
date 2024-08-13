import{d as A,e as b,eu as x,f as _,W as k,b as l,u as i,w as d,aJ as C,eP as P,eI as v,o as h,cW as D,ax as y,cX as M,et as j,cA as N}from"./vue-router.89c5241c.js";import{a as K}from"./asyncComputed.932bcda8.js";import{A as c}from"./apiKey.fd133f9f.js";import"./gateway.cef1235f.js";import{M as T}from"./member.d44d2941.js";import{P as V}from"./project.abfffe30.js";import"./tables.1f07bfb0.js";import{C as B}from"./CrudView.ce677757.js";import"./popupNotifcation.d4d00fb7.js";import"./record.d510c2a7.js";import"./string.e3ce3900.js";import"./router.0ec844a1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.070ea75e.js";import"./BookOutlined.0a7f3aed.js";import"./url.5a350b4c.js";import"./PhDotsThree.vue.d05c6458.js";import"./index.6bdf769f.js";import"./index.be721747.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="f241ee2f-d689-46e7-b066-8786ad5ad0d0",n._sentryDebugIdIdentifier="sentry-dbid-f241ee2f-d689-46e7-b066-8786ad5ad0d0")}catch{}})();const te=A({__name:"ApiKeys",setup(n){const o=b(null),p=[{key:"name",label:"API key name"}],s=x().params.projectId,{loading:f,result:g,refetch:u}=K(async()=>Promise.all([c.list(s),V.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(a=>({apiKey:a,member:t.find(r=>r.authorId===a.ownerId)})))),I=async e=>{const t=await c.create({projectId:s,name:e.name});u(),o.value=t.value},w=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:a,member:r})=>{var m;return{key:a.id,cells:[{type:"text",text:a.name},{type:"text",text:P(a.createdAt)},{type:"text",text:(m=r==null?void 0:r.email)!=null?m:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:v,dangerous:!0,onClick:async()=>{await c.delete(s,a.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(h(),k(C,null,[l(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:w.value,fields:p,onCreate:I},null,8,["loading","table"]),l(i(N),{open:!!o.value,title:"Api key generated",onCancel:t[0]||(t[0]=a=>o.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(D),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(M),{code:"",copyable:""},{default:d(()=>[y(j(o.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{te as default};
//# sourceMappingURL=ApiKeys.67f8c5b5.js.map
