import{_}from"./Login.vue_vue_type_script_setup_true_lang.1e0bc89d.js";import{b as m,u as l}from"./workspaceStore.a1267983.js";import{d as f,eq as b,ed as y,X as g,b as w,u as d,o as k,$ as h}from"./vue-router.6860ceb3.js";import"./Logo.8a49d6d1.js";import"./CircularLoading.de05aa1d.js";import"./string.893bd786.js";import"./index.f8d21003.js";import"./url.f6200731.js";import"./colorHelpers.748474a2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e037460d-ebe9-4706-bc11-221a5a122187",e._sentryDebugIdIdentifier="sentry-dbid-e037460d-ebe9-4706-bc11-221a5a122187")}catch{}})();const v={class:"runner"},I=f({__name:"Login",setup(e){const o=b(),r=y(),i=m(),n=l(),p=async()=>{await i.signUp();const{redirect:t,...s}=r.query;if(t){await o.push({path:t,query:s,params:r.params});return}o.push({name:"playerHome",query:s})};return(t,s)=>{var a,c,u;return k(),g("div",v,[w(_,{"logo-url":(c=(a=d(n).state.workspace)==null?void 0:a.logoUrl)!=null?c:void 0,"brand-name":(u=d(n).state.workspace)==null?void 0:u.brandName,onDone:p},null,8,["logo-url","brand-name"])])}}});const R=h(I,[["__scopeId","data-v-907be835"]]);export{R as default};
//# sourceMappingURL=Login.8750ce32.js.map
