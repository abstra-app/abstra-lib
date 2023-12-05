import{d as Y,r as R,H as U,G as F,eB as J,F as K,eH as Q,b as i,c as y,w as r,u as e,eG as W,f as s,aq as E,ad as T,cr as X,bu as Z,cF as S,eu as _,eC as ee,ew as P,eD as c,e as x,cN as te,a_ as ae,bR as le,cn as se,t as ne}from"./outputWidgets.5ad528ac.js";import{t as re}from"./ant-design.e87f93d6.js";import{C as j}from"./gateway.b7cdac3e.js";import{A as C}from"./router.204c9874.js";import{B as oe}from"./build.2a60531a.js";import"./index.32fe22d6.js";import{a as ue}from"./asyncComputed.1a18a3c4.js";import{R as ie}from"./dayjs.0759ce96.js";import{f as de}from"./index.b048d0fb.js";import{A as pe}from"./Title.9d17c444.js";import{A as z,a as ce}from"./Text.856daa24.js";import{A as h,F as me}from"./Base.1d4cd3d4.js";import{A as fe,C as ve}from"./CollapsePanel.1a8713a3.js";import{A as k}from"./index.6d8316a6.js";import"./transButton.6b6b1eee.js";import"./index.c8e66a6c.js";import"./record.ff133c66.js";import"./pubsub.acdd8ee4.js";import"./index.580c2390.js";(function(){try{var b=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(b._sentryDebugIds=b._sentryDebugIds||{},b._sentryDebugIds[t]="ad75ef9a-507a-45b9-bf59-3a3e271c6519",b._sentryDebugIdIdentifier="sentry-dbid-ad75ef9a-507a-45b9-bf59-3a3e271c6519")}catch{}})();class ye{list(t){return j.post(`projects/${t.projectId}/builds/${t.buildId}/logs`,t)}filters(t){return j.get(`projects/${t}/log-filters`)}}const O=new ye;class A{constructor(t,d,m,w,I,f,g){this.executionId=t,this.runtimeType=d,this.runtimeName=m,this.payload=w,this.event=I,this.buildId=f,this.createdAt=g}static fromDTO(t){return new A(t.executionId,t.runtimeType,t.runtimeName,t.payload,t.event,t.buildId,new Date(t.createdAt))}static async list(t){const d=await O.list(t);return{total:d.total,logs:d.logs.map(A.fromDTO)}}static async filters(t){return O.filters(t)}}const be={key:0},_e=["title"],ge=["textContent"],he=["textContent"],Ae=["textContent"],we=["textContent"],Ie=Y({__name:"Logs",setup(b){function t(a){return de(a,new Date,{addSuffix:!0})}const d=R(1),m=R(10);U([d,m],([a,n])=>{d.value=a,m.value=n,B()});function w(a){return(a.event==="stderr"||a.event==="stdout")&&typeof a.payload.log=="string"&&a.payload.log.trim().length===0}const I=F(()=>{var a,n;return{runtimes:(a=v.value)==null?void 0:a.filters.runtimes.map(({runtimeName:p,runtimeType:u})=>({label:`[${u}] ${p}`,value:p})),events:(n=v.value)==null?void 0:n.filters.events.map(p=>({label:`[${p.runtimeType}] ${p.event}`,value:p.event}))}}),f=J(),g=f.params.projectId;function q(){const a=[];return typeof f.query.runtimeId=="string"&&a.push(f.query.runtimeId),typeof f.query.runtimeTitle=="string"&&a.push(f.query.runtimeTitle),a}const o=K({selectedBuild:f.query.buildId||"latest",dateRange:void 0,search:"",runtimeNames:q(),events:[]}),V=Q.exports.debounce(async()=>{await B(),D.value=!1},500),D=R(!1);U(o,()=>{D.value=!0,d.value=1,V()});const G=F(()=>v.value?[{label:"Latest",value:"latest"},{label:"All",value:"all"},...v.value.builds.map(a=>({label:`${t(a.createdAt)} (${a.id.slice(0,8)})`,value:a.id}))]:[{label:"Latest",value:"latest"},{label:"All",value:"all"}]),H=a=>{o.selectedBuild=a,B()},{loading:M,result:v,refetch:B}=ue(()=>{var a,n;return Promise.all([A.list({projectId:g,limit:m.value,offset:(d.value-1)*m.value,buildId:o.selectedBuild,from:(a=o.dateRange)==null?void 0:a[0].toDate(),to:(n=o.dateRange)==null?void 0:n[1].toDate(),search:o.search,runtimeNames:o.runtimeNames,events:o.events}),oe.list(g),A.filters(g)]).then(([{total:p,logs:u},l,N])=>W({total:p,logs:u,builds:l,filters:N}))});return(a,n)=>(i(),y(e(S),{direction:"vertical"},{default:r(()=>{var p;return[s(e(pe),null,{default:r(()=>[E("Logs")]),_:1}),s(e(me),{layout:"vertical"},{default:r(()=>[s(e(z),{gutter:10},{default:r(()=>[s(e(C),{span:12},{default:r(()=>[s(e(h),{label:"Build"},{default:r(()=>[s(e(T),{value:o.selectedBuild,"onUpdate:value":n[0]||(n[0]=u=>o.selectedBuild=u),options:G.value,"option-label":"label","option-value":"value",filter:!1,onChange:H},null,8,["value","options"])]),_:1})]),_:1}),s(e(C),{span:12},{default:r(()=>[s(e(h),{label:"Date"},{default:r(()=>[s(e(ie),{value:o.dateRange,"onUpdate:value":n[1]||(n[1]=u=>o.dateRange=u),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1})]),_:1}),s(e(z),{gutter:10},{default:r(()=>[s(e(C),{span:12},{default:r(()=>[s(e(h),{label:"Runtimes"},{default:r(()=>[s(e(T),{value:o.runtimeNames,"onUpdate:value":n[2]||(n[2]=u=>o.runtimeNames=u),options:I.value.runtimes,mode:"multiple"},null,8,["value","options"])]),_:1})]),_:1}),s(e(C),{span:12},{default:r(()=>[s(e(h),{label:"Events"},{default:r(()=>[s(e(T),{value:o.events,"onUpdate:value":n[3]||(n[3]=u=>o.events=u),options:I.value.events,mode:"multiple"},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),s(e(h),{label:"Search"},{default:r(()=>[s(e(X),{value:o.search,"onUpdate:value":n[4]||(n[4]=u=>o.search=u),type:"search"},null,8,["value"])]),_:1})]),_:1}),e(M)||D.value?(i(),y(e(Z),{key:0,style:{width:"100%"}})):(p=e(v))!=null&&p.logs.length?(i(),y(e(S),{key:1,direction:"vertical",style:{width:"100%"}},{default:r(()=>{var u;return[s(e(ve),{"data-source":(u=e(v))==null?void 0:u.logs},{default:r(()=>[(i(!0),_(ae,null,ee(e(v).logs,(l,N)=>(i(),y(e(fe),{key:N,disabled:w(l)},{extra:r(()=>[w(l)?(i(),y(e(ce),{key:0},{default:r(()=>[E(" EMPTY ")]),_:1})):P("",!0)]),header:r(()=>[s(e(S),null,{default:r(()=>[o.selectedBuild=="all"?(i(),_("span",be,c(l.buildId.split("-")[0]),1)):P("",!0),s(e(k),{type:"vertical"}),x("span",{title:l.createdAt.toISOString()},c(t(l.createdAt)),9,_e),s(e(k),{type:"vertical"}),x("span",null," ["+c(l.runtimeType)+"] "+c(l.runtimeName),1),s(e(k),{type:"vertical"}),x("span",null,c(l.executionId.slice(0,8)),1),s(e(k),{type:"vertical"}),x("span",null,c(l.event),1)]),_:2},1024)]),default:r(()=>{var $,L;return[l.event==="stdout"?(i(),_("pre",{key:0,class:"stdio-log",textContent:c(l.payload.log)},null,8,ge)):l.event==="stderr"?(i(),_("pre",{key:1,class:"stdio-log",textContent:c(l.payload.log)},null,8,he)):l.event==="program-start-failed"?(i(),_("pre",{key:2,textContent:c(l.payload.error)},null,8,Ae)):l.event==="widgets-computed"&&((L=($=l.payload.errors)==null?void 0:$.general)==null?void 0:L.repr)?(i(),_("pre",{key:3,textContent:c(l.payload.errors.general.repr)},null,8,we)):(i(),y(e(te),{key:4,"tree-data":e(re)(l.payload)},null,8,["tree-data"]))]}),_:2},1032,["disabled"]))),128))]),_:1},8,["data-source"]),s(e(le),{current:d.value,"onUpdate:current":n[5]||(n[5]=l=>d.value=l),"page-size":m.value,"onUpdate:pageSize":n[6]||(n[6]=l=>m.value=l),"show-size-changer":"",total:e(v).total},null,8,["current","page-size","total"])]}),_:1})):(i(),y(e(se),{key:2}))]}),_:1}))}});const Ve=ne(Ie,[["__scopeId","data-v-0d6d2cb7"]]);export{Ve as default};
//# sourceMappingURL=Logs.768f35fe.js.map
