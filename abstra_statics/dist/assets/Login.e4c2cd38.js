import{g as c}from"./api.f0a6e663.js";import{_ as u}from"./Login.vue_vue_type_script_setup_true_lang.77e71eff.js";import{u as d}from"./router.f5763115.js";import{a as f}from"./asyncComputed.1b7d88a2.js";import{W as p}from"./WidgetsFrame.5157b846.js";import{d as _,eM as l,eB as y,u as r,o as b,c as g,w,ew as h,b as I,S as k}from"./vue-router.8760ac40.js";import"./runnerData.4c5a1274.js";import"./url.3e79afda.js";import"./CircularLoading.faf2adba.js";import"./index.62897914.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="62b14de2-5b86-41eb-9e2d-96f76b4f488a",e._sentryDebugIdIdentifier="sentry-dbid-62b14de2-5b86-41eb-9e2d-96f76b4f488a")}catch{}})();const x=_({__name:"Login",setup(e){const t=l(),s=y(),{result:o}=f(c),i=d(),m=async()=>{await i.signUp();const{redirect:a,...n}=s.query;if(a){await t.push({path:a,query:n,params:s.params});return}t.push({name:"playerHome",query:n})};return(a,n)=>r(o)?(b(),g(p,{key:0,"main-color":r(o).mainColor,theme:r(o).theme,"font-family":r(o).fontFamily,class:"runner"},{default:w(()=>[I(u,{onDone:m})]),_:1},8,["main-color","theme","font-family"])):h("",!0)}});const R=k(x,[["__scopeId","data-v-9e2c7105"]]);export{R as default};
//# sourceMappingURL=Login.e4c2cd38.js.map
