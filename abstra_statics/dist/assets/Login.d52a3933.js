import{g as d}from"./api.2fc3f431.js";import{P as m}from"./Passwordless.e79cf36f.js";import{a as p}from"./asyncComputed.d0ad7a25.js";import{W as u}from"./WidgetsFrame.af17347c.js";import{d as f,eJ as l,eD as _,b as i,ev as y,e as g,u as a,c as b,w as h,ex as w,f as v,v as k}from"./outputWidgets.ec856832.js";import{u as x}from"./index.e3012305.js";import"./runnerData.1652f02d.js";import"./url.39fc0d0b.js";import"./index.ae333da6.js";import"./CircularLoading.7ff89ad5.js";import"./fetch.1d43a805.js";import"./pubsub.2e9165be.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7acd23a1-c2a3-421e-9160-30fab30da504",e._sentryDebugIdIdentifier="sentry-dbid-7acd23a1-c2a3-421e-9160-30fab30da504")}catch{}})();const D={class:"login"},I=f({__name:"Login",setup(e){const t=l(),s=_(),{result:o}=p(d),c=async()=>{await x.signUp();const{redirect:r,...n}=s.query;if(r){t.push({path:r,query:n,params:s.params});return}t.push({name:"playerKanban",query:n})};return(r,n)=>(i(),y("div",null,[g("div",D,[a(o)?(i(),b(u,{key:0,"main-color":a(o).mainColor,theme:a(o).theme,"font-family":a(o).fontFamily,style:{width:"100vw"}},{default:h(()=>[v(m,{onDone:c})]),_:1},8,["main-color","theme","font-family"])):w("",!0)])]))}});const K=k(I,[["__scopeId","data-v-73f41769"]]);export{K as default};
//# sourceMappingURL=Login.d52a3933.js.map
