import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.f3b65ae3.js";import{B as y}from"./BaseLayout.36db8428.js";import{d as l,E as m,L as v,a0 as u,a_ as g,a$ as b,o as _,Y as h,a as r,Z as s,ea as w,eA as S,X as L,c as k,w as n,b as i,u as $}from"./index.5e2c2a8a.js";import{u as x}from"./editor.c5e2ef9e.js";import{b as B}from"./index.272b690c.js";import"./Logo.2f470218.js";import"./workspaceStore.fce60b26.js";import"./url.44371966.js";import"./colorHelpers.535e2fed.js";import"./linters.2228902a.js";import"./asyncComputed.bbefd3c2.js";import"./index.8ea4b672.js";import"./Avatar.4fc89934.js";import"./index.1ff316d1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9f0078ea-ed0f-4371-9863-36e09c49f483",e._sentryDebugIdIdentifier="sentry-dbid-9f0078ea-ed0f-4371-9863-36e09c49f483")}catch{}})();const I=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...v(o)}}});const P={class:"v-spinner"};function D(e,o,a,d,c,p){return g((_(),h("div",P,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const R=u(I,[["render",D],["__scopeId","data-v-06538001"]]),j={class:"content"},z=l({__name:"ProjectLogin",setup(e){const o=w(),a=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function p(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=p();if(!t){a.push({name:"error"});return}await d.createLogin(t).then(c),a.push({name:"workspace"})}),(t,A)=>(_(),k(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",j,[i(R)])]),_:1}))}});const J=u(z,[["__scopeId","data-v-944edebb"]]);export{J as default};
//# sourceMappingURL=ProjectLogin.797ff6d7.js.map
