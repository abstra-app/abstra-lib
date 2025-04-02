import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.121dea82.js";import{B as y}from"./BaseLayout.f93b454a.js";import{d as l,E as m,L as b,a0 as u,a_ as v,a$ as g,o as _,Y as h,a as r,Z as s,ea as w,eo as S,X as L,c as k,w as n,b as i,u as $}from"./index.27bc5f51.js";import{u as x}from"./editor.e7040272.js";import{b as B}from"./index.0d55d458.js";import"./Logo.d5a4382c.js";import"./workspaceStore.ae7c246d.js";import"./url.ffe10626.js";import"./colorHelpers.6857de5d.js";import"./linters.8e16ada5.js";import"./asyncComputed.c32bac68.js";import"./index.47180f4d.js";import"./Avatar.4d918ff8.js";import"./index.47ffd6f0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="47d9c313-6607-483e-aab4-a518831f07c3",e._sentryDebugIdIdentifier="sentry-dbid-47d9c313-6607-483e-aab4-a518831f07c3")}catch{}})();const I=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const P={class:"v-spinner"};function D(e,o,a,c,d,p){return v((_(),h("div",P,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const R=u(I,[["render",D],["__scopeId","data-v-06538001"]]),j={class:"content"},z=l({__name:"ProjectLogin",setup(e){const o=w(),a=S(),c=x();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function p(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=p();if(!t){a.push({name:"error"});return}await c.createLogin(t).then(d),a.push({name:"workspace"})}),(t,C)=>(_(),k(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",j,[i(R)])]),_:1}))}});const J=u(z,[["__scopeId","data-v-944edebb"]]);export{J as default};
//# sourceMappingURL=ProjectLogin.ecd1c0bf.js.map
