import{g as c}from"./api.2a3d722f.js";import{u as m}from"./index.4ff0db42.js";import{d as f,f7 as d,f1 as p,u as r,b as u,c as _,w as l,eX as y,f as g,E as b}from"./outputWidgets.26390fac.js";import{_ as h}from"./Login.vue_vue_type_script_setup_true_lang.ddeacde3.js";import{a as w}from"./asyncComputed.80ddfd82.js";import{W as I}from"./WidgetsFrame.f9ddf191.js";import"./runnerData.48291f69.js";import"./url.3f82014a.js";import"./fetch.e5be5abf.js";import"./pubsub.c681650c.js";import"./CircularLoading.b5f0ab65.js";import"./index.7b32057a.js";import"./PhArrowClockwise.vue.41cd555b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4199290c-6183-4e85-9da1-38ba7dd29fc8",e._sentryDebugIdIdentifier="sentry-dbid-4199290c-6183-4e85-9da1-38ba7dd29fc8")}catch{}})();const k=f({__name:"Login",setup(e){const t=d(),a=p(),{result:o}=w(c),i=async()=>{await m.signUp();const{redirect:s,...n}=a.query;if(s){await t.push({path:s,query:n,params:a.params});return}t.push({name:"playerHome",query:n})};return(s,n)=>r(o)?(u(),_(I,{key:0,"main-color":r(o).mainColor,theme:r(o).theme,"font-family":r(o).fontFamily,class:"runner"},{default:l(()=>[g(h,{onDone:i})]),_:1},8,["main-color","theme","font-family"])):y("",!0)}});const H=b(k,[["__scopeId","data-v-b7ca18fc"]]);export{H as default};
//# sourceMappingURL=Login.8df2f607.js.map
