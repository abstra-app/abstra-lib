import{B as f}from"./BaseLayout.f68502e8.js";import{L as y}from"./Logo.483a198e.js";import{d as l,D as b,K as m,R as p,aL as g,aM as v,o as _,et as h,a as s,eu as n,eA as w,eM as L,Z as S,c as k,w as r,b as i,u as x}from"./vue-router.16478b34.js";import{u as B}from"./editor.366c076d.js";import{b as I}from"./index.dc1ba0a6.js";import"./router.1fcd06db.js";import"./linters.61f9bb3c.js";import"./asyncComputed.863d686e.js";import"./index.2d751837.js";import"./index.367a4851.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="a71b6a7c-05b1-4a3c-89fc-ed393b0bb524",e._sentryDebugIdIdentifier="sentry-dbid-a71b6a7c-05b1-4a3c-89fc-ed393b0bb524")}catch{}})();const D=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const a=b({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...m(a)}}});const P={class:"v-spinner"};function R(e,a,o,c,d,u){return g((_(),h("div",P,[s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4)],512)),[[v,e.loading]])}const $=p(D,[["render",R],["__scopeId","data-v-06538001"]]),K={class:"content"},j=l({__name:"ProjectLogin",setup(e){const a=w(),o=L(),c=B();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),o.replace(t.pathname+t.search)}function u(){const t=a.query["api-key"];if(typeof t=="string")return t}return S(async()=>{const t=u();if(!t){o.push({name:"error"});return}await c.createLogin(t).then(d),o.push({name:"workspace"})}),(t,z)=>(_(),k(f,null,{navbar:r(()=>[i(x(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:r(()=>[i(y)]),_:1})]),content:r(()=>[s("div",K,[i($)])]),_:1}))}});const Z=p(j,[["__scopeId","data-v-6ca995fe"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.b63a902b.js.map
