import{B as _}from"./BaseLayout.4ecb40f7.js";import{L as y}from"./Logo.4cc5b72e.js";import{d as u,D as m,K as b,$ as p,aZ as g,a_ as v,o as f,X as h,a as r,Y as s,ed as w,eq as L,W as S,c as k,w as n,b as i,u as x}from"./vue-router.b482f949.js";import{u as B}from"./editor.a2399aee.js";import{b as I}from"./index.2a4d4b6d.js";import"./workspaceStore.39ceee68.js";import"./url.2d86762c.js";import"./colorHelpers.add1f894.js";import"./asyncComputed.7dbcb274.js";import"./index.2087a71a.js";import"./Avatar.4d99beae.js";import"./index.33ee365f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f97b10b2-f40b-46b0-93c8-05b02ffa9811",e._sentryDebugIdIdentifier="sentry-dbid-f97b10b2-f40b-46b0-93c8-05b02ffa9811")}catch{}})();const $=u({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const D={class:"v-spinner"};function P(e,o,a,c,d,l){return g((f(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[v,e.loading]])}const K=p($,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=u({__name:"ProjectLogin",setup(e){const o=w(),a=L(),c=B();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return S(async()=>{const t=l();if(!t){a.push({name:"error"});return}await c.createLogin(t).then(d),a.push({name:"workspace"})}),(t,z)=>(f(),k(_,null,{navbar:n(()=>[i(x(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(y)]),_:1})]),content:n(()=>[r("div",R,[i(K)])]),_:1}))}});const Y=p(j,[["__scopeId","data-v-6ca995fe"]]);export{Y as default};
//# sourceMappingURL=ProjectLogin.e344cfb6.js.map
