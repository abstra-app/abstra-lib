import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.dd62e4fa.js";import{B as y}from"./BaseLayout.8f38cf0b.js";import{d as p,D as m,K as b,$ as u,aZ as v,a_ as g,o as _,X as h,a as r,Y as s,ea as w,eo as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.62e6d9fd.js";import{u as x}from"./editor.2db47815.js";import{b as B}from"./index.d18aa357.js";import"./Logo.a416dede.js";import"./workspaceStore.c371b988.js";import"./url.093ddd5e.js";import"./colorHelpers.fb6e5b1a.js";import"./asyncComputed.f910ef77.js";import"./index.d72384ce.js";import"./Avatar.df98eed9.js";import"./index.19fb05f4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="542cd797-b468-40c5-9739-d8a2d4b8321b",e._sentryDebugIdIdentifier="sentry-dbid-542cd797-b468-40c5-9739-d8a2d4b8321b")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const D={class:"v-spinner"};function P(e,o,a,d,c,l){return v((_(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const o=w(),a=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){a.push({name:"error"});return}await d.createLogin(t).then(c),a.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.633bfc7b.js.map
