import{d as y,ez as _,o as w,L as I,H as b,b as v,c as h,u as D,v as x}from"./outputWidgets.26432679.js";import{a as B}from"./asyncComputed.8df159aa.js";import{P as C}from"./project.ba231e25.js";import{B as k}from"./build.76124055.js";import{r as P}from"./router.7a8d79b5.js";import"./columns.2dd21624.js";import{c as A}from"./string.5be13edc.js";import{N as L,P as j}from"./icons.3e1b53b9.js";import{C as M}from"./CrudView.e9eea934.js";import{f as V}from"./index.b048d0fb.js";import"./gateway.60fd1ebf.js";import"./activeRecord.9d3b5765.js";import"./pubsub.08286f38.js";import"./Title.c4ac850f.js";import"./index.7525b870.js";import"./index.f4ac7424.js";import"./Text.75fc17ff.js";import"./Form.2a6ff15f.js";import"./url.8c6cc8c7.js";import"./index.b8d25148.js";import"./index.dbd4c5b5.js";import"./index.d321bc9f.js";import"./index.d196cbfa.js";import"./index.9d9f0030.js";import"./index.d956590f.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="2ce593fd-edcb-49c5-9b51-5a090645d72a",s._sentryDebugIdIdentifier="sentry-dbid-2ce593fd-edcb-49c5-9b51-5a090645d72a")}catch{}})();const z=y({__name:"Builds",setup(s){const o=_().params.projectId;async function u(e){const t=`https://${e.subdomain}.abstra.app/_version`;return(await fetch(t)).text()}const{loading:c,result:p,refetch:d}=B(()=>Promise.all([k.list(o),C.get(o).then(u).catch(()=>{})]).then(([e,t])=>({builds:e,lastDeploymentId:t})));let a;w(()=>{a=setInterval(d,5e3)}),I(()=>{clearInterval(a)});function i(e,t){return e.id===t}function m(e,t,r){return i(e,r)?"Live":t===0&&e.status==="success"?"Transitioning":e.status==="aborted-by-user"||e.status==="aborted"?"Aborted":e.status==="failure"?"Failed":e.status==="in-progress"?"In progress":e.status==="pending"?"Pending":e.status==="success"?"Past":A(e.status)}function f(e,t,r){return i(e,r)?"green":t===0&&e.status==="success"?"blue":e.status==="aborted"||e.status==="aborted-by-user"?"orange":e.status==="failure"?"red":e.status==="in-progress"||e.status==="pending"?"yellow":"lightgray"}const g=b(()=>{const e=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}],t=p.value;return t?{columns:e,rows:t.builds.map((r,l)=>({key:r.id,cells:[{text:r.id.slice(0,8)},{text:V(r.createdAt,Date.now(),{addSuffix:!0})},{text:m(r,l,t.lastDeploymentId),tagColor:f(r,l,t.lastDeploymentId)},{text:"",actions:[{icon:L,label:"View application logs",onClick:()=>P.push({name:"logs",params:{projectId:o},query:{buildId:r.id}})},{icon:j,label:"Download files",onClick:()=>r.download()}]}]}))}:{columns:e,rows:[]}});return(e,t)=>(v(),h(M,{"entity-name":"build",loading:D(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:g.value,live:""},null,8,["loading","table"]))}});const ae=x(z,[["__scopeId","data-v-2a278490"]]);export{ae as default};
//# sourceMappingURL=Builds.dbf6fc90.js.map
