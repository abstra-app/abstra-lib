import{g as m}from"./api.5a9a7fd0.js";import{_ as d}from"./Login.vue_vue_type_script_setup_true_lang.acd6dfcf.js";import{u}from"./router.5c9037bf.js";import{a as f}from"./asyncComputed.c4454290.js";import{W as p}from"./WidgetsFrame.570df0e9.js";import{d as _,eM as l,eA as y,u as a,o as g,c as b,w as h,ev as w,b as I,R as k}from"./vue-router.77c5f93d.js";import"./runnerData.a05d4a6e.js";import"./url.40922056.js";import"./CircularLoading.badb4877.js";import"./index.d040dc18.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="88bdddac-6f10-4490-8e46-1c9eafc7aa46",e._sentryDebugIdIdentifier="sentry-dbid-88bdddac-6f10-4490-8e46-1c9eafc7aa46")}catch{}})();const v=_({__name:"Login",setup(e){const t=l(),r=y(),{result:o}=f(m),c=u(),i=async()=>{await c.signUp();const{redirect:s,...n}=r.query;if(s){await t.push({path:s,query:n,params:r.params});return}t.push({name:"playerHome",query:n})};return(s,n)=>a(o)?(g(),b(p,{key:0,"main-color":a(o).mainColor,theme:a(o).theme,"font-family":a(o).fontFamily,class:"runner"},{default:h(()=>[I(d,{onDone:i})]),_:1},8,["main-color","theme","font-family"])):w("",!0)}});const S=k(v,[["__scopeId","data-v-9e2c7105"]]);export{S as default};
//# sourceMappingURL=Login.40dff047.js.map
