import{g as f}from"./api.71a99032.js";import{P as m}from"./Passwordless.34b761c9.js";import{a as d}from"./asyncComputed.9089c359.js";import{W as p}from"./WidgetsFrame.071322e2.js";import{d as u,eI as l,eA as _,b as i,eu as y,e as g,u as s,c as b,w,ew as h,f as v,v as I}from"./outputWidgets.aa27c47c.js";import{u as k}from"./index.a8b8b4ce.js";import"./runnerData.a6baa32c.js";import"./url.a7e54001.js";import"./index.93516e01.js";import"./PhArrowClockwise.vue.15538f44.js";import"./CircularLoading.6f47e50a.js";import"./pubsub.18529eeb.js";import"./fetch.0c548468.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="101ef634-bbdf-49e5-86cf-7f539c789059",e._sentryDebugIdIdentifier="sentry-dbid-101ef634-bbdf-49e5-86cf-7f539c789059")}catch{}})();const x={class:"login"},C=u({__name:"Login",setup(e){const t=l(),r=_(),{result:o}=d(f),c=async()=>{await k.signUp();const{redirect:a,...n}=r.query;if(a){t.push({path:a,query:n,params:r.params});return}t.push({name:"playerKanban",query:n})};return(a,n)=>(i(),y("div",null,[g("div",x,[s(o)?(i(),b(p,{key:0,"main-color":s(o).mainColor,theme:s(o).theme,"font-family":s(o).fontFamily,style:{width:"100vw"}},{default:w(()=>[v(m,{onDone:c})]),_:1},8,["main-color","theme","font-family"])):h("",!0)])]))}});const M=I(C,[["__scopeId","data-v-73f41769"]]);export{M as default};
//# sourceMappingURL=Login.cf5b60f0.js.map
