import{_ as f}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.fdf2996c.js";import{B as y}from"./BaseLayout.ee42d4b1.js";import{d as p,D as m,K as v,$ as u,aZ as g,a_ as b,o as _,X as h,a as r,Y as s,ea as w,eo as S,W as k,c as L,w as n,b as i,u as $}from"./vue-router.00a420cb.js";import{u as x}from"./editor.3a59ac0a.js";import{b as B}from"./index.72f4e332.js";import"./Logo.759be485.js";import"./workspaceStore.ea06441e.js";import"./url.fed57a6c.js";import"./colorHelpers.a93840c7.js";import"./asyncComputed.eac0df71.js";import"./index.badc9fcf.js";import"./Avatar.3b6384c2.js";import"./index.b00d735b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="a4026ccd-894e-404a-9646-ee1fd043d953",e._sentryDebugIdIdentifier="sentry-dbid-a4026ccd-894e-404a-9646-ee1fd043d953")}catch{}})();const I=p({props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#ea576a"},size:{type:String,default:"10px"},radius:{type:String,default:"100%"}},setup(e){const o=m({spinnerStyle:{width:e.size,height:e.size,borderRadius:e.radius,backgroundColor:e.color}});return{...v(o)}}});const D={class:"v-spinner"};function P(e,o,a,d,c,l){return g((_(),h("div",D,[r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-even",style:s(e.spinnerStyle)},null,4),r("div",{class:"v-beat v-beat-odd",style:s(e.spinnerStyle)},null,4)],512)),[[b,e.loading]])}const K=u(I,[["render",P],["__scopeId","data-v-06538001"]]),R={class:"content"},j=p({__name:"ProjectLogin",setup(e){const o=w(),a=S(),d=x();function c(){const t=new URL(location.href);t.searchParams.delete("api-key"),a.replace(t.pathname+t.search)}function l(){const t=o.query["api-key"];if(typeof t=="string")return t}return k(async()=>{const t=l();if(!t){a.push({name:"error"});return}await d.createLogin(t).then(c),a.push({name:"workspace"})}),(t,z)=>(_(),L(y,null,{navbar:n(()=>[i($(B),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{title:n(()=>[i(f)]),_:1})]),content:n(()=>[r("div",R,[i(K)])]),_:1}))}});const Z=u(j,[["__scopeId","data-v-944edebb"]]);export{Z as default};
//# sourceMappingURL=ProjectLogin.278ac045.js.map
