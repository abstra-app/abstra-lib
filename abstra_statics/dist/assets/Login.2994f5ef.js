import{g as c}from"./api.b88cb0e4.js";import{u as d}from"./index.1e3b20b0.js";import{d as f,eK as p,eE as u,b as i,ew as _,e as l,u as a,c as y,w as g,ey as h,f as w,x as b}from"./outputWidgets.c0c0bb43.js";import{_ as v}from"./Login.vue_vue_type_script_setup_true_lang.e99b75c2.js";import{a as k}from"./asyncComputed.88b03a2e.js";import{W as x}from"./WidgetsFrame.8b3e1b40.js";import"./runnerData.88e63219.js";import"./url.abc8068c.js";import"./fetch.151251d1.js";import"./pubsub.67f9f2ba.js";import"./Link.035e4967.js";import"./Base.f9d35c7c.js";import"./index.87c03f73.js";import"./CircularLoading.3b1528a1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a759442d-3716-4618-809f-74e4339fc82f",e._sentryDebugIdIdentifier="sentry-dbid-a759442d-3716-4618-809f-74e4339fc82f")}catch{}})();const I={class:"login"},C=f({__name:"Login",setup(e){const t=p(),r=u(),{result:o}=k(c),m=async()=>{await d.signUp();const{redirect:s,...n}=r.query;if(s){t.push({path:s,query:n,params:r.params});return}t.push({name:"playerThreads",query:n})};return(s,n)=>(i(),_("div",null,[l("div",I,[a(o)?(i(),y(x,{key:0,"main-color":a(o).mainColor,theme:a(o).theme,"font-family":a(o).fontFamily,style:{width:"100vw"}},{default:g(()=>[w(v,{onDone:m})]),_:1},8,["main-color","theme","font-family"])):h("",!0)])]))}});const $=b(C,[["__scopeId","data-v-ad80aeaa"]]);export{$ as default};
//# sourceMappingURL=Login.2994f5ef.js.map
