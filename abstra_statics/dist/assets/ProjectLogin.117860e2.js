import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.f3e0b6e1.js";import{B as y}from"./BaseLayout.b915a7a0.js";import{d as l,E as m,L as b,a0 as u,a_ as v,a$ as g,o as _,Y as h,a as r,Z as s,ea as w,eo as S,X as L,c as k,w as n,b as i,u as $}from"./index.f858dbab.js";import{u as x}from"./editor.ecaf85b8.js";import{b as B}from"./index.f459f232.js";import"./Logo.5e4dc097.js";import"./workspaceStore.e979a3ed.js";import"./url.672a6937.js";import"./colorHelpers.7d67fe00.js";import"./linters.1d0f72e4.js";import"./asyncComputed.e0114309.js";import"./index.3ecfe4c9.js";import"./Avatar.f9b9846d.js";import"./index.946bc221.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="f6fc6ce5-a14b-4e70-83ba-97cefaba3e49",e._sentryDebugIdIdentifier="sentry-dbid-f6fc6ce5-a14b-4e70-83ba-97cefaba3e49")}catch{}})();const I=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const a=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(a)}}});const P={class:"v-spinner"};function D(e,a,o,c,d,p){return v((_(),h("div",P,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const R=u(I,[["render",D],["__scopeId","data-v-06538001"]]),j={class:"content"},z=l({__name:"ProjectLogin",setup(e){const a=w(),o=S(),c=x();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),o.replace(t.pathname+t.search)}function p(){const t=a.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=p();if(!t){o.push({name:"error"});return}await c.createLogin(t).then(d),o.push({name:"workspace"})}),(t,C)=>(_(),k(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",j,[i(R)])]),_:1}))}});const J=u(z,[["__scopeId","data-v-944edebb"]]);export{J as default};
//# sourceMappingURL=ProjectLogin.117860e2.js.map
