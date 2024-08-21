import{B as _}from"./BaseLayout.6a892772.js";import{L as y}from"./Logo.55571f6b.js";import{d as u,D as m,K as g,$ as p,aR as v,aS as b,o as f,W as h,a as r,X as s,e7 as w,ek as S,V as L,c as k,w as n,b as i,u as x}from"./vue-router.8cb6709e.js";import{u as B}from"./editor.7cb3689b.js";import{b as I}from"./index.56bef44b.js";import"./workspaceStore.6301f5bc.js";import"./url.084cdb37.js";import"./linters.776649bb.js";import"./asyncComputed.66b960dc.js";import"./index.e5c2d452.js";import"./Avatar.f79caafc.js";import"./index.a4e01b34.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="3839a84e-ff9b-4f9b-8688-43914e424095",e._sentryDebugIdIdentifier="sentry-dbid-3839a84e-ff9b-4f9b-8688-43914e424095")}catch{}})();const $=u({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...g(o)}}});const D={class:"v-spinner"};function P(e,o,a,c,d,l){return v((f(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const R=p($,[["render",P],["__scopeId","data-v-06538001"]]),K={class:"content"},j=u({__name:"ProjectLogin",setup(e){const o=w(),a=S(),c=B();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=l();if(!t){a.push({name:"error"});return}await c.createLogin(t).then(d),a.push({name:"workspace"})}),(t,z)=>(f(),k(_,null,{navbar:n(()=>[i(x(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(y)]),_:1})]),content:n(()=>[r("div",K,[i(R)])]),_:1}))}});const G=p(j,[["__scopeId","data-v-6ca995fe"]]);export{G as default};
//# sourceMappingURL=ProjectLogin.e104ec8f.js.map
