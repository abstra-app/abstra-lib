import{B as f}from"./BaseLayout.52e288f4.js";import{L as y}from"./Logo.1f305ca6.js";import{d as l,D as m,K as b,$ as p,aR as g,aS as v,o as _,W as h,a as s,X as n,eu as w,eH as S,V as L,c as k,w as r,b as i,u as x}from"./vue-router.5e8ba7eb.js";import{u as B}from"./editor.d5d9b0ef.js";import{b as I}from"./index.de50f080.js";import"./router.c3a5f38b.js";import"./linters.fa5f4508.js";import"./asyncComputed.bb3077bb.js";import"./index.96dc97c0.js";import"./index.806e571e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="10e48a93-f566-45a3-ab14-ac2c7eb64a4b",e._sentryDebugIdIdentifier="sentry-dbid-10e48a93-f566-45a3-ab14-ac2c7eb64a4b")}catch{}})();const $=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const a=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(a)}}});const D={class:"v-spinner"};function P(e,a,o,c,d,u){return g((_(),h("div",D,[s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4)],512)),[[v,e.loading]])}const R=p($,[["render",P],["__scopeId","data-v-06538001"]]),K={class:"content"},j=l({__name:"ProjectLogin",setup(e){const a=w(),o=S(),c=B();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),o.replace(t.pathname+t.search)}function u(){const t=a.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=u();if(!t){o.push({name:"error"});return}await c.createLogin(t).then(d),o.push({name:"workspace"})}),(t,z)=>(_(),k(f,null,{navbar:r(()=>[i(x(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:r(()=>[i(y)]),_:1})]),content:r(()=>[s("div",K,[i(R)])]),_:1}))}});const W=p(j,[["__scopeId","data-v-6ca995fe"]]);export{W as default};
//# sourceMappingURL=ProjectLogin.67e1fb02.js.map
