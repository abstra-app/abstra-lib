import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.fa5b323d.js";import{B as y}from"./BaseLayout.b3237814.js";import{d as l,E as m,L as b,a0 as u,a_ as v,a$ as g,o as _,Y as h,a as s,Z as a,ea as w,eA as S,X as L,c as k,w as n,b as i,u as $}from"./index.0c0e1d0a.js";import{u as x}from"./editor.39ab4187.js";import{b as B}from"./index.b6168bfa.js";import"./Logo.8e7acfd3.js";import"./workspaceStore.fa3f525e.js";import"./url.bf8922c2.js";import"./colorHelpers.876dc6fb.js";import"./linters.11a97fea.js";import"./asyncComputed.37a592be.js";import"./index.a3d7c4db.js";import"./Avatar.88f8e5ab.js";import"./index.213ef676.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="70f4f5f0-7389-4f54-9840-e0cc427d70bc",e._sentryDebugIdIdentifier="sentry-dbid-70f4f5f0-7389-4f54-9840-e0cc427d70bc")}catch{}})();const I=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...b(o)}}});const P={class:"v-spinner"};function D(e,o,r,c,d,p){return v((_(),h("div",P,[s("div",{class:"v-beat v-beat-odd",style:a(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-even",style:a(e.spinnerStyle)},null,4),s("div",{class:"v-beat v-beat-odd",style:a(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const R=u(I,[["render",D],["__scopeId","data-v-06538001"]]),j={class:"content"},z=l({__name:"ProjectLogin",setup(e){const o=w(),r=S(),c=x();function d(){const t=new URL(location.href);t.searchParams.delete("api-key"),r.replace(t.pathname+t.search)}function p(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=p();if(!t){r.push({name:"error"});return}await c.createLogin(t).then(d),r.push({name:"workspace"})}),(t,A)=>(_(),k(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[s("div",j,[i(R)])]),_:1}))}});const J=u(z,[["__scopeId","data-v-944edebb"]]);export{J as default};
//# sourceMappingURL=ProjectLogin.5c6d74da.js.map
