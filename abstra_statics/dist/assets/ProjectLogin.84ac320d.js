import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.b3499ea2.js";import{B as y}from"./BaseLayout.cc15bb37.js";import{d as p,D as m,K as b,$ as u,aZ as v,a_ as g,o as _,X as h,a as s,Y as a,ed as w,eq as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.fe0bc544.js";import{u as x}from"./editor.04756f4c.js";import{b as B}from"./index.a13b7724.js";import"./Logo.87194d07.js";import"./workspaceStore.6c4423eb.js";import"./url.f2182192.js";import"./colorHelpers.83400745.js";import"./asyncComputed.53e9b892.js";import"./index.fac79d13.js";import"./Avatar.dd9a704d.js";import"./index.91ba14f5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ee80f9de-0f60-4fea-b590-62fee78e0ed0",e._sentryDebugIdIdentifier="sentry-dbid-ee80f9de-0f60-4fea-b590-62fee78e0ed0")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const D={class:"v-spinner"};function P(e,o,r,d,c,l){return v((_(),h("div",D,[s("div",{class:"v-beat v-beat-odd",style:a(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:a(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:a(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const o=w(),r=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),r.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){r.push({name:"error"});return}await d.createLogin(t).then(c),r.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[s("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.84ac320d.js.map
