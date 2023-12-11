import{f as a,ez as A,eZ as M,e_ as Q,d as S,o as z,a0 as V,u as e,b as i,c,bu as L,eu as b,a_ as C,eC as D,w as s,t as $,F as E,aq as p,eD as m,cm as P,eA as q,ew as v,bS as U,bv as G,bt as H,e as R,I,cE as k}from"./outputWidgets.9950002f.js";import{a as N}from"./asyncComputed.dd93214c.js";import{a as B}from"./router.0739d4c1.js";import"./index.cdb83fce.js";import{C as Z}from"./gateway.087bdcc3.js";import{C as J,L as W,a as X}from"./Log.32f5f627.js";import{B as Y}from"./BaseLayout.a7203274.js";import{f as K}from"./index.b048d0fb.js";import{T as ee}from"./index.d33fbfa2.js";import{A as te}from"./index.a67b91f6.js";import{c as oe}from"./index.818d7fde.js";import{T as ne,A as re}from"./TabPane.3b17365a.js";import{E as se,a as ae,f as ie,j as le,h as ue}from"./icons.569fc936.js";import{c as y}from"./Text.7adc7978.js";import{a as ce,A as de}from"./index.7600f95b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="21703bcd-3ab4-4d1b-86d4-8cf41ade9aea",n._sentryDebugIdIdentifier="sentry-dbid-21703bcd-3ab4-4d1b-86d4-8cf41ade9aea")}catch{}})();function O(n){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(o).filter(function(d){return Object.getOwnPropertyDescriptor(o,d).enumerable}))),l.forEach(function(d){pe(n,d,o[d])})}return n}function pe(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}var j=function(t,o){var l=O({},t,o.attrs);return a(A,O({},l,{icon:M}),null)};j.displayName="CloseCircleFilled";j.inheritAttrs=!1;const fe=j;function T(n){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(o).filter(function(d){return Object.getOwnPropertyDescriptor(o,d).enumerable}))),l.forEach(function(d){me(n,d,o[d])})}return n}function me(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}var w=function(t,o){var l=T({},t,o.attrs);return a(A,T({},l,{icon:Q}),null)};w.displayName="LoadingOutlined";w.inheritAttrs=!1;const ye=w;class ge{list({buildId:t,...o}){return Z.post(`builds/${t}/executions`,o)}}const _e=new ge;class x{constructor(t){this.dto=t}static fromDTO(t){return new x(t)}static async list(t){const o=await _e.list(t);return{total:o.total,executions:o.executions.map(x.fromDTO)}}get id(){return this.dto.executionId}get shortId(){return this.dto.executionId.slice(0,8)}get startTime(){return this.dto.startTime}get endTime(){return this.dto.endTime}get isSuccessful(){return this.dto.isSuccessful}get title(){return`${this.startTime} -> ${this.endTime||"running"}`}}const be={key:1,class:"flex-row"},he={key:2},Ie=S({__name:"ExecutionsShort",props:{logQuery:{}},emits:["select"],setup(n,{emit:t}){const o=n,{loading:l,result:d,refetch:h}=N(()=>x.list({buildId:o.logQuery.buildId,runtimeNames:[o.logQuery.runtimeId,o.logQuery.runtimeTitle],limit:5})),g=u=>{t("select",u)};let f=null;return z(()=>{f=setInterval(()=>h(),15e3)}),V(()=>{f&&clearInterval(f)}),(u,_)=>e(l)?(i(),c(e(L),{key:0})):e(d)?(i(),b("div",be,[(i(!0),b(C,null,D(e(d).executions,r=>(i(),c(e(B),{key:r.id,title:r.title,onClick:F=>g(r)},{default:s(()=>[r.isSuccessful?(i(),c(e(J),{key:0,style:{color:"#33b891"}})):r.endTime?(i(),c(e(fe),{key:1,style:{color:"#fa675c"}})):(i(),c(e(ye),{key:2}))]),_:2},1032,["title","onClick"]))),128))])):(i(),b("div",he,"Some error"))}});const ve=$(Ie,[["__scopeId","data-v-5ed69d38"]]),xe=S({__name:"ExecutionInspector",props:{execution:{},projectId:{},buildId:{}},emits:["close"],setup(n,{emit:t}){const o=n,l=E({selectedTab:"logs"}),d=["success","stderr","execution-id","started","client-start","program-start-failed","start","form-response","program:end","failed","connection-closed","stdout","error"],h=K(new Date(o.execution.startTime),new Date,{addSuffix:!0}),{loading:g,result:f}=N(async()=>await W.list({projectId:o.projectId,buildId:o.buildId,executionIds:[o.execution.id],limit:1e3,runtimeNames:[],search:"",offset:0,events:d}));return(u,_)=>(i(),c(e(te),{open:"",title:`Execution: ${u.execution.shortId}`,width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:_[1]||(_[1]=r=>t("close"))},{extra:s(()=>[p(m(e(h)),1)]),default:s(()=>[a(Y,null,{navbar:s(()=>[a(e(oe),{style:{padding:"5px 10px"}},{footer:s(()=>[a(e(ne),{"active-key":l.selectedTab,"onUpdate:activeKey":_[0]||(_[0]=r=>l.selectedTab=r)},{default:s(()=>[a(e(re),{key:"logs",tab:"Logs"})]),_:1},8,["active-key"])]),_:1})]),content:s(()=>[e(g)?(i(),c(e(L),{key:0})):e(f)?(i(),c(e(ee),{key:1},{default:s(()=>[(i(!0),b(C,null,D(e(f).logs,r=>(i(),c(X,{key:r.createdAt.toTimeString(),log:r},null,8,["log"]))),128))]),_:1})):(i(),c(e(P),{key:2}))]),_:1})]),_:1},8,["title"]))}});const ke=$(xe,[["__scopeId","data-v-62d82d69"]]),Se={style:{display:"flex","align-items":"center",gap:"5px"}},Ce={key:1},ze=S({__name:"component",props:{buildSpec:{},subdomain:{}},setup(n){const t=n,o=q(),l=E({execution:null}),d=()=>{l.execution=null},h=u=>{l.execution=u},g=u=>!t.subdomain||u.type!="form"?"":`https://${t.subdomain}.abstra.app/${u.path}`,f=u=>{o.push({name:"logs",params:{projectId:t.buildSpec.projectId},query:u.logQuery})};return(u,_)=>(i(),b(C,null,[u.buildSpec.runtimes.length>0?(i(),c(e(de),{key:0,"item-layout":"horizontal","data-source":u.buildSpec.runtimes},{renderItem:s(({item:r})=>[a(e(ce),null,{actions:s(()=>[a(ve,{"log-query":r.logQuery,"project-id":u.buildSpec.projectId,onSelect:h},null,8,["log-query","project-id"]),a(e(U),null,{overlay:s(()=>[a(e(G),null,{default:s(()=>[a(e(H),{onClick:F=>f(r)},{default:s(()=>[R("div",Se,[a(I,{path:e(se)},null,8,["path"]),a(e(y),null,{default:s(()=>[p(" View Logs")]),_:1})])]),_:2},1032,["onClick"])]),_:2},1024)]),default:s(()=>[a(I,{path:e(ae),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)]),default:s(()=>[r.type=="form"?(i(),c(e(k),{key:0,size:"large"},{default:s(()=>[a(I,{path:e(ie)},null,8,["path"]),g(r)?(i(),c(e(B),{key:0,href:g(r),strong:""},{default:s(()=>[p(m(r.title),1)]),_:2},1032,["href"])):(i(),c(e(y),{key:1,strong:""},{default:s(()=>[p(m(r.title),1)]),_:2},1024)),a(e(y),{type:"secondary",code:""},{default:s(()=>[p("/"+m(r.path),1)]),_:2},1024)]),_:2},1024)):v("",!0),r.type=="job"?(i(),c(e(k),{key:1,size:"large"},{default:s(()=>[a(I,{path:e(le)},null,8,["path"]),a(e(y),{strong:""},{default:s(()=>[p(m(r.title),1)]),_:2},1024),a(e(y),{type:"secondary",code:""},{default:s(()=>[p(m(r.schedule),1)]),_:2},1024)]),_:2},1024)):v("",!0),r.type=="hook"?(i(),c(e(k),{key:2,size:"large"},{default:s(()=>[a(I,{path:e(ue)},null,8,["path"]),a(e(y),{strong:""},{default:s(()=>[p(m(r.title),1)]),_:2},1024),a(e(y),{type:"secondary",code:""},{default:s(()=>[p("/_hooks/"+m(r.path),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),_:2},1024)]),_:1},8,["data-source"])):(i(),b("div",Ce,[a(e(P),{description:"No runtimes found. Make sure your project has forms, hooks or jobs before deploying it"})])),l.execution?(i(),c(ke,{key:2,execution:l.execution,"project-id":u.buildSpec.projectId,"build-id":u.buildSpec.buildId,onClose:d},null,8,["execution","project-id","build-id"])):v("",!0)],64))}});export{ze as _};
//# sourceMappingURL=component.vue_vue_type_script_setup_true_lang.f98b70cc.js.map
