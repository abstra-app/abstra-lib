import{B as f}from"./BaseLayout.fb7217c4.js";import{L as y}from"./Logo.e3656e86.js";import{d as u,D as m,K as b,Y as p,aQ as g,aR as v,o as _,V as h,a as s,W as n,eB as w,eN as L,U as S,c as k,w as r,b as i,u as B}from"./vue-router.33b1a225.js";import{u as x}from"./editor.2438c69b.js";import{b as I}from"./index.8559649a.js";import"./router.777a2ba8.js";import"./linters.f1b7fbe9.js";import"./asyncComputed.7f523489.js";import"./index.920e6bcb.js";import"./index.1d668b87.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c8dd2ad7-200b-4e06-8b73-f6817b44cd7f",e._sentryDebugIdIdentifier="sentry-dbid-c8dd2ad7-200b-4e06-8b73-f6817b44cd7f")}catch{}})();const D=u({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const P={class:"v-spinner"};function R(e,o,a,d,c,l){return g((_(),h("div",P,[s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:n(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:n(e.spinnerStyle)},null,4)],512)),[[v,e.loading]])}const $=p(D,[["render",R],["__scopeId","data-v-06538001"]]),K={class:"content"},j=u({__name:"ProjectLogin",setup(e){const o=w(),a=L(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return S(async()=>{const t=l();if(!t){a.push({name:"error"});return}await d.createLogin(t).then(c),a.push({name:"workspace"})}),(t,z)=>(_(),k(f,null,{navbar:r(()=>[i(B(I),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:r(()=>[i(y)]),_:1})]),content:r(()=>[s("div",K,[i($)])]),_:1}))}});const Q=p(j,[["__scopeId","data-v-6ca995fe"]]);export{Q as default};
//# sourceMappingURL=ProjectLogin.8f19b45d.js.map
