import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.c249f2a7.js";import{B as y}from"./BaseLayout.45c40615.js";import{d as l,E as b,L as m,a0 as u,a_ as v,a$ as g,o as _,Y as h,a as r,Z as s,ea as w,eo as S,X as L,c as k,w as n,b as i,u as $}from"./index.b3d93eb2.js";import{u as x}from"./editor.0fb26ee4.js";import{b as B}from"./index.6ffdf3cc.js";import"./Logo.4400aa60.js";import"./workspaceStore.b7061ef4.js";import"./url.f3e0f845.js";import"./colorHelpers.44337da3.js";import"./linters.4714842b.js";import"./asyncComputed.4e6a0885.js";import"./index.d9a42490.js";import"./Avatar.2df9c7fb.js";import"./index.fcefb1f7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="63f771b9-153f-4fd5-a6b0-b32548bb911e",e._sentryDebugIdIdentifier="sentry-dbid-63f771b9-153f-4fd5-a6b0-b32548bb911e")}catch{}})();const I=l({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=b({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...m(o)}}});const P={class:"v-spinner"};function D(e,o,a,d,c,p){return v((_(),h("div",P,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[g,e.loading]])}const R=u(I,[["render",D],["__scopeId","data-v-06538001"]]),j={class:"content"},z=l({__name:"ProjectLogin",setup(e){const o=w(),a=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function p(){const t=o.query["api-key"];if(typeof t=="string")return t}return L(async()=>{const t=p();if(!t){a.push({name:"error"});return}await d.createLogin(t).then(c),a.push({name:"workspace"})}),(t,C)=>(_(),k(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",j,[i(R)])]),_:1}))}});const J=u(z,[["__scopeId","data-v-944edebb"]]);export{J as default};
//# sourceMappingURL=ProjectLogin.339d15cd.js.map
