import{g as m}from"./api.4539ad85.js";import{_ as u}from"./Login.vue_vue_type_script_setup_true_lang.055300d1.js";import{u as d}from"./router.ed98b2a5.js";import{a as f}from"./asyncComputed.65255fdd.js";import{W as p}from"./WidgetsFrame.a8e6faad.js";import{d as _,eJ as l,eC as y,u as r,o as g,c as b,w,ew as h,b as C,R as I}from"./vue-router.5fbdb276.js";import"./runnerData.2b61d3c4.js";import"./url.7048b064.js";import"./CircularLoading.d9e92b40.js";import"./index.bec61963.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0fbfcbc5-0e53-45ac-923d-390821c8d384",e._sentryDebugIdIdentifier="sentry-dbid-0fbfcbc5-0e53-45ac-923d-390821c8d384")}catch{}})();const k=_({__name:"Login",setup(e){const t=l(),s=y(),{result:o}=f(m),c=d(),i=async()=>{await c.signUp();const{redirect:a,...n}=s.query;if(a){await t.push({path:a,query:n,params:s.params});return}t.push({name:"playerHome",query:n})};return(a,n)=>r(o)?(g(),b(p,{key:0,"main-color":r(o).mainColor,theme:r(o).theme,"font-family":r(o).fontFamily,class:"runner"},{default:w(()=>[C(u,{onDone:i})]),_:1},8,["main-color","theme","font-family"])):h("",!0)}});const S=I(k,[["__scopeId","data-v-ae51cc13"]]);export{S as default};
//# sourceMappingURL=Login.f2808b35.js.map
