import{d as m,ey as l,H as c,b as d,c as u,u as f,v as _}from"./registerWidgets.7c26f935.js";import{a as y}from"./asyncComputed.cfc29dee.js";import"./gateway.e3086290.js";import{B as b}from"./build.aec62057.js";import"./index.bb66c593.js";import{L as g,N as w}from"./icons.d315d375.js";import{r as I}from"./console.3b9658e3.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.7813a1ae.js";import{f as v}from"./index.b048d0fb.js";import"./passwordlessManager.5d139655.js";import"./pubsub.c3a63076.js";import"./storage.53222b6f.js";import"./activeRecord.d07557d8.js";import"./index.1d4b40b5.js";import"./Form.ac091445.js";import"./Title.9a021125.js";import"./index.4f17481f.js";import"./index.9a7a96c9.js";import"./index.984e202c.js";import"./dayjs.a6cc0f96.js";import"./index.a762c3c3.js";import"./index.a5f338b1.js";import"./index.dee97b44.js";import"./index.8e89086e.js";import"./index.315bc9f8.js";import"./index.01e54af7.js";import"./index.f889318a.js";import"./index.611607c8.js";import"./index.ce17852e.js";import"./index.8b55a248.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="4cb39c32-1c69-4693-af01-504c230baa72",o._sentryDebugIdIdentifier="sentry-dbid-4cb39c32-1c69-4693-af01-504c230baa72")}catch{}})();const B=m({__name:"Builds",setup(o){const r=l().params.projectId,{loading:s,result:n}=y(()=>b.list(r)),p=c(()=>{var a,i;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(i=(a=n.value)==null?void 0:a.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8)},{text:v(t.createdAt,Date.now(),{addSuffix:!0})},{text:t.status+(t.log?": "+t.log:"")},{text:"",actions:[{icon:g,label:"View logs",onClick:()=>I.push({name:"logs",params:{projectId:r},query:{buildId:t.id}})},{icon:w,label:"Download files",onClick:()=>t.download()}]}]})))!=null?i:[]}});return(a,i)=>(d(),u(x,{"entity-name":"build",loading:f(s),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:p.value},null,8,["loading","table"]))}});const tt=_(B,[["__scopeId","data-v-03f70823"]]);export{tt as default};
//# sourceMappingURL=Builds.6f294a2e.js.map
