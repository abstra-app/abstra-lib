import{B as _}from"./BaseLayout.d88ff2dd.js";import{L as y}from"./Logo.00b51b5f.js";import{d as l,D as m,K as g,$ as p,aR as v,aS as b,o as f,W as h,a as s,X as n,eu as w,eH as S,V as L,c as k,w as r,b as i,u as x}from"./vue-router.0e841c88.js";import{u as B}from"./editor.ac83720a.js";import{b as I}from"./index.42495883.js";import"./router.e7cc5cf1.js";import"./linters.8c45cf18.js";import"./asyncComputed.b5754449.js";import"./index.c4c7358e.js";import"./index.8f701e0a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="5d93726d-7f4f-4fd1-93fd-17ab87a9aa30",e._sentryDebugIdIdentifier="sentry-dbid-5d93726d-7f4f-4fd1-93fd-17ab87a9aa30")}catch{}})();const $=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const a=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...g(a)}}});const D={class:"v-spinner"};function P(e,a,o,d,c,u){return v((f(),h("div",D,[s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const R=p($,[["render",P],["__scopeId","data-v-06538001"]]),K={class:"content"},j=l({__name:"ProjectLogin",setup(e){const a=w(),o=S(),d=B();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),o.replace(t.pathname+t.search)}function u(){const t=a.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=u();if(!t){o.push({name:"error"});return}await d.createLogin(t).then(c),o.push({name:"workspace"})}),(t,z)=>(f(),k(_,null,{navbar:r(()=>[i(x(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:r(()=>[i(y)]),_:1})]),content:r(()=>[s("div",K,[i(R)])]),_:1}))}});const W=p(j,[["__scopeId","data-v-6ca995fe"]]);export{W as default};
//# sourceMappingURL=ProjectLogin.a071331a.js.map
