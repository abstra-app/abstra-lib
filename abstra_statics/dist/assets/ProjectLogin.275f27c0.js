import{B as f}from"./BaseLayout.78d4a2ac.js";import{L as y}from"./Logo.a1201ef4.js";import{d as l,D as m,K as g,$ as p,aR as v,aS as b,o as _,W as h,a as s,X as n,eu as w,eH as S,V as L,c as k,w as r,b as i,u as x}from"./vue-router.baf1d741.js";import{u as B}from"./editor.a8c25450.js";import{b as I}from"./index.c8f649df.js";import"./router.db3daba6.js";import"./linters.26b2faa8.js";import"./asyncComputed.e6f95505.js";import"./index.dd2134d7.js";import"./Avatar.50192664.js";import"./index.a446ad50.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="08e04fa4-5ad2-4730-a2c3-8cdea5964330",e._sentryDebugIdIdentifier="sentry-dbid-08e04fa4-5ad2-4730-a2c3-8cdea5964330")}catch{}})();const $=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const a=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...g(a)}}});const D={class:"v-spinner"};function P(e,a,o,c,d,u){return v((_(),h("div",D,[s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const R=p($,[["render",P],["__scopeId","data-v-06538001"]]),K={class:"content"},j=l({__name:"ProjectLogin",setup(e){const a=w(),o=S(),c=B();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),o.replace(t.pathname+t.search)}function u(){const t=a.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=u();if(!t){o.push({name:"error"});return}await c.createLogin(t).then(d),o.push({name:"workspace"})}),(t,z)=>(_(),k(f,null,{navbar:r(()=>[i(x(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:r(()=>[i(y)]),_:1})]),content:r(()=>[s("div",K,[i(R)])]),_:1}))}});const X=p(j,[["__scopeId","data-v-6ca995fe"]]);export{X as default};
//# sourceMappingURL=ProjectLogin.275f27c0.js.map
