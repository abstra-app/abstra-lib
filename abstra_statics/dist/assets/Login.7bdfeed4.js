import{_}from"./Login.vue_vue_type_script_setup_true_lang.c4340410.js";import{b as f,u as m}from"./workspaceStore.b5f7b2f7.js";import{d as l,eq as y,ed as b,X as g,b as w,u as d,o as k,$ as h}from"./vue-router.ddf818f0.js";import"./Logo.c869826f.js";import"./CircularLoading.c1dc1ca2.js";import"./string.f8a63dfa.js";import"./index.cfc06248.js";import"./url.eec99bb6.js";import"./colorHelpers.e31c29a1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="483e5aae-2348-46df-a6c5-f3158046ea43",e._sentryDebugIdIdentifier="sentry-dbid-483e5aae-2348-46df-a6c5-f3158046ea43")}catch{}})();const v={class:"runner"},I=l({__name:"Login",setup(e){const o=y(),r=b(),i=f(),a=m(),p=async()=>{await i.signUp();const{redirect:t,...s}=r.query;if(t){await o.push({path:t,query:s,params:r.params});return}o.push({name:"playerHome",query:s})};return(t,s)=>{var n,c,u;return k(),g("div",v,[w(_,{"logo-url":(c=(n=d(a).state.workspace)==null?void 0:n.logoUrl)!=null?c:void 0,"brand-name":(u=d(a).state.workspace)==null?void 0:u.brandName,onDone:p},null,8,["logo-url","brand-name"])])}}});const R=h(I,[["__scopeId","data-v-907be835"]]);export{R as default};
//# sourceMappingURL=Login.7bdfeed4.js.map
