import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.c30bdc6b.js";import{B as y}from"./BaseLayout.392de2d1.js";import{d as l,E as m,L as b,a0 as u,a_ as v,a$ as g,o as _,Y as h,a as r,Z as s,ea as w,eo as S,X as L,c as k,w as n,b as i,u as $}from"./index.34a50bd7.js";import{u as x}from"./editor.5497606f.js";import{b as B}from"./index.8e03efc5.js";import"./Logo.5aac8948.js";import"./workspaceStore.23978c5d.js";import"./url.aa198299.js";import"./colorHelpers.c33d32de.js";import"./linters.2d040616.js";import"./asyncComputed.23c0a50b.js";import"./index.b87e2354.js";import"./Avatar.232c1dec.js";import"./index.f8dc65de.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="030d6e8d-d4b9-4674-b318-c7ba9ad55dea",e._sentryDebugIdIdentifier="sentry-dbid-030d6e8d-d4b9-4674-b318-c7ba9ad55dea")}catch{}})();const I=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const P={class:"v-spinner"};function D(e,o,a,d,c,p){return v((_(),h("div",P,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const R=u(I,[["render",D],["__scopeId","data-v-06538001"]]),j={class:"content"},z=l({__name:"ProjectLogin",setup(e){const o=w(),a=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function p(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=p();if(!t){a.push({name:"error"});return}await d.createLogin(t).then(c),a.push({name:"workspace"})}),(t,C)=>(_(),k(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",j,[i(R)])]),_:1}))}});const J=u(z,[["__scopeId","data-v-944edebb"]]);export{J as default};
//# sourceMappingURL=ProjectLogin.304206fc.js.map
