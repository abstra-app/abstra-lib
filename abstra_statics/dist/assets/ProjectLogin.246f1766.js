import{B as f}from"./BaseLayout.6a977ec6.js";import{L as y}from"./Logo.03ab68be.js";import{d as u,D as m,K as g,$ as p,aR as v,aS as b,o as _,W as h,a as s,X as n,eB as w,eN as S,V as L,c as k,w as r,b as i,u as B}from"./vue-router.3991e470.js";import{u as x}from"./editor.385c4887.js";import{b as I}from"./index.28dc505b.js";import"./router.4112b95f.js";import"./linters.e7ddaa62.js";import"./asyncComputed.81507b56.js";import"./index.9faefb4b.js";import"./index.9ebb0cba.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9f450bdd-85cd-4dd3-8adc-9b6680442013",e._sentryDebugIdIdentifier="sentry-dbid-9f450bdd-85cd-4dd3-8adc-9b6680442013")}catch{}})();const $=u({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...g(o)}}});const D={class:"v-spinner"};function P(e,o,a,d,c,l){return v((_(),h("div",D,[s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const R=p($,[["render",P],["__scopeId","data-v-06538001"]]),K={class:"content"},j=u({__name:"ProjectLogin",setup(e){const o=w(),a=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=l();if(!t){a.push({name:"error"});return}await d.createLogin(t).then(c),a.push({name:"workspace"})}),(t,z)=>(_(),k(f,null,{navbar:r(()=>[i(B(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:r(()=>[i(y)]),_:1})]),content:r(()=>[s("div",K,[i(R)])]),_:1}))}});const W=p(j,[["__scopeId","data-v-6ca995fe"]]);export{W as default};
//# sourceMappingURL=ProjectLogin.246f1766.js.map
