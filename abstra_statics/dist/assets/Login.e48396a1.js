import{g as m}from"./api.0ea70acc.js";import{u as c}from"./index.c4bf606c.js";import{d as p,eK as u,eE as _,b as i,ew as f,e as l,u as a,c as y,w as g,ey as b,f as h,x as w}from"./outputWidgets.c72d6948.js";import{_ as v}from"./Login.vue_vue_type_script_setup_true_lang.7216536a.js";import{a as k}from"./asyncComputed.094a8dad.js";import{W as x}from"./WidgetsFrame.a6b03776.js";import"./runnerData.b51546e1.js";import"./url.0903f6da.js";import"./fetch.0048aa0e.js";import"./pubsub.0bd913c7.js";import"./Link.29e8adfc.js";import"./Base.64655206.js";import"./index.82e64329.js";import"./CircularLoading.2e43ee25.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6b3e3e08-d182-42cb-82e0-08da81522508",e._sentryDebugIdIdentifier="sentry-dbid-6b3e3e08-d182-42cb-82e0-08da81522508")}catch{}})();const I={class:"login"},C=p({__name:"Login",setup(e){const t=u(),r=_(),{result:o}=k(m),d=async()=>{await c.signUp();const{redirect:s,...n}=r.query;if(s){t.push({path:s,query:n,params:r.params});return}t.push({name:"playerThreads",query:n})};return(s,n)=>(i(),f("div",null,[l("div",I,[a(o)?(i(),y(x,{key:0,"main-color":a(o).mainColor,theme:a(o).theme,"font-family":a(o).fontFamily,style:{width:"100vw"}},{default:g(()=>[h(v,{onDone:d})]),_:1},8,["main-color","theme","font-family"])):b("",!0)])]))}});const $=w(C,[["__scopeId","data-v-ad80aeaa"]]);export{$ as default};
//# sourceMappingURL=Login.e48396a1.js.map
