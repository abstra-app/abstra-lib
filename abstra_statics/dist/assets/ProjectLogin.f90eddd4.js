import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.f3181c2d.js";import{B as y}from"./BaseLayout.a5a3d5a5.js";import{d as p,D as m,K as b,$ as u,aZ as v,a_ as g,o as _,X as h,a as r,Y as s,ea as w,eo as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.a18a46d4.js";import{u as x}from"./editor.bc1f4134.js";import{b as B}from"./index.8c3afbde.js";import"./Logo.cfc50f01.js";import"./workspaceStore.b27b91e4.js";import"./url.bd17bbea.js";import"./colorHelpers.8733ab28.js";import"./asyncComputed.1634928e.js";import"./index.2ece19c6.js";import"./Avatar.d9878be5.js";import"./index.ca76b340.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f6106c81-0bbe-4dd9-8af6-074b54237f6b",e._sentryDebugIdIdentifier="sentry-dbid-f6106c81-0bbe-4dd9-8af6-074b54237f6b")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const D={class:"v-spinner"};function P(e,o,a,d,c,l){return v((_(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const o=w(),a=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){a.push({name:"error"});return}await d.createLogin(t).then(c),a.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.f90eddd4.js.map
