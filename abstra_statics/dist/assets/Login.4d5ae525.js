import{g as m}from"./api.e3b48f19.js";import{_ as u}from"./Login.vue_vue_type_script_setup_true_lang.fd7f8501.js";import{u as f}from"./router.d8faf85a.js";import{a as p}from"./asyncComputed.701c6db7.js";import{W as d}from"./WidgetsFrame.dfea1b2d.js";import{d as _,eJ as l,eC as y,u as r,b as g,c as b,w,ew as h,f as C,S as I}from"./vue-router.68023fee.js";import"./runnerData.e80557a7.js";import"./url.5ccf4cba.js";import"./CircularLoading.db226bef.js";import"./index.9310d3a1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7c403a5f-e731-4038-bfb2-5780acdc656e",e._sentryDebugIdIdentifier="sentry-dbid-7c403a5f-e731-4038-bfb2-5780acdc656e")}catch{}})();const k=_({__name:"Login",setup(e){const t=l(),s=y(),{result:o}=p(m),c=f(),i=async()=>{await c.signUp();const{redirect:a,...n}=s.query;if(a){await t.push({path:a,query:n,params:s.params});return}t.push({name:"playerHome",query:n})};return(a,n)=>r(o)?(g(),b(d,{key:0,"main-color":r(o).mainColor,theme:r(o).theme,"font-family":r(o).fontFamily,class:"runner"},{default:w(()=>[C(u,{onDone:i})]),_:1},8,["main-color","theme","font-family"])):h("",!0)}});const R=I(k,[["__scopeId","data-v-ae51cc13"]]);export{R as default};
//# sourceMappingURL=Login.4d5ae525.js.map
