import{_}from"./Login.vue_vue_type_script_setup_true_lang.03444d86.js";import{b as m,u as f}from"./workspaceStore.e769f3e4.js";import{d as l,eq as b,ed as y,X as g,b as w,u,o as k,$ as h}from"./vue-router.ef289645.js";import"./Logo.318d94c3.js";import"./CircularLoading.3ef0e827.js";import"./string.f997184e.js";import"./index.2971028a.js";import"./url.7df1a15c.js";import"./colorHelpers.8f934995.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ec27d02d-c09e-45e0-aa40-166ef1393b26",e._sentryDebugIdIdentifier="sentry-dbid-ec27d02d-c09e-45e0-aa40-166ef1393b26")}catch{}})();const v={class:"runner"},I=l({__name:"Login",setup(e){const o=b(),r=y(),i=m(),n=f(),p=async()=>{await i.signUp();const{redirect:t,...s}=r.query;if(t){await o.push({path:t,query:s,params:r.params});return}o.push({name:"playerHome",query:s})};return(t,s)=>{var a,c,d;return k(),g("div",v,[w(_,{"logo-url":(c=(a=u(n).state.workspace)==null?void 0:a.logoUrl)!=null?c:void 0,"brand-name":(d=u(n).state.workspace)==null?void 0:d.brandName,onDone:p},null,8,["logo-url","brand-name"])])}}});const R=h(I,[["__scopeId","data-v-907be835"]]);export{R as default};
//# sourceMappingURL=Login.5bcbb82d.js.map
