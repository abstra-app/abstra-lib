import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.392fd850.js";import{B as y}from"./BaseLayout.24358ff2.js";import{d as l,E as m,L as v,a0 as u,a_ as g,a$ as b,o as _,Y as h,a as r,Z as s,ea as w,eo as S,X as L,c as k,w as n,b as i,u as $}from"./index.5ea97cf1.js";import{u as x}from"./editor.047f3fba.js";import{b as B}from"./index.e2676f0b.js";import"./Logo.309ea5a3.js";import"./workspaceStore.37fc691c.js";import"./url.68c2ef84.js";import"./colorHelpers.9bfe96cd.js";import"./linters.98c440df.js";import"./asyncComputed.d0c00c96.js";import"./index.6492ae3f.js";import"./Avatar.6d747165.js";import"./index.14b6bb68.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9c14441f-4358-462a-9638-52efe4173c77",e._sentryDebugIdIdentifier="sentry-dbid-9c14441f-4358-462a-9638-52efe4173c77")}catch{}})();const I=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...v(o)}}});const P={class:"v-spinner"};function D(e,o,a,c,d,p){return g((_(),h("div",P,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const R=u(I,[["render",D],["__scopeId","data-v-06538001"]]),j={class:"content"},z=l({__name:"ProjectLogin",setup(e){const o=w(),a=S(),c=x();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function p(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=p();if(!t){a.push({name:"error"});return}await c.createLogin(t).then(d),a.push({name:"workspace"})}),(t,C)=>(_(),k(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",j,[i(R)])]),_:1}))}});const J=u(z,[["__scopeId","data-v-944edebb"]]);export{J as default};
//# sourceMappingURL=ProjectLogin.777c644e.js.map
