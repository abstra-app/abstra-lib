import{B as f}from"./BaseLayout.35414bb8.js";import{L as y}from"./Logo.00f0a713.js";import{d as u,D as m,K as g,Y as p,aQ as v,aR as b,o as _,V as h,a as s,W as n,eB as w,eN as L,U as S,c as k,w as r,b as i,u as B}from"./vue-router.07b0787c.js";import{u as x}from"./editor.204f32ec.js";import{b as I}from"./index.5a912b08.js";import"./router.09b0874f.js";import"./linters.02b8ca02.js";import"./asyncComputed.c2155699.js";import"./index.1e424753.js";import"./index.576703bc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="747cfd61-14f6-4a35-9009-3b5e40835a95",e._sentryDebugIdIdentifier="sentry-dbid-747cfd61-14f6-4a35-9009-3b5e40835a95")}catch{}})();const D=u({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...g(o)}}});const P={class:"v-spinner"};function R(e,o,a,c,d,l){return v((_(),h("div",P,[s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const $=p(D,[["render",R],["__scopeId","data-v-06538001"]]),K={class:"content"},j=u({__name:"ProjectLogin",setup(e){const o=w(),a=L(),c=x();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return S(async()=>{const t=l();if(!t){a.push({name:"error"});return}await c.createLogin(t).then(d),a.push({name:"workspace"})}),(t,z)=>(_(),k(f,null,{navbar:r(()=>[i(B(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:r(()=>[i(y)]),_:1})]),content:r(()=>[s("div",K,[i($)])]),_:1}))}});const Q=p(j,[["__scopeId","data-v-6ca995fe"]]);export{Q as default};
//# sourceMappingURL=ProjectLogin.c43f8242.js.map
