import{_}from"./Login.vue_vue_type_script_setup_true_lang.381adc03.js";import{b as m,u as l}from"./workspaceStore.6a7f3351.js";import{d as f,eq as y,ed as b,X as g,b as w,u as i,o as k,$ as h}from"./vue-router.56e874b7.js";import"./Logo.632325f5.js";import"./CircularLoading.1d7bc5ae.js";import"./string.9a6f74f9.js";import"./index.edfd61aa.js";import"./url.e220ac39.js";import"./colorHelpers.c64d4ebe.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="82e15942-9a45-4917-ae9c-683021a24663",e._sentryDebugIdIdentifier="sentry-dbid-82e15942-9a45-4917-ae9c-683021a24663")}catch{}})();const v={class:"runner"},I=f({__name:"Login",setup(e){const o=y(),r=b(),p=m(),a=l(),d=async()=>{await p.signUp();const{redirect:t,...s}=r.query;if(t){await o.push({path:t,query:s,params:r.params});return}o.push({name:"playerHome",query:s})};return(t,s)=>{var n,c,u;return k(),g("div",v,[w(_,{"logo-url":(c=(n=i(a).state.workspace)==null?void 0:n.logoUrl)!=null?c:void 0,"brand-name":(u=i(a).state.workspace)==null?void 0:u.brandName,onDone:d},null,8,["logo-url","brand-name"])])}}});const R=h(I,[["__scopeId","data-v-907be835"]]);export{R as default};
//# sourceMappingURL=Login.654230da.js.map
