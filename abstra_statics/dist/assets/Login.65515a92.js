import{g as m}from"./api.1487b219.js";import{u as c}from"./index.4537198b.js";import{d as p,f7 as f,f1 as u,u as r,b as d,c as _,w as l,eX as y,f as b,E as g}from"./outputWidgets.b4050bc1.js";import{_ as h}from"./Login.vue_vue_type_script_setup_true_lang.a73f0ad2.js";import{a as w}from"./asyncComputed.d7761a2d.js";import{W as I}from"./WidgetsFrame.d09ad623.js";import"./runnerData.f304bf53.js";import"./url.729b0e06.js";import"./fetch.e56978b8.js";import"./pubsub.ff1906a5.js";import"./CircularLoading.1a12ddae.js";import"./index.2a62e90b.js";import"./PhArrowClockwise.vue.bd57afee.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bb071c35-193b-4964-9755-7d222366aa2e",e._sentryDebugIdIdentifier="sentry-dbid-bb071c35-193b-4964-9755-7d222366aa2e")}catch{}})();const k=p({__name:"Login",setup(e){const t=f(),a=u(),{result:o}=w(m),i=async()=>{await c.signUp();const{redirect:s,...n}=a.query;if(s){await t.push({path:s,query:n,params:a.params});return}t.push({name:"playerHome",query:n})};return(s,n)=>r(o)?(d(),_(I,{key:0,"main-color":r(o).mainColor,theme:r(o).theme,"font-family":r(o).fontFamily,class:"runner"},{default:l(()=>[b(h,{onDone:i})]),_:1},8,["main-color","theme","font-family"])):y("",!0)}});const H=g(k,[["__scopeId","data-v-b7ca18fc"]]);export{H as default};
//# sourceMappingURL=Login.65515a92.js.map
