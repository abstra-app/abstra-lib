import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.7d23c3f7.js";import{B as y}from"./BaseLayout.d3f66c24.js";import{d as p,D as m,K as b,$ as u,aZ as v,a_ as g,o as _,X as h,a as r,Y as s,ea as w,eo as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.7caacf0a.js";import{u as x}from"./editor.19b6eb51.js";import{b as B}from"./index.c451ac74.js";import"./Logo.7cf59878.js";import"./workspaceStore.721a53f6.js";import"./url.6080e1e1.js";import"./colorHelpers.cbd2e565.js";import"./asyncComputed.875a004e.js";import"./index.6bab67fd.js";import"./Avatar.5401c6df.js";import"./index.cca0f259.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9e23c67b-4f9b-49d2-89cf-f517519a8e9e",e._sentryDebugIdIdentifier="sentry-dbid-9e23c67b-4f9b-49d2-89cf-f517519a8e9e")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const D={class:"v-spinner"};function P(e,o,a,c,d,l){return v((_(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const o=w(),a=S(),c=x();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){a.push({name:"error"});return}await c.createLogin(t).then(d),a.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.11ec5ca6.js.map
