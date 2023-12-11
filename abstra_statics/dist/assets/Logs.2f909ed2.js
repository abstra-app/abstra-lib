import{d as F,r as I,H as B,G as k,eB as $,F as z,eH as E,b as f,c as v,w as u,u as e,eG as P,f as l,aq as j,ad as R,cq as G,bu as H,cE as D,eu as O,eC as V,a_ as M,bR as J,cm as K}from"./outputWidgets.9950002f.js";import{L,a as Q}from"./Log.32f5f627.js";import{A as y}from"./router.0739d4c1.js";import{B as W}from"./build.14242478.js";import"./index.cdb83fce.js";import{a as X}from"./asyncComputed.dd93214c.js";import{R as Y}from"./dayjs.bb2ad8b3.js";import{f as Z}from"./index.b048d0fb.js";import{A as ee}from"./Title.929a8d22.js";import{A as N}from"./Text.7adc7978.js";import{A as c,F as te}from"./Base.0185167f.js";import{T as ae}from"./index.d33fbfa2.js";import"./gateway.087bdcc3.js";import"./ant-design.78168c08.js";import"./transButton.e0c01097.js";import"./index.6590e753.js";import"./record.971a3a14.js";import"./pubsub.e4d3c2ae.js";import"./index.3b18190e.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g=new Error().stack;g&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[g]="76fd7c49-250c-4e02-9dfb-6914a69aefda",p._sentryDebugIdIdentifier="sentry-dbid-76fd7c49-250c-4e02-9dfb-6914a69aefda")}catch{}})();const Ie=F({__name:"Logs",setup(p){function g(a){return Z(a,new Date,{addSuffix:!0})}const o=I(1),d=I(10);B([o,d],([a,t])=>{o.value=a,d.value=t,A()});const h=k(()=>{var a,t;return{runtimes:(a=i.value)==null?void 0:a.filters.runtimes.map(({runtimeName:r,runtimeType:n})=>({label:`[${n}] ${r}`,value:r})),events:(t=i.value)==null?void 0:t.filters.events.map(r=>({label:`[${r.runtimeType}] ${r.event}`,value:r.event}))}}),m=$(),b=m.params.projectId;function S(){const a=[];return typeof m.query.runtimeId=="string"&&a.push(m.query.runtimeId),typeof m.query.runtimeTitle=="string"&&a.push(m.query.runtimeTitle),a}const s=z({selectedBuild:m.query.buildId||"latest",dateRange:void 0,search:"",runtimeNames:S(),events:[]}),T=E.exports.debounce(async()=>{await A(),w.value=!1},500),w=I(!1);B(s,()=>{w.value=!0,o.value=1,T()});const U=k(()=>i.value?[{label:"Latest",value:"latest"},{label:"All",value:"all"},...i.value.builds.map(a=>({label:`${g(a.createdAt)} (${a.id.slice(0,8)})`,value:a.id}))]:[{label:"Latest",value:"latest"},{label:"All",value:"all"}]),q=a=>{s.selectedBuild=a,A()},{loading:x,result:i,refetch:A}=X(()=>{var a,t;return Promise.all([L.list({projectId:b,limit:d.value,offset:(o.value-1)*d.value,buildId:s.selectedBuild,from:(a=s.dateRange)==null?void 0:a[0].toDate(),to:(t=s.dateRange)==null?void 0:t[1].toDate(),search:s.search,executionIds:[],runtimeNames:s.runtimeNames,events:s.events}),W.list(b),L.filters(b)]).then(([{total:r,logs:n},_,C])=>P({total:r,logs:n,builds:_,filters:C}))});return(a,t)=>(f(),v(e(D),{direction:"vertical"},{default:u(()=>{var r;return[l(e(ee),null,{default:u(()=>[j("Logs")]),_:1}),l(e(te),{layout:"vertical"},{default:u(()=>[l(e(N),{gutter:10},{default:u(()=>[l(e(y),{span:12},{default:u(()=>[l(e(c),{label:"Build"},{default:u(()=>[l(e(R),{value:s.selectedBuild,"onUpdate:value":t[0]||(t[0]=n=>s.selectedBuild=n),options:U.value,"option-label":"label","option-value":"value",filter:!1,onChange:q},null,8,["value","options"])]),_:1})]),_:1}),l(e(y),{span:12},{default:u(()=>[l(e(c),{label:"Date"},{default:u(()=>[l(e(Y),{value:s.dateRange,"onUpdate:value":t[1]||(t[1]=n=>s.dateRange=n),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1})]),_:1}),l(e(N),{gutter:10},{default:u(()=>[l(e(y),{span:12},{default:u(()=>[l(e(c),{label:"Runtimes"},{default:u(()=>[l(e(R),{value:s.runtimeNames,"onUpdate:value":t[2]||(t[2]=n=>s.runtimeNames=n),options:h.value.runtimes,mode:"multiple"},null,8,["value","options"])]),_:1})]),_:1}),l(e(y),{span:12},{default:u(()=>[l(e(c),{label:"Events"},{default:u(()=>[l(e(R),{value:s.events,"onUpdate:value":t[3]||(t[3]=n=>s.events=n),options:h.value.events,mode:"multiple"},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),l(e(c),{label:"Search"},{default:u(()=>[l(e(G),{value:s.search,"onUpdate:value":t[4]||(t[4]=n=>s.search=n),type:"search"},null,8,["value"])]),_:1})]),_:1}),e(x)||w.value?(f(),v(e(H),{key:0,style:{width:"100%"}})):(r=e(i))!=null&&r.logs.length?(f(),v(e(D),{key:1,direction:"vertical",style:{width:"100%"}},{default:u(()=>[l(e(ae),null,{default:u(()=>[(f(!0),O(M,null,V(e(i).logs,(n,_)=>(f(),v(Q,{key:_,log:n},null,8,["log"]))),128))]),_:1}),l(e(J),{current:o.value,"onUpdate:current":t[5]||(t[5]=n=>o.value=n),"page-size":d.value,"onUpdate:pageSize":t[6]||(t[6]=n=>d.value=n),"show-size-changer":"",total:e(i).total},null,8,["current","page-size","total"])]),_:1})):(f(),v(e(K),{key:2}))]}),_:1}))}});export{Ie as default};
//# sourceMappingURL=Logs.2f909ed2.js.map
