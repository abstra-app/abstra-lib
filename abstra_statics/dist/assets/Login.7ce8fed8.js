import{_}from"./Login.vue_vue_type_script_setup_true_lang.77f3fed8.js";import{b as f,u as m}from"./workspaceStore.63bcaaff.js";import{d as l,eq as b,ed as y,X as g,b as w,u,o as k,$ as h}from"./vue-router.5a4c25bd.js";import"./Logo.a434788c.js";import"./CircularLoading.44818b70.js";import"./string.ca5e661a.js";import"./index.2fe857d1.js";import"./url.bd3666a7.js";import"./colorHelpers.147ae7b4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b0fc339c-f1b4-44cc-b21d-1f12ed9c46de",e._sentryDebugIdIdentifier="sentry-dbid-b0fc339c-f1b4-44cc-b21d-1f12ed9c46de")}catch{}})();const v={class:"runner"},I=l({__name:"Login",setup(e){const o=b(),r=y(),i=f(),n=m(),p=async()=>{await i.signUp();const{redirect:t,...s}=r.query;if(t){await o.push({path:t,query:s,params:r.params});return}o.push({name:"playerHome",query:s})};return(t,s)=>{var a,c,d;return k(),g("div",v,[w(_,{"logo-url":(c=(a=u(n).state.workspace)==null?void 0:a.logoUrl)!=null?c:void 0,"brand-name":(d=u(n).state.workspace)==null?void 0:d.brandName,onDone:p},null,8,["logo-url","brand-name"])])}}});const R=h(I,[["__scopeId","data-v-907be835"]]);export{R as default};
//# sourceMappingURL=Login.7ce8fed8.js.map
