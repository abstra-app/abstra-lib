import{g as i}from"./api.eed97806.js";import{u as m}from"./index.064df19e.js";import{d as f,f7 as p,f1 as u,u as a,b as d,c as _,w as l,eX as y,f as g,E as b}from"./outputWidgets.f4ce2475.js";import{_ as h}from"./Login.vue_vue_type_script_setup_true_lang.39d8f7ce.js";import{a as w}from"./asyncComputed.8b3114fc.js";import{W as I}from"./WidgetsFrame.3db4f56b.js";import"./runnerData.d199535e.js";import"./url.241154b3.js";import"./fetch.aefcc5d1.js";import"./pubsub.0e98a66a.js";import"./CircularLoading.50a9a4dc.js";import"./index.8cf8a8e8.js";import"./PhArrowClockwise.vue.deac3d63.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="63d0ac32-9734-4c9b-9a78-a3fe4c22601b",e._sentryDebugIdIdentifier="sentry-dbid-63d0ac32-9734-4c9b-9a78-a3fe4c22601b")}catch{}})();const k=f({__name:"Login",setup(e){const t=p(),r=u(),{result:o}=w(i),c=async()=>{await m.signUp();const{redirect:s,...n}=r.query;if(s){await t.push({path:s,query:n,params:r.params});return}t.push({name:"playerHome",query:n})};return(s,n)=>a(o)?(d(),_(I,{key:0,"main-color":a(o).mainColor,theme:a(o).theme,"font-family":a(o).fontFamily,class:"runner"},{default:l(()=>[g(h,{onDone:c})]),_:1},8,["main-color","theme","font-family"])):y("",!0)}});const H=b(k,[["__scopeId","data-v-b7ca18fc"]]);export{H as default};
//# sourceMappingURL=Login.2c303e39.js.map
