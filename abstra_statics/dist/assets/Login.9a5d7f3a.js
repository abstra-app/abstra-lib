import{g as m}from"./api.38c3b859.js";import{_ as u}from"./Login.vue_vue_type_script_setup_true_lang.779c8713.js";import{u as p}from"./router.28540635.js";import{a as d}from"./asyncComputed.3ee69edf.js";import{W as f}from"./WidgetsFrame.b2aa4bc6.js";import{d as _,eM as l,eB as y,u as a,o as b,c as g,w,ew as h,b as I,S as k}from"./vue-router.a95bee0d.js";import"./runnerData.297735b8.js";import"./url.0cfc4a80.js";import"./CircularLoading.930af93b.js";import"./index.7d9c655c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b624a589-74dc-4c27-81f1-ab5a9126b7e9",e._sentryDebugIdIdentifier="sentry-dbid-b624a589-74dc-4c27-81f1-ab5a9126b7e9")}catch{}})();const x=_({__name:"Login",setup(e){const t=l(),r=y(),{result:o}=d(m),c=p(),i=async()=>{await c.signUp();const{redirect:s,...n}=r.query;if(s){await t.push({path:s,query:n,params:r.params});return}t.push({name:"playerHome",query:n})};return(s,n)=>a(o)?(b(),g(f,{key:0,"main-color":a(o).mainColor,theme:a(o).theme,"font-family":a(o).fontFamily,class:"runner"},{default:w(()=>[I(u,{onDone:i})]),_:1},8,["main-color","theme","font-family"])):h("",!0)}});const R=k(x,[["__scopeId","data-v-ae51cc13"]]);export{R as default};
//# sourceMappingURL=Login.9a5d7f3a.js.map
