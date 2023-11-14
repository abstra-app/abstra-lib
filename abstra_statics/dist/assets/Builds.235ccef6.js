import{d as _,ey as w,o as b,K as v,G as I,b as h,c as D,u as x,t as B}from"./outputWidgets.6ea16f91.js";import{a as C}from"./asyncComputed.4934668b.js";import{P as k}from"./project.c32b89d6.js";import{B as P}from"./build.a4be15cc.js";import{r as A}from"./router.3e26c7a1.js";import"./columns.47d31c1c.js";import{c as j}from"./string.5664cda0.js";import{N as L,P as M}from"./icons.3441c6f2.js";import{C as V}from"./CrudView.6ebd60f4.js";import{f as E}from"./index.b048d0fb.js";import"./gateway.0ee3dc23.js";import"./activeRecord.e7bfaa83.js";import"./pubsub.a44e3878.js";import"./Form.b09781a6.js";import"./Title.9d3741d4.js";import"./transButton.5806ea5a.js";import"./Text.788879bb.js";import"./index.b84602c2.js";import"./index.cf4c23b9.js";import"./url.05cf80ca.js";import"./index.7fe696e1.js";import"./index.c32a4fe3.js";import"./index.e0048726.js";import"./index.e35efce2.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="b946a95b-1363-441b-9f9d-55e1ecf7d114",s._sentryDebugIdIdentifier="sentry-dbid-b946a95b-1363-441b-9f9d-55e1ecf7d114")}catch{}})();const F=_({__name:"Builds",setup(s){const o=w().params.projectId;async function d(e){const t=`https://${e.subdomain}.abstra.app/_version`;return(await fetch(t)).text()}const{loading:c,result:p,refetch:f}=C(()=>Promise.all([P.list(o),k.get(o).then(d).catch(()=>{})]).then(([e,t])=>({builds:e,lastDeploymentId:t})));let a;b(()=>{a=setInterval(f,5e3)}),v(()=>{clearInterval(a)});function i(e,t){return e.id===t}function m(e,t,r){return i(e,r)?"Live":t===0&&e.status==="success"?"Transitioning":e.status==="aborted-by-user"||e.status==="aborted"?"Aborted":e.status==="failure"?"Failed":e.status==="in-progress"?"In progress":e.status==="pending"?"Pending":e.status==="success"?"Past":j(e.status)}function g(e,t,r){return i(e,r)?"green":t===0&&e.status==="success"?"blue":e.status==="aborted"||e.status==="aborted-by-user"?"orange":e.status==="failure"?"red":e.status==="in-progress"||e.status==="pending"?"yellow":"lightgray"}const y=I(()=>{const e=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}],t=p.value;return t?{columns:e,rows:t.builds.map((r,l)=>{var u;return{key:r.id,cells:[{text:r.id.slice(0,8)},{text:E(r.createdAt,Date.now(),{addSuffix:!0})},{text:m(r,l,t.lastDeploymentId),tagColor:g(r,l,t.lastDeploymentId),hover:(u=r.log)!=null?u:void 0},{text:"",actions:[{icon:L,label:"View application logs",onClick:()=>A.push({name:"logs",params:{projectId:o},query:{buildId:r.id}})},{icon:M,label:"Download files",onClick:()=>r.download()}]}]}})}:{columns:e,rows:[]}});return(e,t)=>(h(),D(V,{"entity-name":"build",loading:x(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:y.value,live:""},null,8,["loading","table"]))}});const ae=B(F,[["__scopeId","data-v-f82ddf5d"]]);export{ae as default};
//# sourceMappingURL=Builds.235ccef6.js.map
