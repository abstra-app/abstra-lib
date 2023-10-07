import{d as y,eA as _,o as w,N as I,J as b,b as h,c as v,u as x,x as D}from"./outputWidgets.e02beef6.js";import{a as C}from"./asyncComputed.8a8eb5ed.js";import{P as B}from"./project.9dff013a.js";import{B as k}from"./build.888c944d.js";import{r as A}from"./router.7d65ad37.js";import"./index.839163de.js";import{N as P,P as j}from"./icons.3483124d.js";import{C as L}from"./CrudView.19dbd3f9.js";import{f as M}from"./index.b048d0fb.js";import"./gateway.0489454f.js";import"./activeRecord.11465593.js";import"./pubsub.9c3ab07b.js";import"./Title.e22e1fa6.js";import"./index.912df764.js";import"./index.ead1f18e.js";import"./Form.245db243.js";import"./url.1be78005.js";import"./index.8f611a19.js";import"./index.abad8141.js";import"./index.d3576ea4.js";import"./index.d6c33de7.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="39e63ee3-907d-483b-a9d6-463e66acfd60",s._sentryDebugIdIdentifier="sentry-dbid-39e63ee3-907d-483b-a9d6-463e66acfd60")}catch{}})();function N(s){return s.charAt(0).toUpperCase()+s.slice(1)}const V=y({__name:"Builds",setup(s){const o=_().params.projectId;async function l(e){const t=`https://${e.subdomain}.abstra.app/_version`;return(await fetch(t)).text()}const{loading:c,result:p,refetch:d}=C(()=>Promise.all([k.list(o),B.get(o).then(l)]).then(([e,t])=>({builds:e,lastDeploymentId:t})));let a;w(()=>{a=setInterval(d,5e3)}),I(()=>{clearInterval(a)});function i(e,t){return e.id===t}function f(e,t,r){return i(e,r)?"Live":t===0&&e.status==="success"?"Transitioning":e.status==="aborted-by-user"||e.status==="aborted"?"Aborted":e.status==="failure"?"Failed":e.status==="in-progress"?"In progress":e.status==="pending"?"Pending":e.status==="success"?"Past":N(e.status)}function m(e,t,r){return i(e,r)?"green":t===0&&e.status==="success"?"blue":e.status==="aborted"||e.status==="aborted-by-user"?"orange":e.status==="failure"?"red":e.status==="in-progress"||e.status==="pending"?"yellow":"lightgray"}const g=b(()=>{const e=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}],t=p.value;return t?{columns:e,rows:t.builds.map((r,u)=>({key:r.id,cells:[{text:r.id.slice(0,8)},{text:M(r.createdAt,Date.now(),{addSuffix:!0})},{text:f(r,u,t.lastDeploymentId),tagColor:m(r,u,t.lastDeploymentId)},{text:"",actions:[{icon:P,label:"View application logs",onClick:()=>A.push({name:"logs",params:{projectId:o},query:{buildId:r.id}})},{icon:j,label:"Download files",onClick:()=>r.download()}]}]}))}:{columns:e,rows:[]}});return(e,t)=>(h(),v(L,{"entity-name":"build",loading:x(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:g.value,live:""},null,8,["loading","table"]))}});const re=D(V,[["__scopeId","data-v-8f23bc14"]]);export{re as default};
//# sourceMappingURL=Builds.9a3c111c.js.map
