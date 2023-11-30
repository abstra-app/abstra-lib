import{d as _,eB as w,o as v,K as I,G as h,b,c as D,u as x,t as B}from"./outputWidgets.19924e9b.js";import{a as C}from"./asyncComputed.896265c3.js";import{P as k}from"./project.ce5469ae.js";import{B as P}from"./build.a38f8ecd.js";import{r as A}from"./router.6983b99e.js";import"./columns.458f1de2.js";import{c as j}from"./string.245c25a1.js";import{D as F,F as L}from"./icons.20b30848.js";import{C as M}from"./CrudView.576f9542.js";import{f as V}from"./index.b048d0fb.js";import"./gateway.4ba86356.js";import"./record.d5466676.js";import"./pubsub.a053ec76.js";import"./Base.12e52196.js";import"./transButton.2a618c23.js";import"./Text.85b7e696.js";import"./Title.95a57f08.js";import"./index.05e45e44.js";import"./url.97aa8b31.js";import"./index.486f6ab0.js";import"./index.66cfc052.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="8f70e9d7-b0dd-4acd-8359-96b5cd098c7f",s._sentryDebugIdIdentifier="sentry-dbid-8f70e9d7-b0dd-4acd-8359-96b5cd098c7f")}catch{}})();const E=_({__name:"Builds",setup(s){const o=w().params.projectId;async function d(e){const t=`https://${e.subdomain}.abstra.app/_version`;return(await fetch(t)).text()}const{loading:c,result:p,refetch:f}=C(()=>Promise.all([P.list(o),k.get(o).then(d).catch(()=>{})]).then(([e,t])=>({builds:e,lastDeploymentId:t})));let a;v(()=>{a=setInterval(f,5e3)}),I(()=>{clearInterval(a)});function i(e,t){return e.id===t}function m(e,t,r){return i(e,r)?"Live":t===0&&e.status==="success"?"Transitioning":e.status==="aborted-by-user"||e.status==="aborted"?"Aborted":e.status==="failure"?"Failed":e.status==="in-progress"?"In progress":e.status==="pending"?"Pending":e.status==="success"?"Past":j(e.status)}function g(e,t,r){return i(e,r)?"green":t===0&&e.status==="success"?"blue":e.status==="aborted"||e.status==="aborted-by-user"?"orange":e.status==="failure"?"red":e.status==="in-progress"||e.status==="pending"?"yellow":"lightgray"}const y=h(()=>{const e=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}],t=p.value;return t?{columns:e,rows:t.builds.map((r,l)=>{var u;return{key:r.id,cells:[{text:r.id.slice(0,8)},{text:V(r.createdAt,Date.now(),{addSuffix:!0})},{text:m(r,l,t.lastDeploymentId),tagColor:g(r,l,t.lastDeploymentId),hover:(u=r.log)!=null?u:void 0},{text:"",actions:[{icon:F,label:"View application logs",onClick:()=>A.push({name:"logs",params:{projectId:o},query:{buildId:r.id}})},{icon:L,label:"Download files",onClick:()=>r.download()}]}]}})}:{columns:e,rows:[]}});return(e,t)=>(b(),D(M,{"entity-name":"build",loading:x(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:y.value,live:""},null,8,["loading","table"]))}});const se=B(E,[["__scopeId","data-v-f82ddf5d"]]);export{se as default};
//# sourceMappingURL=Builds.450ed73a.js.map
