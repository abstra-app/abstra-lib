import{g as c}from"./api.3543962f.js";import{u as m}from"./index.e752db4c.js";import{d as f,f7 as d,f1 as p,u as r,b as u,c as _,w as l,eX as y,f as g,E as b}from"./outputWidgets.fb72f334.js";import{_ as h}from"./Login.vue_vue_type_script_setup_true_lang.99596bda.js";import{a as w}from"./asyncComputed.7ed124a4.js";import{W as I}from"./WidgetsFrame.fad455f0.js";import"./runnerData.aad08e2c.js";import"./url.14a615f7.js";import"./fetch.019a6448.js";import"./pubsub.b6388b69.js";import"./CircularLoading.d5912cb4.js";import"./index.d697c0c3.js";import"./PhArrowClockwise.vue.2bbab7d0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d5e82089-9f73-46b1-9d50-c31f09d900c5",e._sentryDebugIdIdentifier="sentry-dbid-d5e82089-9f73-46b1-9d50-c31f09d900c5")}catch{}})();const k=f({__name:"Login",setup(e){const t=d(),a=p(),{result:o}=w(c),i=async()=>{await m.signUp();const{redirect:s,...n}=a.query;if(s){await t.push({path:s,query:n,params:a.params});return}t.push({name:"playerHome",query:n})};return(s,n)=>r(o)?(u(),_(I,{key:0,"main-color":r(o).mainColor,theme:r(o).theme,"font-family":r(o).fontFamily,class:"runner"},{default:l(()=>[g(h,{onDone:i})]),_:1},8,["main-color","theme","font-family"])):y("",!0)}});const H=b(k,[["__scopeId","data-v-b7ca18fc"]]);export{H as default};
//# sourceMappingURL=Login.718b8527.js.map
