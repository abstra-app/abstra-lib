import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.ad55cdcd.js";import{B as y}from"./BaseLayout.d5eaeb5a.js";import{d as p,D as m,K as b,$ as u,aZ as v,a_ as g,o as _,X as h,a as s,Y as a,ed as w,eq as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.5b09689e.js";import{u as x}from"./editor.629e2e1b.js";import{b as B}from"./index.21fd7880.js";import"./Logo.a778653e.js";import"./workspaceStore.2192b5ee.js";import"./url.8603a03e.js";import"./colorHelpers.ba73f591.js";import"./asyncComputed.8446639c.js";import"./index.deb52191.js";import"./Avatar.c7872286.js";import"./index.26f1f73f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="316a3147-399d-4693-b714-c3565d476dd5",e._sentryDebugIdIdentifier="sentry-dbid-316a3147-399d-4693-b714-c3565d476dd5")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const D={class:"v-spinner"};function P(e,o,r,d,c,l){return v((_(),h("div",D,[s("div",{class:"v-beat v-beat-odd",style:a(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:a(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:a(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const o=w(),r=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),r.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){r.push({name:"error"});return}await d.createLogin(t).then(c),r.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[s("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.f8c5307c.js.map
