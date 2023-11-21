import{d as _,eB as w,o as v,K as I,G as h,b,c as D,u as x,t as B}from"./outputWidgets.969742a9.js";import{a as C}from"./asyncComputed.8cf76354.js";import{P as k}from"./project.5b07423a.js";import{B as P}from"./build.41ed794e.js";import{r as A}from"./router.244d1b55.js";import"./columns.858f96a4.js";import{c as j}from"./string.5b9d4562.js";import{N as L,P as M}from"./icons.e336cce6.js";import{C as V}from"./CrudView.73e3b3b5.js";import{f as E}from"./index.b048d0fb.js";import"./gateway.68bce6f2.js";import"./activeRecord.5a6e314a.js";import"./pubsub.0444215c.js";import"./Base.c33fc232.js";import"./FormItem.8edb30fb.js";import"./transButton.6dbf3986.js";import"./Text.104ae35a.js";import"./Title.96d10d0c.js";import"./index.347431e6.js";import"./index.cf4c23b9.js";import"./url.dd7a9a63.js";import"./index.b9284466.js";import"./index.95743cb9.js";import"./index.5ac7932b.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="1c393030-fec1-4693-8e05-bb590c924a8a",s._sentryDebugIdIdentifier="sentry-dbid-1c393030-fec1-4693-8e05-bb590c924a8a")}catch{}})();const F=_({__name:"Builds",setup(s){const o=w().params.projectId;async function c(e){const t=`https://${e.subdomain}.abstra.app/_version`;return(await fetch(t)).text()}const{loading:p,result:d,refetch:f}=C(()=>Promise.all([P.list(o),k.get(o).then(c).catch(()=>{})]).then(([e,t])=>({builds:e,lastDeploymentId:t})));let a;v(()=>{a=setInterval(f,5e3)}),I(()=>{clearInterval(a)});function i(e,t){return e.id===t}function m(e,t,r){return i(e,r)?"Live":t===0&&e.status==="success"?"Transitioning":e.status==="aborted-by-user"||e.status==="aborted"?"Aborted":e.status==="failure"?"Failed":e.status==="in-progress"?"In progress":e.status==="pending"?"Pending":e.status==="success"?"Past":j(e.status)}function g(e,t,r){return i(e,r)?"green":t===0&&e.status==="success"?"blue":e.status==="aborted"||e.status==="aborted-by-user"?"orange":e.status==="failure"?"red":e.status==="in-progress"||e.status==="pending"?"yellow":"lightgray"}const y=h(()=>{const e=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}],t=d.value;return t?{columns:e,rows:t.builds.map((r,l)=>{var u;return{key:r.id,cells:[{text:r.id.slice(0,8)},{text:E(r.createdAt,Date.now(),{addSuffix:!0})},{text:m(r,l,t.lastDeploymentId),tagColor:g(r,l,t.lastDeploymentId),hover:(u=r.log)!=null?u:void 0},{text:"",actions:[{icon:L,label:"View application logs",onClick:()=>A.push({name:"logs",params:{projectId:o},query:{buildId:r.id}})},{icon:M,label:"Download files",onClick:()=>r.download()}]}]}})}:{columns:e,rows:[]}});return(e,t)=>(b(),D(V,{"entity-name":"build",loading:x(p),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:y.value,live:""},null,8,["loading","table"]))}});const ae=B(F,[["__scopeId","data-v-f82ddf5d"]]);export{ae as default};
//# sourceMappingURL=Builds.630c567b.js.map
