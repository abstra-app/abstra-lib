import{g as c}from"./api.4007eec5.js";import{P as m}from"./Passwordless.ae177d2b.js";import{a as p}from"./asyncComputed.a619212b.js";import{W as u}from"./WidgetsFrame.93ee4bfa.js";import{d as f,eJ as l,eD as _,b as i,ev as y,e as g,u as s,c as b,w as h,ex as w,f as v,v as k}from"./outputWidgets.be3472c2.js";import{u as x}from"./index.d9a79603.js";import"./runnerData.c8a20a02.js";import"./url.7fe1be7b.js";import"./index.1db198b0.js";import"./CircularLoading.09bcc174.js";import"./fetch.dd071db9.js";import"./pubsub.1063a0da.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ea4a3b0d-6b87-4843-8c94-d777783435b9",e._sentryDebugIdIdentifier="sentry-dbid-ea4a3b0d-6b87-4843-8c94-d777783435b9")}catch{}})();const D={class:"login"},I=f({__name:"Login",setup(e){const t=l(),a=_(),{result:o}=p(c),d=async()=>{await x.signUp();const{redirect:r,...n}=a.query;if(r){t.push({path:r,query:n,params:a.params});return}t.push({name:"playerKanban",query:n})};return(r,n)=>(i(),y("div",null,[g("div",D,[s(o)?(i(),b(u,{key:0,"main-color":s(o).mainColor,theme:s(o).theme,"font-family":s(o).fontFamily,style:{width:"100vw"}},{default:h(()=>[v(m,{onDone:d})]),_:1},8,["main-color","theme","font-family"])):w("",!0)])]))}});const K=k(I,[["__scopeId","data-v-73f41769"]]);export{K as default};
//# sourceMappingURL=Login.f037f325.js.map
